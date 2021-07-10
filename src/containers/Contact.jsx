import React from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';

const Contact = () => {
  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
  };

  return (
    <Container className="container page">
      <Row className="content d-flex align-items-center justify-content-center">
        <Col xl={9}>
          <div className="title text-primary text-center mb-4">
            <h1 className="fira-mono">
              Let&apos;s Build Something Awesome!
            </h1>
          </div>
          <div className="info text-center">
            <h4 className="mb-4">
              Have an exciting project or questions that you want to discuss? Send me a message and let&apos;s chat.
            </h4>
            <Button size="sm" className="me-3" onClick={handleChatClicked}>Let&apos;s Chat</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
