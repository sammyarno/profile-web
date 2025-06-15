import { MouseEvent } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

import { useSplitBill } from 'contexts/split-bill';
import { addSeparator, removeNonNumeric, sumAll } from 'utils';

import ReviewDetail from './ReviewDetail';
import SplitBillMember from './SplitBillMember';
import { IItemDetail } from './types';

const ReviewStep = () => {
  const { details, setStep, calculateFinal, setSelectedDetail } = useSplitBill();

  const handleDetailClicked = (item: IItemDetail) => {
    setSelectedDetail(item);
  };

  const handleFinalizeClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    calculateFinal();
    setStep(3);
  };

  const handleGoBackClicked = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep(1);
  };

  const totalAmount = sumAll(details.map(x => removeNonNumeric(x.amount)));

  return (
    <>
      <section id="info" className="flex w-full flex-col items-start gap-2">
        <div className="flex gap-2">
          <p className="tracking-wide">Total Bill Amount:</p>
          <p className="text-primary tracking-wider">{addSeparator(totalAmount)}</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-2 tracking-wide">Members</p>
          <SplitBillMember />
        </div>
      </section>
      <hr className="w-full" />
      <section id="details" className="flex w-full flex-col gap-2">
        <p className="tracking-wide">Details</p>
        <div className="flex flex-col gap-3">
          {details.map(item => (
            <ReviewDetail key={item.id} item={item} onClick={handleDetailClicked} />
          ))}
        </div>
      </section>
      <hr />
      <section id="action-button" className="flex w-full justify-between">
        <button
          className="border-accent bg-accent/20 flex cursor-pointer items-center gap-2 rounded border px-3 py-1"
          onClick={handleGoBackClicked}
        >
          <FaChevronLeft className="size-3" />
          Go Back
        </button>
        <button
          className="text-secondary bg-primary flex cursor-pointer items-center gap-2 rounded border px-3 py-1"
          onClick={handleFinalizeClicked}
        >
          <p className="font-bold">Finalize</p>
        </button>
      </section>
    </>
  );
};

export default ReviewStep;
