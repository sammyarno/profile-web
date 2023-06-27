import { useState } from 'react';
import { useSplitBill } from 'contexts/SplitBillContext';
import { addSeparator } from 'utils';
import ReviewMember from './ReviewMember';
import ReviewDetail from './ReviewDetail';

const ReviewStep = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const { details, total } = useSplitBill();

  const handleDetailClicked = (item) => {
    setSelectedDetail(item);
  };

  return (
    <>
      <div className="form-review mb-4">
        <p>
          {'Total bill amount: '}
          <span className="text-primary">{addSeparator(total)}</span>
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
              (item) => <ReviewDetail key={item.id} item={item} selected={selectedDetail} onSelected={handleDetailClicked} />,
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
