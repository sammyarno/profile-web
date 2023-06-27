import PropTypes from 'prop-types';
import { getInitialCharacters } from 'utils';

const ReviewDetail = (props) => {
  const { item, selected, onSelected } = props;

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
      { item.members.length > 0 ? <hr className="mt-1 mb-2" /> : null }
      <div className="d-flex align-items-center">
        {item.members.map((member, index) => (
          <div
            className="member me-2"
            data-letters={getInitialCharacters(member)}
            key={`${member}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

ReviewDetail.defaultProps = {
  item: null,
  selected: null,
  onSelected: () => {},
};

ReviewDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
  }),
  selected: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
  }),
  onSelected: PropTypes.func,
};

export default ReviewDetail;
