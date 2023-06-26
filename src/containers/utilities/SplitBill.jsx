/* eslint-disable */
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Select from 'react-select';
import { getInitialCharacters } from '../../utils';

const defaultDetailItem = (index = 1) => ({
  id: index,
  name: '',
  amount: '',
  members: [],
});

const defaultExtraItem = (index = 1) => ({
  id: index,
  name: '',
  amount: '',
});

const dummyDetails = [
  {
    id: 1,
    name: 'nasi goreng seafood',
    amount: '50.000',
    members: []
  },
  {
    id: 2,
    name: 'cumi goreng tepung',
    amount: '32.000',
    members: []
  },
  {
    id: 3,
    name: 'es teh tawar',
    amount: '12.000',
    members: []
  },
];

const dummyExtras = [
  {
    id: 1,
    name: 'service charge',
    amount: '5%'
  },
  {
    id: 2,
    name: 'tax',
    amount: '10%',
  }
];

const SplitBill = () => {
  const [isLoading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [members, setMembers] = useState(['sam', 'deo', 'jasson']);
  const [details, setDetails] = useState(dummyDetails);
  const [extras, setExtras] = useState(dummyExtras);

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
    setDetails([...details, defaultDetailItem(details.length)]);
  };

  const handleDetailChanged = (id, key, value) => {
    setDetails((prev) => {
      const result = prev;
      const selectedIndex = prev.findIndex((x) => x.id === id);
      
      if (result[selectedIndex]) {
        let tempValue = value;

        if (key === 'amount') {
          const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
          const addSeparator = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
          tempValue = addSeparator(removeNonNumeric(tempValue));
        } 

        result[selectedIndex][key] = tempValue;
      }

      return [...result];
    });
  };

  const handleAddExtraClicked = () => {
    setExtras([...extras, defaultExtraItem(details.length)]);
  };

  const handleExtraChanged = (id, key, value) => {
    setExtras((prev) => {
      const result = prev;
      const selectedIndex = prev.findIndex((x) => x.id === id);
      
      if (result[selectedIndex]) {
        let tempValue = value;

        if (key === 'amount' && !value.includes('%')) {
          const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
          const addSeparator = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  
          tempValue = addSeparator(removeNonNumeric(tempValue));
        } 

        result[selectedIndex][key] = tempValue;
      }

      return [...result];
    });
  };

  const handleReviewClicked = (e) => {
    e.preventDefault();

    setLoading(true);
    setMembers(prev => prev.map(x => x.trim()));

    setTimeout(() => {
      setStep(2);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container className="splitbill page">
      <Row className="content d-flex align-items-start justify-content-center">
        <Col xl={9}>
          <h2 className="lh-sm text-center mb-4 fira-mono">Split Bill</h2>
          {isLoading ? (
            <>
              <p>loading</p>
            </>
          ) : (
            <>
              {/* Step 1 */}
              {step === 1 ? (
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
                        key={item.id}
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
                        key={item.id}
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
              ) : null}

              {/* Step 2 */}
              {step === 2 ? (
                <>
                  <div className="form-review mb-4">
                    <p>Total bill amount: <span className="text-primary">500.000</span></p>
                    <hr />
                    <p className="mb-2">Members:</p>
                      <div className="d-flex align-items-center">
                        {
                          members.map(member => (
                            <div className="member me-2" data-letters={getInitialCharacters(member)} />
                          ))
                        }
                      </div>
                    <hr />
                    <p className="mb-2">{'Who\'s paying?'}</p>
                    {details.map((item) => (
                      <>
                        <div className="detail-item border border-accent rounded px-3 py-2 mb-3">
                          <p className="text-primary text-capitalize lh-2">{item.name}</p>
                          <p><small>{`IDR ${item.amount}`}</small></p>
                          <hr className="mt-1 mb-2" />
                          <div className="d-flex align-items-center">
                            {
                              members.map(member => (
                                <div className="member me-2" data-letters={getInitialCharacters(member)} />
                              ))
                            }
                          </div>
                        </div>
                      </>
                    ))}
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
              ) : null}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SplitBill;
