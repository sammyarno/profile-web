import SplitBill from '@/containers/utilities/splitbill/Container';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Split Bill',
  description: 'Split bills easily among friends with this handy calculator.',
};

export default function SplitBillPage() {
  return <SplitBill />;
}
