import PropTypes from 'prop-types';
import { useSplitBill } from 'contexts/SplitBillContext';
import { getInitialCharacters } from 'utils';

const ReviewMember = (props) => {
  const { selected } = props;
  const { members, setDetails } = useSplitBill();

  const handleMemberClicked = (member) => {
    if (selected) {
      setDetails((prev) => {
        const temp = prev;

        temp.map((detail) => {
          if (detail.id === selected.id) {
            if (detail.members.includes(member)) {
              detail.members.splice(detail.members.indexOf(member), 1);
            } else {
              detail.members.push(member);
            }
          }

          return detail;
        });

        return [...temp];
      });
    }
  };

  const getMemberSelected = (member) => {
    if (selected && selected.members && selected.members.includes(member)) {
      return true;
    }
    return false;
  };

  return (
    <>
      {members.map((member) => (
        <div
          className="member me-2"
          data-letters={getInitialCharacters(member)}
          data-selected={getMemberSelected(member)}
          key={member}
          role="presentation"
          onClick={() => handleMemberClicked(member)}
        />
      ))}
    </>
  );
};

ReviewMember.defaultProps = {
  selected: null,
};

ReviewMember.propTypes = {
  selected: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    amount: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ReviewMember;
