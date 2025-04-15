import { getInitialCharacters } from 'utils';
import { IReviewDetailProps } from './types';

const ReviewDetail = ({ item, selected, onSelected }: IReviewDetailProps) => {
  return (
    <div
      key={item.id}
      className="detail-item border border-accent rounded px-3 py-2 mb-3"
      role="presentation"
      onClick={() => onSelected(item)}
      data-active={!!(selected && item.id === selected.id)}
    >
      <p className="text-primary text-capitalize lh-2">{item.name}</p>
      <p>
        <small>{item.amount}</small>
      </p>
      {item.members.length > 0 ? <hr className="mt-1 mb-2" /> : null}
      <div className="d-flex align-items-center">
        {item.members.map((member, index) => (
          <div
            className="splitbill-member me-2"
            data-letters={getInitialCharacters(member)}
            key={`${member}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewDetail;
