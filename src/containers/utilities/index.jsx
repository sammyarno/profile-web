import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Utilities = () => (
  <Container className="utilities page">
    <div className="content d-flex flex-column align-items-stretch justify-content-start gap-5">
      <Row>
        <Col xs={12} xl={10}>
          <h2 className="mb-4">Published Package(s)</h2>
          <div className="utilitiy-wrapper d-flex flex-md-row flex-column gap-4">
            <a className="utility border border-primary px-3 py-2 text-capitalize" target="_blank" href="https://www.npmjs.com/package/rolling-wheel" rel="noreferrer">
              <p className="font-weight-bold text-center">Rolling Wheel</p>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={10}>
          <h2 className="mb-4">Mini Utilization(s)</h2>
          <div className="utilitiy-wrapper d-flex flex-md-row flex-column gap-4">
            <Link className="utility border border-primary px-3 py-2 text-capitalize" to="/utilities/data-visualization">
              <p className="font-weight-bold text-center">Split Bill</p>
            </Link>
            <Link className="utility border border-primary px-3 py-2 text-capitalize" to="/utilities/split-bill">
              <p className="font-weight-bold text-center">Data Visualization</p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

export default Utilities;
