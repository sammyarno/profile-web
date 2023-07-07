import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { normalizePercentageInput, removeNonNumeric, sumAll } from 'utils';
import { evaluate, round } from 'mathjs';

const SplitBillContext = createContext(null);

export const useSplitBill = () => {
  const ctx = React.useContext(SplitBillContext);

  if (!ctx) {
    throw new Error('useSplitBill must be used within the SplitBillProvider');
  }

  return ctx;
};

export const defaultDetailItem = (index = 1) => ({
  id: index,
  name: '',
  amount: '',
  members: [],
});

export const defaultExtraItem = (index = 1) => ({
  id: index,
  name: '',
  amount: '',
});

export const defaultFinalItem = (index = 1) => ({
  id: index,
  name: '',
  totalMenuAmount: 0,
  totalExtraAmount: 0,
  menus: [],
  extras: [],
});

// const dummyMembers = ['sam', 'luke', 'alchrist', 'richard'];
// const dummyDetails = [
//   {
//     id: 1,
//     name: 'Ramyeon',
//     amount: '147.000',
//     members: ['luke', 'alchrist', 'richard'],
//   },
//   {
//     id: 2,
//     name: 'Galbitang',
//     amount: '89.000',
//     members: ['sam'],
//   },
//   {
//     id: 3,
//     name: 'pork combo set a',
//     amount: '269.000',
//     members: ['sam', 'luke', 'alchrist', 'richard'],
//   },
// ];
// const dummyExtras = [
//   {
//     id: 1,
//     name: 'service charge',
//     amount: '7%',
//   },
//   {
//     id: 2,
//     name: 'tax',
//     amount: '10%',
//   },
// ];

const SplitBillProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [details, setDetails] = useState([defaultDetailItem()]);
  const [extras, setExtras] = useState([defaultExtraItem()]);
  // const [members, setMembers] = useState(dummyMembers);
  // const [details, setDetails] = useState(dummyDetails);
  // const [extras, setExtras] = useState(dummyExtras);
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [finalData, setFinalData] = useState([]);

  const handleSetStep = (nextStep, reset = false) => {
    setLoading(true);

    if (nextStep !== 1) {
      setMembers((prev) => prev.map((x) => x.trim()));
    }

    if (reset && nextStep === 1) {
      setMembers([]);
      setDetails([defaultDetailItem()]);
      setExtras([defaultExtraItem()]);
      setFinalData([]);
    }

    setTimeout(() => {
      setStep(nextStep);
      setLoading(false);
    }, 0);
  };

  const calculateFinal = () => {
    const results = members.map((member, index) => ({
      ...defaultFinalItem(index + 1),
      name: member,
    }));

    results.map((result) => {
      const temp = result;

      // calculate menus
      details.map((detail) => {
        if (detail.members.includes(result.name)) {
          result.menus.push({
            name: detail.name,
            amount: Number(removeNonNumeric(detail.amount)) / Number(detail.members.length),
          });
        }

        return detail;
      });

      const subTotalMenus = sumAll(temp.menus.map((x) => removeNonNumeric(x.amount)));
      let tempTotalMenus = subTotalMenus;

      // calculate extras
      extras.map((extra) => {
        const tempAmount = extra.amount.includes('%')
          ? round(evaluate(`${tempTotalMenus} * ${normalizePercentageInput(extra.amount)}`), 0)
          : evaluate(`${removeNonNumeric(extra.amount)} / ${members.length}`);

        result.extras.push({
          name: extra.name,
          amount: tempAmount,
        });

        tempTotalMenus += Number(tempAmount);

        return extra;
      });

      const subTotalExtras = sumAll(temp.extras.map((x) => removeNonNumeric(x.amount)));

      // calculate totalAmount
      temp.totalMenuAmount = subTotalMenus;
      temp.totalExtraAmount = subTotalExtras;

      return temp;
    });

    setFinalData(results);
  };

  return (
    <SplitBillContext.Provider
      value={{
        members,
        details,
        extras,
        setMembers,
        setDetails,
        setExtras,
        isLoading,
        step,
        setStep: handleSetStep,
        calculateFinal,
        finalData,
      }}
    >
      {children}
    </SplitBillContext.Provider>
  );
};

SplitBillProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SplitBillProvider;
