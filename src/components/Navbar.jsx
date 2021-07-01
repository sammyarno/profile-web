import {
  Row, Col, Container,
} from 'react-bootstrap';

const Navbar = () => (
  <Container>
    <Row className="navbar py-4">
      <Col xl={3}>
        <div className="logo-wrapper d-flex align-items-center">
          <h3 className="me-3 fira-mono text-primary">Sam.</h3>
        </div>
      </Col>
      <Col xl={6}>
        <div className="menu-wrapper fira-mono d-flex justify-content-around">
          <div className="menu text-center active">
            <p>
              &lt; Home &gt;
            </p>
          </div>
          <div className="menu text-center">
            <p>
              &lt; About &gt;
            </p>
          </div>
          <div className="menu text-center">
            <p>
              &lt; Projects &gt;
            </p>
          </div>
          <div className="menu text-center">
            <p>
              &lt; Contact &gt;
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Navbar;
