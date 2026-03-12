import { useSplitBill } from 'contexts/split-bill';

import FinalPage from 'components/splitbill/FinalPage';
import InfoStep from 'components/splitbill/InfoStep';
import ReviewStep from 'components/splitbill/ReviewStep';

const SplitBill = () => {
  const { step } = useSplitBill();

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl flex-col items-start gap-6 px-2 py-8 md:min-h-[calc(100dvh-106px)] md:px-0">
      <h4 className="font-fira text-primary text-2xl tracking-wider">SplitBill()</h4>
      <div className="flex w-full flex-col items-start justify-start gap-5 md:w-1/2">
        {/* Step 1 */}
        {step === 1 ? <InfoStep /> : null}

        {/* Step 2 */}
        {step === 2 ? <ReviewStep /> : null}

        {/* Final */}
        {step === 3 ? <FinalPage /> : null}
      </div>
    </div>
  );
};

export default SplitBill;
