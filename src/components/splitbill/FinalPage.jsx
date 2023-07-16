import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSplitBill } from 'contexts/SplitBillContext';
import { addSeparator, sumAll } from 'utils';
import { toJpeg } from 'html-to-image';
import { saveAs } from 'file-saver';
import moment from 'moment';

const FinalPage = () => {
  const billRef = useRef(null);
  const history = useHistory();
  const { members, finalData, setStep } = useSplitBill();
  const totalDetailPrice = sumAll(finalData.map((x) => x.totalMenuAmount));
  const totalExtraPrice = sumAll(finalData.map((x) => x.totalExtraAmount));

  const handleResetBill = () => {
    setStep(1, true);
    history.push('/utilities/split-bill');
  };

  const handleGenerateBill = () => {
    if (billRef.current === null) {
      return;
    }

    toJpeg(billRef.current, { pixelRatio: 3, backgroundColor: '#0A2833' })
      .then((dataUrl) => {
        saveAs(dataUrl, `bill-${moment().format('DDMMYY')}.jpeg`);
      });
  };

  const hadnleEditCurrentBill = () => {
    setStep(2);
  };

  return (
    <div className="final-page">
      <hr className="mb-0" />
      <div ref={billRef} className="py-3">
        <div className="summary-info px-4">
          <div className="text-center">
            <p className="text-uppercase mb-1">total amount</p>
            <p className="h4 text-primary">{addSeparator((totalDetailPrice + totalExtraPrice))}</p>
          </div>
          <hr />
          <div className="row">
            <div className="col text-center">
              <p className="mb-1">members</p>
              <p className="h5 text-primary">{members.length}</p>
            </div>
            <div className="col text-center border-start border-end">
              <p className="mb-1">details</p>
              <p className="h5 text-primary">{addSeparator(totalDetailPrice)}</p>
            </div>
            <div className="col text-center">
              <p className="mb-1">extras</p>
              <p className="h5 text-primary">{addSeparator(totalExtraPrice)}</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="billing-container px-1">
          {
            finalData.map((result) => (
              <div className="billing-item rounded-1 border border-1 p-2" key={result.id}>
                <div className="row header">
                  <div className="col-8">
                    <p className="text-primary text-capitalize"><b>{result.name}</b></p>
                  </div>
                  <div className="col-4">
                    <p className="text-primary text-end">{addSeparator(result.totalMenuAmount + result.totalExtraAmount)}</p>
                  </div>
                </div>
                <hr className="mt-1 mb-2" />
                <div className="info">
                  {
                    result.menus.map((menu) => (
                      <div className="row info-item" key={menu.id}>
                        <div className="col-8">
                          <p className="text-capitalize"><small>{menu.name}</small></p>
                        </div>
                        <div className="col-4">
                          <p className="text-end"><small>{addSeparator(menu.amount)}</small></p>
                        </div>
                      </div>
                    ))
                  }
                  {
                    result.extras.map((extra) => (
                      <div className="row info-item" key={extra.id}>
                        <div className="col-8">
                          <p className="text-capitalize"><small>{extra.name}</small></p>
                        </div>
                        <div className="col-4">
                          <p className="text-end"><small>{addSeparator(extra.amount)}</small></p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <hr className="mt-0" />
      <div
        role="presentation"
        className="bg-primary border-0 py-2 cursor-pointer mb-2 rounded-1"
        onClick={hadnleEditCurrentBill}
      >
        <p className="text-secondary text-center text-uppercase">edit this bill</p>
      </div>
      <div
        role="presentation"
        className="bg-primary border-0 py-2 cursor-pointer mb-4 rounded-1"
        onClick={handleGenerateBill}
      >
        <p className="text-secondary text-center text-uppercase">download bill</p>
      </div>
      <div
        role="presentation"
        className="border border-primary py-2 cursor-pointer rounded-1"
        onClick={handleResetBill}
      >
        <p className="text-primary text-center text-uppercase">split another bill</p>
      </div>
    </div>
  );
};

export default FinalPage;
