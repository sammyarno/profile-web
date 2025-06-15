import { useCallback } from 'react';
import { FaCheck } from 'react-icons/fa';

import { useSplitBill } from 'contexts/split-bill';
import cx from 'plugins/cx';

const SplitBillMember = () => {
  const { members, setDetails, details, selectedDetail: selected } = useSplitBill();
  const selectedDetail = details.find(d => d.id === selected?.id);

  const handleMemberClicked = (member: string): void => {
    if (!selectedDetail) return;

    setDetails(prev =>
      prev.map(detail => {
        if (detail.id !== selectedDetail.id) return detail;

        const updatedMembers = detail.members.includes(member)
          ? detail.members.filter(m => m !== member)
          : [...detail.members, member];

        return {
          ...detail,
          members: updatedMembers,
        };
      })
    );
  };

  const getMemberSelected = (member: string): boolean => {
    if (selectedDetail && selectedDetail.members && selectedDetail.members.includes(member)) {
      return true;
    }
    return false;
  };

  const chipClass = (member: string) =>
    cx(
      'flex cursor-pointer items-center gap-2 rounded-xl border px-2 py-1',
      getMemberSelected(member) ? 'border-primary bg-primary/20' : 'border-accent bg-accent/20'
    );

  return (
    <div className="flex items-start justify-start gap-2">
      {members.map(member => (
        <button key={member} className={chipClass(member)} role="button" onClick={() => handleMemberClicked(member)}>
          <p className="tracking-wide capitalize">{member}</p>
          {getMemberSelected(member) ? <FaCheck className="size-3" /> : null}
        </button>
      ))}
    </div>
  );
};

export default SplitBillMember;
