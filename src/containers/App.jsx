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

  const handlePortoClicked = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container className="home d-flex align-items-center justify-content-center flex-column py-5 py-lg-0">
      <Row className="w-100">
        <Col className="d-flex align-items-start justify-content-center flex-column" lg={6}>
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
          {
            viewport.isDesktop
              ? (
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
                  <a href="https://wa.me/087788030036" rel="noreferrer" target="_blank" className="me-3">
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" />
                  </a>
                </div>
              ) : null
          }
        </Col>
        <Col lg={6}>
          {
            viewport.isDesktop
              ? (
                <div className="portfolio-container border rounded p-4 w-100">
                  <h4 className="mb-3">
                    <u>My Portfolios</u>
                    :
                  </h4>
                  <div className="list">
                    {
                    portofolios.map((porto, index) => (
                      <div className="item py-2 p-lg-3" key={index}>
                        <Row>
                          <Col xs={4} lg={3} className="d-flex align-items-center justify-content-center mb-3 mb-lg-0">
                            <div className="image-wrapper w-100 h-100 d-flex align-items-center justify-content-center p-3">
                              <img src={porto.image} alt="capture" className="image" />
                            </div>
                          </Col>
                          <Col lg={9} className="text-center text-lg-left">
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
              ) : (
                <>
                  <div className="portfolio-container">
                    <h4 className="mb-3">
                      <u>My Portfolios</u>
                      :
                    </h4>
                    <div className="wrapper">
                      <Slider
                        dots
                        centerMode
                        slidesToShow={1}
                        slidesToScroll={3}
                        arrows={false}
                      >
                        {
                        portofolios.map((porto, index) => (
                          <div className="item rounded border p-3" onClick={() => handlePortoClicked(porto.url)} role="presentation" key={index}>
                            <div className="image-wrapper mb-3">
                              <img src={porto.image} alt="logo" className="image" />
                            </div>
                            <p className="text-center mb-0">{porto.name}</p>
                            <p className="text-center mb-0">
                              <small>{porto.url}</small>
                            </p>
                          </div>
                        ))
                      }
                      </Slider>
                    </div>
                  </div>
                  <hr />
                  <div className="social-container w-100 d-flex align-items center justify-content-end">
                    <a href="https://instagram.com/sammyarno" rel="noreferrer" target="_blank" className="me-3">
                      <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                    </a>
                    <a href="https://linkedin.com/in/samuelsaputra" rel="noreferrer" target="_blank" className="me-3">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                    </a>
                    <a href="mailto:samuelarnosaputra@gmail.com" rel="noreferrer" target="_blank" className="me-3">
                      <FontAwesomeIcon icon={['far', 'envelope']} size="2x" />
                    </a>
                    <a href="https://wa.me/087788030036" rel="noreferrer" target="_blank" className="me-3">
                      <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" />
                    </a>
                  </div>
                </>
              )
          }
        </Col>
      </Row>
    </Container>
  );
};

export default App;
