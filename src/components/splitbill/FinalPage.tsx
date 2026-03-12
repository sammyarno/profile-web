'use client';

import { useRef } from 'react';

import { useRouter } from 'next/navigation';

import { useSplitBill } from 'contexts/split-bill';
import { toJpeg } from 'html-to-image';
import { addSeparator, sumAll } from 'utils';

const FinalPage = () => {
  const billRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { members, finalData, setStep } = useSplitBill();
  const totalDetailPrice = sumAll(finalData.map(x => x.totalMenuAmount));
  const totalExtraPrice = sumAll(finalData.map(x => x.totalExtraAmount));

  const handleResetBill = () => {
    setStep(1, true);
    router.push('/utilities/split-bill');
  };

  const handleGenerateBill = () => {
    if (billRef.current === null) {
      return;
    }

    toJpeg(billRef.current, {
      pixelRatio: 1,
      backgroundColor: '#0A2833',
      quality: 0.85,
      width: billRef.current.scrollWidth + 30,
      height: billRef.current.scrollHeight + 30,
      style: {
        padding: '20px',
        boxSizing: 'border-box',
      },
      cacheBust: true,
    }).then(dataUrl => {
      const win = window.open();
      win?.document.write(`<img src="${dataUrl}" />`);
    });
  };

  const handleEditCurrentBill = () => {
    setStep(2);
  };

  return (
    <>
      <div ref={billRef} className="box-border flex w-full flex-col gap-4 py-3">
        <section id="summary" className="flex w-full flex-col gap-4">
          <div className="text-center">
            <p className="font-fire mb-1 text-xl font-bold tracking-wider uppercase">total amount</p>
            <p className="h4 text-primary">{addSeparator(totalDetailPrice + totalExtraPrice)}</p>
          </div>
          <hr />
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-2 p-2">
              <p className="font-fire font-bold tracking-wider uppercase">members</p>
              <p className="text-primary tracking-wide">{members.length}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-2">
              <p className="font-fire font-bold tracking-wider uppercase">details</p>
              <p className="text-primary tracking-wide">{addSeparator(totalDetailPrice)}</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 p-2">
              <p className="font-fire font-bold tracking-wider uppercase">extras</p>
              <p className="text-primary tracking-wide">{addSeparator(totalExtraPrice)}</p>
            </div>
          </div>
        </section>
        <section id="details" className="flex w-full flex-col gap-4">
          {finalData.map(result => (
            <div className="flex w-full flex-col gap-2 border p-2" key={result.id}>
              <div className="flex items-stretch justify-between py-1">
                <p className="text-primary capitalize">{result.name}</p>
                <p className="text-primary">{addSeparator(result.totalMenuAmount + result.totalExtraAmount)}</p>
              </div>
              <hr />
              <div className="flex flex-col gap-1">
                {result.menus.map((menu, index) => (
                  <div className="flex w-full items-center justify-between" key={`detail-${index}`}>
                    <p className="text-sm capitalize">{menu.name}</p>
                    <p className="text-sm tracking-wide">{addSeparator(menu.amount)}</p>
                  </div>
                ))}
                {result.extras.map((extra, index) => (
                  <div className="flex w-full items-center justify-between" key={`extra-${index}`}>
                    <p className="text-sm capitalize">{extra.name}</p>
                    <p className="text-sm tracking-wide">{addSeparator(extra.amount)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="flex w-full flex-col gap-4 py-3">
        <button
          className="text-secondary bg-primary flex cursor-pointer items-center justify-center gap-2 rounded border px-3 py-1 font-bold capitalize"
          onClick={handleEditCurrentBill}
        >
          Edit This Bil
        </button>
        <button
          className="text-secondary bg-primary flex cursor-pointer items-center justify-center gap-2 rounded border px-3 py-1 font-bold capitalize"
          onClick={handleGenerateBill}
        >
          Download Bill
        </button>
        <button
          className="border-primary flex cursor-pointer items-center justify-center gap-2 rounded border px-3 py-1 font-bold capitalize"
          onClick={handleResetBill}
        >
          Split Another Bill
        </button>
      </div>
    </>
  );
};

export default FinalPage;
