import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { removeNonNumeric, sumAll } from 'utils';
import { evaluate } from 'mathjs';

const SplitBillContext = createContext(null);

// custom hook
export const useSplitBill = () => {
  const ctx = React.useContext(SplitBillContext);

  if (!ctx) {
    throw new Error('useSplitBill must be used within the SplitBillProvider');
  }

  return ctx;
};

// const dummyMembers = ['sam', 'deo', 'jasson harsojo', 'jasson statham'];
// const dummyDetails = [
//   {
//     id: 1,
//     name: 'nasi goreng seafood',
//     amount: '50.000',
//     members: ['sam'],
//   },
//   {
//     id: 2,
//     name: 'cumi goreng tepung',
//     amount: '32.000',
//     members: ['deo'],
//   },
//   {
//     id: 3,
//     name: 'es teh tawar',
//     amount: '12.000',
//     members: ['sam', 'deo'],
//   },
//   {
//     id: 4,
//     name: 'udang goreng mayones',
//     amount: '80.000',
//     members: ['jasson harsojo'],
//   },
//   {
//     id: 5,
//     name: 'indomie goreng',
//     amount: '40.000',
//     members: ['jasson statham'],
//   },
// ];
// const dummyExtras = [
//   {
//     id: 1,
//     name: 'service charge',
//     amount: '5%',
//   },
//   {
//     id: 2,
//     name: 'tax',
//     amount: '10%',
//   },
// ];

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

const SplitBillProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [details, setDetails] = useState([defaultDetailItem()]);
  const [extras, setExtras] = useState([defaultExtraItem()]);
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [finalData, setFinalData] = useState([]);

  const handleSetStep = (nextStep) => {
    setLoading(true);

    if (nextStep !== 1) {
      setMembers((prev) => prev.map((x) => x.trim()));
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
        const tempAmount = extra.amount.includes('%') ? evaluate(`${tempTotalMenus} * ${extra.amount}`) : evaluate(`${removeNonNumeric(extra.amount)} / ${members.length}`);

        result.extras.push({
          name: extra.name,
          amount: tempAmount,
        });

        tempTotalMenus += tempAmount;

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
