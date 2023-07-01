import { defaultDetailItem, defaultExtraItem, useSplitBill } from 'contexts/SplitBillContext';
import { addSeparator, removeNonNumeric } from 'utils';

const InfoStep = () => {
  const {
    members, setMembers, details, setDetails, extras, setExtras, setStep, isLoading,
  } = useSplitBill();

  const handleMemberChanged = (e) => {
    const val = e.target.value;

    if (val) {
      const temp = val.split(',');

      if (temp.length > 0) {
        setMembers(temp);
      }
    }
  };

  const handleAddDetailClicked = () => {
    setDetails([...details, defaultDetailItem(details.length + 1)]);
  };

  const handleDetailChanged = (id, key, value) => {
    setDetails((prev) => {
      const result = prev;
      const selectedIndex = prev.findIndex((x) => x.id === id);

      if (result[selectedIndex]) {
        let tempValue = value;

        if (key === 'amount') {
          tempValue = addSeparator(removeNonNumeric(tempValue));
        }

        result[selectedIndex][key] = tempValue;
      }

      return [...result];
    });
  };

  const handleAddExtraClicked = () => {
    setExtras([...extras, defaultExtraItem(details.length + 1)]);
  };

  const handleExtraChanged = (id, key, value) => {
    setExtras((prev) => {
      const result = prev;
      const selectedIndex = prev.findIndex((x) => x.id === id);

      if (result[selectedIndex]) {
        let tempValue = value;
        console.log(value.includes('%'));
        if (key === 'amount' && !value.includes('%')) {
          tempValue = addSeparator(removeNonNumeric(tempValue));
        }

        result[selectedIndex][key] = tempValue;
      }

      return [...result];
    });
  };

  const handleReviewClicked = (e) => {
    e.preventDefault();
    setStep(2);
  };

  if (isLoading) {
    return <>Loading</>;
  }

  return (
    <>
      <div className="form-member mb-4">
        <p className="mb-2">
          Please fill the members:
        </p>
        <input
          type="text"
          placeholder="sam,ocha,kevin,deo,jasson"
          onChange={handleMemberChanged}
          value={members.join(',')}
          className="rounded-1"
        />
        <p className="mb-2">
          <small>
            divided with
            {' '}
            <i className="text-primary">comma ,</i>
            {' '}
            e.g.
            {' '}
            <span className="text-primary">
              sam,ocha,kevin,deo,jasson
            </span>
          </small>
        </p>
      </div>
      <div className="form-detail mb-4">
        <p className="lh-sm mb-2">Please fill the details:</p>
        {details.map((item) => (
          <div
            className="d-flex align-items-center justidy-content-center gap-2 mb-2"
            key={`detail-${item.id}`}
          >
            <input
              type="text"
              name="name"
              placeholder="nasi goreng"
              value={item.name}
              onChange={(e) => handleDetailChanged(item.id, 'name', e.target.value)}
              className="rounded-1 w-75"
            />
            <input
              type="text"
              name="amount"
              placeholder="50000"
              value={item.amount}
              onChange={(e) => handleDetailChanged(
                item.id,
                'amount',
                e.target.value,
              )}
              className="rounded-1 w-25"
            />
          </div>
        ))}
        <p
          className="text-tertiary text-center mt-3 cursor-pointer"
          role="presentation"
          onClick={handleAddDetailClicked}
        >
          add more details
        </p>
      </div>
      <div className="form-extra mb-4">
        <p className="lh-sm mb-2">Please add extra fee (if any):</p>
        {extras.map((item) => (
          <div
            className="d-flex align-items-center justidy-content-center gap-2 mb-2"
            key={`extra-${item.id}`}
          >
            <input
              type="text"
              name="name"
              placeholder="service charge"
              defaultValue={item.name}
              onChange={(e) => handleExtraChanged(item.id, 'name', e.target.value)}
              className="rounded-1 w-75"
            />
            <input
              type="text"
              name="amount"
              placeholder="20% or 50000"
              value={item.amount}
              onChange={(e) => handleExtraChanged(
                item.id,
                'amount',
                e.target.value,
              )}
              className="rounded-1 w-25"
            />
          </div>
        ))}
        <p
          className="text-tertiary text-center mt-3 cursor-pointer"
          role="presentation"
          onClick={handleAddExtraClicked}
        >
          add more extras
        </p>
      </div>
      <div
        role="presentation"
        className="bg-primary border-0 py-2 cursor-pointer"
        onClick={handleReviewClicked}
      >
        <p className="text-secondary text-center text-uppercase">
          review
        </p>
      </div>
    </>
  );
};

export default InfoStep;
