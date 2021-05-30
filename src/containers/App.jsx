/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import Slider from 'react-slick';
import Typed from 'react-typed';
import portofolios from '../constants/Portfolios';
import useViewportSize from '../hooks/ViewportSize';

const App = () => {
  const viewport = useViewportSize();

  return (
    <Container className="home">
      <Row className="navbar py-4">
        <Col xl={3}>
          <div className="logo-wrapper d-flex align-items-center">
            <h2 className="me-3">{`<SE/>`}</h2> <p>Samuel Arno Saputra</p>
          </div>
        </Col>
        <Col xl={9}>
          <div className="menu-wrapper d-flex align-items-center justify-content-end">
            <div className="menu active">
              About
            </div>
            <div className="menu">
              Portfolio
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
