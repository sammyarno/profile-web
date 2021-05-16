import { Col, Container, Row } from 'react-bootstrap';
import Typed from 'react-typed';
import portofolios from '../constants/Portfolios';

const App = () => (
  <Container className="home d-flex align-items-center justify-content-center">
    <Row className="w-100 h-100">
      <Col className="d-flex align-items-start justify-content-center flex-column">
        <Typed
          strings={["Hi, Sammy's here !"]}
          typeSpeed={100}
          backSpeed={100}
          className="title"
          loop
        />
        <p>
          I am a Front End developer with industry experience building websites and web applications.
          I specialize in JavaScript and have professional experience working with ReactJs and VueJs. Always up for a challenge!
        </p>
      </Col>
      <Col className="d-flex align-items-center justify-content-center">
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
                      <h6 style={{ color: porto.themeColor }}>{porto.name}</h6>
                      <p className="mb-3">{porto.description}</p>
                      <small>{porto.url}</small>
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
