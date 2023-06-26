import { Col, Container, Row } from 'react-bootstrap';
import { getInitialCharacters } from '../../../utils';
import InfoStep from '../../../components/splitbill/InfoStep';
import { useSplitBill } from '../../../contexts/SplitBillContext';

const SplitBill = () => {
  const {
    step, members, details,
  } = useSplitBill();

  return (
    <Container className="splitbill page">
      <Row className="content d-flex align-items-start justify-content-center">
        <Col xl={9}>
          <h2 className="lh-sm text-center mb-4 fira-mono">Split Bill</h2>
          <>
            {/* Step 1 */}
            {step === 1 ? <InfoStep /> : null}

            {/* Step 2 */}
            {step === 2 ? (
              <>
                <div className="form-review mb-4">
                  <p>
                    Total bill amount:
                    <span className="text-primary">500.000</span>
                  </p>
                  <hr />
                  <p className="mb-2">Members:</p>
                  <div className="d-flex align-items-center">
                    {
                            members.map((member) => (
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
                                members.map((member) => (
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
                >
                  <p className="text-secondary text-center text-uppercase">
                    review
                  </p>
                </div>
              </>
            ) : null}
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default SplitBill;
