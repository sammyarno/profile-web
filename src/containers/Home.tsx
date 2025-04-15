import { useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import ReactGA from 'react-ga4';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import useViewportSize from 'hooks/ViewportSize';

const Home = () => {
  const viewportSize = useViewportSize();
  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
  };

  const handleResumeClicked = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/file/Samuel.pdf`, '_blank');
  };

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }, []);

  return (
    <Container className="home page">
      <Row className="content d-flex align-items-center justify-content-center">
        <Col xl={9}>
          <div className="title">
            <h2 className="text-primary mb-2">
              Hello.
            </h2>
            <h1 className="mb-2">
              My name is Sam
              <span className="text-primary">,</span>
            </h1>
            <h2 className="mb-3">
              <span className="me-2">and I am a</span>
              <ReactTyped
                strings={['Web Engineer', 'Software Engineer']}
                className="text-primary typed-wrapper"
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h2>
          </div>
          <h5 className="info mb-4 lh-base">
            with a passion for crafting intuitive and impactful digital solutions.
          </h5>
          {
            viewportSize.isDesktop
              ? (
                <div className="button-wrapper">
                  <Button size="sm" className="me-3" onClick={handleChatClicked}><strong>I Need Your Help!</strong></Button>
                  <Button variant="outline-primary" size="sm" onClick={handleResumeClicked}><strong>Download Resume</strong></Button>
                </div>
              ) : (
                <div className="button-wrapper d-grid">
                  <Button size="sm" className="mb-3 py-2" onClick={handleChatClicked}><strong>I Need Your Help!</strong></Button>
                  <Button variant="outline-primary" size="sm" onClick={handleResumeClicked}><strong>Download Resume</strong></Button>
                </div>
              )
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
