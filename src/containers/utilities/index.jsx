import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Utilities = () => (
  <Container fluid className="utilities page">
    <Row className="content d-flex align-items-start justify-content-center">
      <Col xs={12} xl={10}>
        <div className="utilitiy-wrapper d-flex flex-md-row flex-column gap-4">
          <Link className="utility border border-primary p-3 text-capitalize" to="/utilities/split-bill">
            <h4 className="font-weight-bold text-center">split bill</h4>
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Utilities;
