import { useState } from 'react';
import { useSplitBill } from 'contexts/SplitBillContext';
import { addSeparator, removeNonNumeric, sumAll } from 'utils';
import SplitBillMember from './SplitBillMember';
import ReviewDetail from './ReviewDetail';

const ReviewStep = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const {
    details, setStep, calculateFinal,
  } = useSplitBill();

  const handleDetailClicked = (item) => {
    setSelectedDetail(item);
  };

  const handleFinalizeClicked = (e) => {
    e.preventDefault();
    calculateFinal();
    setStep(3);
  };

  const handleGoBackClicked = () => {
    setStep(1);
  };

  const totalAmount = sumAll(details.map((x) => removeNonNumeric(x.amount)));

  return (
    <>
      <div className="form-review mb-4">
        <p>
          {'Total bill amount: '}
          <span className="text-primary">{addSeparator(totalAmount)}</span>
        </p>
        <hr />
        <p className="mb-2">Members:</p>
        <div className="d-flex align-items-center">
          <SplitBillMember selected={selectedDetail} />
        </div>
        <hr />
        <p className="mb-2">Details</p>
        <div className="detail-container">
          {
            details.map(
              (item) => <ReviewDetail key={item.id} item={item} selected={selectedDetail} onSelected={handleDetailClicked} />,
            )
          }
        </div>
      </div>
      <div
        role="presentation"
        className="bg-primary border-0 py-2 cursor-pointer mb-2"
        onClick={handleFinalizeClicked}
      >
        <p className="text-secondary text-center text-uppercase">finalize</p>
      </div>
      <div
        role="presentation"
        className="py-2 cursor-pointer"
        onClick={handleGoBackClicked}
      >
        <p className="text-center text-uppercase">go back</p>
      </div>
    </>
  );
};

export default ReviewStep;
