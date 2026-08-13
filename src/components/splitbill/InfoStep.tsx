import { ChangeEvent, MouseEvent } from 'react';

import { defaultDetailItem, defaultExtraItem, useSplitBill } from '@/contexts/split-bill';
import type { IDetailChangeParams, IExtraChangeParams } from '@/contexts/split-bill/types';
import { addSeparator, removeNonNumeric } from '@/utils';

const InfoStep = () => {
  const { members, setMembers, details, setDetails, extras, setExtras, setStep } = useSplitBill();

  const handleMemberChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val) {
      const temp = val.split(',');

      if (temp.length > 0) {
        setMembers(temp);
      }
    }
  };

  const handleAddDetailClicked = () => {
    setDetails([...details, defaultDetailItem(details.length + 1)]);
  };

  const handleDetailChanged = ({ id, key, value }: IDetailChangeParams) => {
    setDetails(prev => {
      const result = prev;
      const selectedIndex = prev.findIndex(x => x.id === id);

      if (result[selectedIndex]) {
        let tempValue = value;

        if (key === 'amount') {
          tempValue = addSeparator(removeNonNumeric(tempValue));
        }

        result[selectedIndex] = { ...result[selectedIndex], [key]: tempValue };
      }

      return [...result];
    });
  };

  const handleAddExtraClicked = () => {
    setExtras([...extras, defaultExtraItem(details.length + 1)]);
  };

  const handleExtraChanged = ({ id, key, value }: IExtraChangeParams) => {
    setExtras(prev => {
      const result = prev;
      const selectedIndex = prev.findIndex(x => x.id === id);

      if (result[selectedIndex]) {
        let tempValue = value;

        if (key === 'amount' && !value.includes('%')) {
          tempValue = addSeparator(removeNonNumeric(tempValue));
        }

        result[selectedIndex] = { ...result[selectedIndex], [key]: tempValue };
      }

      return [...result];
    });
  };

  const handleReviewClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>
      <section id="member" className="w-full">
        <p className="mb-2">Please fill the members:</p>
        <input
          type="text"
          placeholder="sam,ocha,kevin,deo,jasson"
          onChange={handleMemberChanged}
          value={members.join(',')}
          className="border-accent focus:border-primary w-full rounded border px-2 py-1"
        />
        <p className="mb-2">
          <small>
            divided with <i className="text-primary">comma ,</i> e.g.{' '}
            <span className="text-primary">sam,ocha,kevin,deo,jasson</span>
          </small>
        </p>
      </section>
      <section id="detail" className="flex w-full flex-col items-start justify-start">
        <p className="mb-2">Please fill the details:</p>
        {details.map(item => (
          <div className="mb-2 flex w-full items-center justify-center gap-2" key={`detail-${item.id}`}>
            <input
              type="text"
              name="name"
              placeholder="nasi goreng"
              value={item.name}
              onChange={e => handleDetailChanged({ id: item.id, key: 'name', value: e.target.value })}
              className="border-accent focus:border-primary w-3/4 rounded border px-2 py-1"
            />
            <input
              type="text"
              name="amount"
              placeholder="50000"
              value={item.amount}
              onChange={e => handleDetailChanged({ id: item.id, key: 'amount', value: e.target.value })}
              className="border-accent focus:border-primary w-1/4 rounded border px-2 py-1"
            />
          </div>
        ))}
        <button className="bg-primary/20 cursor-pointer px-2 py-1 text-center" onClick={handleAddDetailClicked}>
          add more details
        </button>
      </section>
      <section id="extra" className="w-full">
        <p className="mb-2">Please add extra fee (if any):</p>
        {extras.map(item => (
          <div className="mb-2 flex w-full items-center justify-center gap-2" key={`extra-${item.id}`}>
            <input
              type="text"
              name="name"
              placeholder="service charge"
              defaultValue={item.name}
              onChange={e => handleExtraChanged({ id: item.id, key: 'name', value: e.target.value })}
              className="border-accent focus:border-primary w-3/4 rounded border px-2 py-1"
            />
            <input
              type="text"
              name="amount"
              placeholder="20% or 50000"
              value={item.amount}
              onChange={e => handleExtraChanged({ id: item.id, key: 'amount', value: e.target.value })}
              className="border-accent focus:border-primary w-1/4 rounded border px-2 py-1"
            />
          </div>
        ))}
        <button className="bg-primary/20 cursor-pointer px-2 py-1 text-center" onClick={handleAddExtraClicked}>
          add more extras
        </button>
      </section>
      <section id="action-button" className="flex w-full justify-end">
        <button
          role="button"
          className="text-secondary bg-primary flex cursor-pointer items-center gap-2 rounded border px-3 py-1"
          onClick={handleReviewClicked}
        >
          <strong>Review</strong>
        </button>
      </section>
    </>
  );
};

export default InfoStep;
