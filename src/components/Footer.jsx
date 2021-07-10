import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => (
  <Container>
    <Row className="footer py-4">
      <Col xl={4}>
        <p className="fira-mono">Built by Samuel Arno Saputra</p>
      </Col>
      <Col xl={4} className="text-center">
        <a href={`mailto:${process.env.REACT_APP_EMAIL}`} rel="noreferrer" target="_blank">
          <p className="fira-mono">samuelarnosaputra@gmail.com</p>
        </a>
      </Col>
      <Col xl={4} className="text-end">
        <a href={`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size="lg" className="me-4" />
        </a>
        <a href="http://instagram.com/sammyarno" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="me-4" />
        </a>
        <a href="https://www.linkedin.com/in/samuelsaputra/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
