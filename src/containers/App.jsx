import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import Typed from 'react-typed';
import portofolios from '../constants/Portfolios';

const App = () => (
  <Container className="home d-flex align-items-center justify-content-center flex-column">
    <Row>
      <Col className="d-flex align-items-start justify-content-center flex-column">
        <Typed
          strings={["Hi, Sammy's here !", 'Welcome !']}
          typeSpeed={100}
          backSpeed={100}
          className="title mb-3"
          loop
        />
        <p className="mb-3">
          I am a Front End developer with industry experience building websites and web applications.
          I specialize in JavaScript and have professional experience working with ReactJs and VueJs. Always up for a challenge!
        </p>
        <a href="/file/Samuel.pdf" rel="noreferrer" target="_blank">
          <Button variant="secondary">
            Check my Resume
          </Button>
        </a>
        <hr />
        <div className="social-container w-100">
          <a href="https://instagram.com/sammyarno" rel="noreferrer" target="_blank" className="me-3">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
          <a href="https://linkedin.com/in/samuelsaputra" rel="noreferrer" target="_blank" className="me-3">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
          <a href="mailto:samuelarnosaputra@gmail.com" rel="noreferrer" target="_blank" className="me-3">
            <FontAwesomeIcon icon={['far', 'envelope']} size="2x" />
          </a>
        </div>
      </Col>
      <Col>
        <div className="portfolio-container border rounded p-4 w-100">
          <h4 className="mb-3">
            <u>My Portfolios</u>
            :
          </h4>
          <div className="list">
            {
              portofolios.map((porto, index) => (
                <div className="item p-3" key={index}>
                  <Row>
                    <Col lg={3} className="d-flex align-items-center justify-content-center">
                      <div className="image-wrapper w-100 h-100 d-flex align-items-center justify-content-center p-3">
                        <img src={porto.image} alt="capture" className="image" />
                      </div>
                    </Col>
                    <Col lg={9}>
                      <h6 style={{ color: porto.themeColor }}>
                        <b>
                          {porto.name}
                        </b>
                      </h6>
                      <p className="mb-3">{porto.description}</p>
                      <a href={porto.url} rel="noreferrer" target="_blank">
                        <small>{porto.url}</small>
                      </a>
                    </Col>
                  </Row>
                </div>
              ))
            }
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default App;
