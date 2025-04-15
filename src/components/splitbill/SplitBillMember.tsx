import { useSplitBill } from 'contexts/split-bill';
import { getInitialCharacters } from 'utils';
import { ISplitBillMemberProps } from './types';

const SplitBillMember: React.FC<ISplitBillMemberProps> = props => {
  const { selected } = props;
  const { members, setDetails } = useSplitBill();

  const handleMemberClicked = (member: string): void => {
    if (selected) {
      setDetails(prev => {
        const temp = prev;

        temp.map(detail => {
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

  const getMemberSelected = (member: string): boolean => {
    if (selected && selected.members && selected.members.includes(member)) {
      return true;
    }
    return false;
  };

  return (
    <>
      {members.map(member => (
        <div
          className="splitbill-member me-2"
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

export default SplitBillMember;
