import { useHistory } from 'react-router-dom';
import { useSplitBill } from 'contexts/SplitBillContext';
import { addSeparator, sumAll } from 'utils';

const FinalPage = () => {
  const history = useHistory();
  const { members, finalData, setStep } = useSplitBill();
  const totalDetailPrice = sumAll(finalData.map((x) => x.totalMenuAmount));
  const totalExtraPrice = sumAll(finalData.map((x) => x.totalExtraAmount));

  const handleResetBill = () => {
    setStep(1, true);
    history.push('/utilities/split-bill');
  };

  return (
    <div className="final-page">
      <p>
        {'Total members: '}
        <span className="text-primary">{members.length}</span>
      </p>
      <p>
        {'Total amount: '}
        <span className="text-primary">{addSeparator(totalDetailPrice)}</span>
      </p>
      <p>
        {'Total extra: '}
        <span className="text-primary">{addSeparator(totalExtraPrice)}</span>
      </p>
      <hr />
      <div className="billing-container">
        {
          finalData.map((result) => (
            <div className="billing-item rounded-1 border p-2 mb-4" key={result.id}>
              <div className="row header">
                <div className="col-8">
                  <p className="text-primary h5 text-capitalize">{result.name}</p>
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
      <hr />
      <div
        role="presentation"
        className="bg-primary border-0 py-2 cursor-pointer mb-4 rounded-1"
        // onClick={handleFinalizeClicked}
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
