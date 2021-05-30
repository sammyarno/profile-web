import Typed from 'react-typed';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = () => (
  <Container className="home">
    <Navbar />
    <div className="content d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <div className="title mb-3">
            <h1>
              Hello
              <span className="text-primary">.</span>
            </h1>
            <h1>
              My name is Sam
              <span className="text-primary">,</span>
            </h1>
            <h1>
              and I am a
              <span className="ms-3 text-primary">
                <Typed
                  strings={['<h2>&lt;b&gt;</h2>Web Engineer<h2>&lt;/b&gt;</h2>']}
                  className="typed-wrapper"
                  typeSpeed={150}
                />
              </span>
            </h1>
          </div>
          <div className="mb-4">
            <h4>
              Specialized in building and designing
              {' '}
              <span className="text-primary">Web Application</span>
              {' '}
              living in Jakarta, Indonesia.
            </h4>
          </div>
          <div>
            <Button size="sm" className="me-3">Let&apos;s Chat</Button>
            <Button variant="outline-primary" size="sm">Download Resume</Button>
          </div>
        </Col>
      </Row>
    </div>
    <Footer />
  </Container>
);

export default App;
