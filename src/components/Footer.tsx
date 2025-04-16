import { Col, Container, Row } from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => (
  <Container className="footer py-3 border-top border-primary">
    <Row className="content">
      <Col xl={6} className="text-center text-xl-start mb-3 mb-xl-0">
        <p className="fira-mono">Built by Samuel Arno Saputra</p>
      </Col>
      <Col xl={6} className="text-center text-xl-end">
        <a
          href={`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`}
          rel="noreferrer"
          target="_blank"
        >
          <FaWhatsapp className="fs-5 me-3" />
        </a>
        <a href="https://instagram.com/sammyarno" rel="noreferrer" target="_blank">
          <FaInstagram className="fs-5 me-3" />
        </a>
        <a href="https://www.linkedin.com/in/samuelsaputra/" rel="noreferrer" target="_blank">
          <FaLinkedin className="fs-5 me-3" />
        </a>
        <a href={`mailto:${process.env.REACT_APP_EMAIL}`} rel="noreferrer" target="_blank">
          <FaEnvelope className="fs-5" />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;
