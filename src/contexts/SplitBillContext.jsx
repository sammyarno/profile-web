import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { removeNonNumeric } from 'utils';

const SplitBillContext = createContext(null);

// custom hook
export const useSplitBill = () => {
  const ctx = React.useContext(SplitBillContext);

  if (!ctx) {
    throw new Error('useSplitBill must be used within the SplitBillProvider');
  }

  return ctx;
};

const dummyMembers = ['sam', 'deo', 'jasson harsojo', 'jasson statham'];
const dummyDetails = [
  {
    id: 1,
    name: 'nasi goreng seafood',
    amount: '50.000',
    members: [],
  },
  {
    id: 2,
    name: 'cumi goreng tepung',
    amount: '32.000',
    members: [],
  },
  {
    id: 3,
    name: 'es teh tawar',
    amount: '12.000',
    members: [],
  },
  {
    id: 4,
    name: 'udang goreng mayones',
    amount: '80.000',
    members: [],
  },
  {
    id: 5,
    name: 'indomie goreng',
    amount: '40.000',
    members: [],
  },
];
const dummyExtras = [
  {
    id: 1,
    name: 'service charge',
    amount: '5%',
  },
  {
    id: 2,
    name: 'tax',
    amount: '10%',
  },
];

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

const SplitBillProvider = ({ children }) => {
  const [members, setMembers] = useState(dummyMembers);
  const [details, setDetails] = useState(dummyDetails);
  const [extras, setExtras] = useState(dummyExtras);
  const [total, setTotal] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSetStep = (nextStep) => {
    setLoading(true);

    if (nextStep !== 1) {
      setMembers((prev) => prev.map((x) => x.trim()));
    }

    if (nextStep === 2) {
      const totalAmount = details.map((x) => removeNonNumeric(x.amount)).reduce((a, b) => Number(a) + Number(b));

      if (totalAmount) setTotal(totalAmount);
    }

    setTimeout(() => {
      setStep(nextStep);
      setLoading(false);
    }, 1000);
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
        total,
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
