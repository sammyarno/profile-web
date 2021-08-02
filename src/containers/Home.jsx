import Typed from 'react-typed';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const Home = () => {
  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
  };

  const handleResumeClicked = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/file/Samuel.pdf`, '_blank');
  };

  return (
    <Container className="home page">
      <Row className="content d-flex align-items-center justify-content-center">
        <Col xl={9}>
          <div className="title">
            <h3 className="text-primary mb-3">
              Hello.
            </h3>
            <h1>
              My name is Sam
              <span className="text-primary">,</span>
            </h1>
            <h1 className="mb-3">
              and I am a
              <span className="ms-3 text-primary">
                <Typed
                  strings={['Web Engineer']}
                  className="typed-wrapper"
                  typeSpeed={150}
                  backSpeed={100}
                  loop
                  loopCount={5}
                />
              </span>
            </h1>
          </div>
          <div className="info mb-4">
            <h5>
              Specialized in building and designing
              {' '}
              <span className="text-primary">Web Application</span>
              {' '}
              living in Jakarta, Indonesia.
              {' '}
              Currently a Software Engineer at
              {' '}
              <span className="text-primary">Tokopedia</span>
              {' '}
              focused on Web Platform
            </h5>
          </div>
          <div className="button-wrapper">
            <Button size="sm" className="me-3" onClick={handleChatClicked}>Let&apos;s Chat</Button>
            <Button variant="outline-primary" size="sm" onClick={handleResumeClicked}>Download Resume</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
