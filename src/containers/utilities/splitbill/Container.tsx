'use client';

import SplitBillProvider from 'contexts/split-bill';
import SplitBill from './index';

const SplitBillContainer = () => (
  <SplitBillProvider>
    <SplitBill />
  </SplitBillProvider>
);

export default SplitBillContainer;
