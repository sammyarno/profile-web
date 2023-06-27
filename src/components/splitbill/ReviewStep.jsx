import { useState } from 'react';
import { useSplitBill } from 'contexts/SplitBillContext';
import ReviewMember from './ReviewMember';
import ReviewDetail from './ReviewDetail';

const ReviewStep = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const { details } = useSplitBill();

  const handleDetailClicked = (item) => {
    setSelectedDetail(item);
  };

  return (
    <>
      <div className="form-review mb-4">
        <p>
          {'Total bill amount: '}
          <span className="text-primary">500.000</span>
        </p>
        <hr />
        <p className="mb-2">Members:</p>
        <div className="d-flex align-items-center">
          <ReviewMember selected={selectedDetail} />
        </div>
        <hr />
        <p className="mb-2">Details</p>
        <div className="detail-container">
          {
            details.map(
              (item) => <ReviewDetail item={item} selected={selectedDetail} onSelected={handleDetailClicked} />,
            )
          }
        </div>
      </div>
      <div
        role="presentation"
        className="bg-primary border-0 py-2 cursor-pointer"
      >
        <p className="text-secondary text-center text-uppercase">finalize</p>
      </div>
    </>
  );
};

export default ReviewStep;
