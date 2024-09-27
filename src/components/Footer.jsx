import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => (
  <Container className="footer py-3 border-top border-primary">
    <Row className="content">
      <Col xl={6} className="text-center text-xl-start mb-3 mb-xl-0">
        <p className="fira-mono">Built by Samuel Arno Saputra</p>
      </Col>
      <Col xl={6} className="text-center text-xl-end">
        <a href={`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'whatsapp']} size="lg" className="me-4" />
        </a>
        <a href="https://instagram.com/sammyarno" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="me-4" />
        </a>
        <a href="https://www.linkedin.com/in/samuelsaputra/" rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" className="me-4" />
        </a>
        <a href={`mailto:${process.env.REACT_APP_EMAIL}`} rel="noreferrer" target="_blank">
          <FontAwesomeIcon icon={['far', 'envelope']} size="lg" />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
