import {
  Row, Col, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Container>
    <Row className="navbar py-4">
      <Col xl={3}>
        <div className="logo-wrapper d-flex align-items-center">
          <Link to="/">
            <h3 className="me-3 fira-mono">
              &lt;
              <span className="text-primary">Samuel</span>
              /&gt;
            </h3>
          </Link>
        </div>
      </Col>
      <Col xl={6}>
        <div className="menu-wrapper fira-mono d-flex justify-content-around">
          <div className="menu text-center active">
            <Link to="/">
              <p>
                &lt; Home &gt;
              </p>
            </Link>
          </div>
          <div className="menu text-center">
            <Link to="/about">
              <p>
                &lt; About &gt;
              </p>
            </Link>
          </div>
          <div className="menu text-center">
            <Link to="/projects">
              <p>
                &lt; Projects &gt;
              </p>
            </Link>
          </div>
          <div className="menu text-center">
            <Link to="/contact">
              <p>
                &lt; Contact &gt;
              </p>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Navbar;
