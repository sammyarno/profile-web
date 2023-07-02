import SplitBillProvider from 'contexts/SplitBillContext';
import SplitBill from './index';

const SplitBillContainer = () => (
  <SplitBillProvider>
    <SplitBill />
  </SplitBillProvider>
);

export default SplitBillContainer;
