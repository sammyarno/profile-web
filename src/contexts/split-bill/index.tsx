'use client';

import { createContext, useContext, useState } from 'react';

import { evaluate, round } from 'mathjs';
import { normalizePercentageInput, removeNonNumeric, sumAll, trimEmptyArray } from 'utils';

import type { IContext, IExtraDetail, IFinalDetail, IItemDetail, IProvider } from './types';

const SplitBillContext = createContext<IContext>({
  members: [],
  details: [],
  extras: [],
  setMembers: () => {},
  setDetails: () => {},
  setExtras: () => {},
  isLoading: false,
  step: 1,
  setStep: () => {},
  calculateFinal: () => {},
  finalData: [],
  selectedDetail: undefined,
  setSelectedDetail: () => {},
});

export const useSplitBill = () => {
  const ctx = useContext(SplitBillContext);

  if (!ctx) {
    throw new Error('useSplitBill must be used within the SplitBillProvider');
  }

  return ctx;
};

export const defaultDetailItem = (index = 1): IItemDetail => ({
  id: index,
  name: '',
  amount: '',
  members: [],
});

export const defaultExtraItem = (index = 1): IExtraDetail => ({
  id: index,
  name: '',
  amount: '',
});

export const defaultFinalItem = (index = 1): IFinalDetail => ({
  id: index,
  name: '',
  totalMenuAmount: 0,
  totalExtraAmount: 0,
  menus: [],
  extras: [],
});

const Provider = ({ children }: IProvider) => {
  const [members, setMembers] = useState<string[]>([]);
  const [details, setDetails] = useState<IItemDetail[]>([defaultDetailItem()]);
  const [extras, setExtras] = useState<IExtraDetail[]>([defaultExtraItem()]);
  const [selectedDetail, setSelectedDetail] = useState<IItemDetail>();
  const [finalData, setFinalData] = useState<IFinalDetail[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSetStep = (nextStep: number, reset = false) => {
    setLoading(true);

    if (nextStep !== 1) {
      setMembers((prev: string[]) => prev.map(x => x.trim()));
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
    const results: IFinalDetail[] = members.map(
      (member, index): IFinalDetail => ({
        ...defaultFinalItem(index + 1),
        name: member,
      })
    );

    const trimmedExtras = trimEmptyArray(extras);

    results.map(result => {
      const temp = result;

      // calculate menus
      details.map(detail => {
        if (detail.members.includes(result.name)) {
          result.menus.push({
            name: detail.name,
            amount: round(Number(removeNonNumeric(detail.amount)) / Number(detail.members.length), 0),
          });
        }

        return detail;
      });

      const subTotalMenus = sumAll(temp.menus.map(x => removeNonNumeric(x.amount)));
      let subTotalExtras = 0;
      let tempTotalMenus = subTotalMenus;

      // calculate extras
      if (trimmedExtras.length > 0) {
        extras.map(extra => {
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

        subTotalExtras = sumAll(temp.extras.map(x => removeNonNumeric(x.amount)));
      } else {
        subTotalExtras = 0;
      }

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
        selectedDetail,
        setSelectedDetail,
      }}
    >
      {children}
    </SplitBillContext.Provider>
  );
};

export default Provider;
