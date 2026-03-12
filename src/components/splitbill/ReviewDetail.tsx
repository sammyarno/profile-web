import { useMemo } from 'react';

import { useSplitBill } from '@/contexts/split-bill';
import cx from '@/plugins/cx';
import { getInitialCharacters } from '@/utils';

import { IReviewDetailProps } from './types';

const ReviewDetail = ({ item, onClick }: IReviewDetailProps) => {
  const { selectedDetail } = useSplitBill();
  const isActive = selectedDetail && item.id === selectedDetail.id;
  const className = useMemo(
    () =>
      cx(
        'rounded border px-3 py-2 cursor-pointer',
        isActive ? 'border-primary bg-primary/20' : 'border-accent bg-accent/20'
      ),
    [isActive]
  );

  return (
    <div className={className} onClick={() => onClick(item)} data-active={isActive}>
      <p className="tracking-wide capitalize">{item.name}</p>
      <p className="text-sm">{item.amount}</p>
      {item.members.length > 0 ? <hr className="my-2" /> : null}
      <div className="flex items-start justify-start gap-2">
        {item.members.map((member, index) => (
          <div
            className="border-accent bg-accent/20 rounded-xl border px-2 py-1"
            data-letters={getInitialCharacters(member)}
            key={`${member}-${index}`}
          >
            <p className="tracking-wide capitalize">{member}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewDetail;
