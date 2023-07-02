import { Col, Container, Row } from 'react-bootstrap';
import InfoStep from 'components/splitbill/InfoStep';
import { useSplitBill } from 'contexts/SplitBillContext';
import ReviewStep from 'components/splitbill/ReviewStep';
import FinalPage from 'components/splitbill/FinalPage';

const SplitBill = () => {
  const {
    step,
  } = useSplitBill();

  return (
    <Container className="splitbill page">
      <Row className="content d-flex align-items-start justify-content-center">
        <Col xl={9}>
          {/* <h2 className="lh-sm text-center mb-4 fira-mono">Split Bill</h2> */}
          <>
            {/* Step 1 */}
            {step === 1 ? <InfoStep /> : null}

            {/* Step 2 */}
            {step === 2 ? <ReviewStep /> : null}

            {/* Final */}
            {step === 3 ? <FinalPage /> : null}
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default SplitBill;
