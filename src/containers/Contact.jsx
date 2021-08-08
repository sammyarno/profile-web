import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import useViewportSize from '../hooks/ViewportSize';

const Contact = () => {
  const viewportSize = useViewportSize();

  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
  };

  return (
    <Container className="contact page">
      <Row className="content d-flex align-items-center justify-content-center">
        <Col xl={9}>
          <div className="title text-primary text-center mb-4">
            {
              viewportSize.isDesktop && (
                <h1 className="fira-mono">
                  Let&apos;s Build Something Awesome!
                </h1>
              )
            }
            {
              viewportSize.isMobile && (
                <h2 className="fira-mono">
                  Let&apos;s Build Something Awesome!
                </h2>
              )
            }
          </div>
          <div className="info text-center">
            {
              viewportSize.isDesktop && (
                <h4 className="mb-4">
                  Have an exciting project or questions that you want to discuss? Send me a message and let&apos;s chat.
                </h4>
              )
            }
            {
              viewportSize.isMobile && (
                <h5 className="mb-4">
                  Have an exciting project or questions that you want to discuss?
                </h5>
              )
            }
            <Button size="sm" onClick={handleChatClicked}>Hit me up</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
