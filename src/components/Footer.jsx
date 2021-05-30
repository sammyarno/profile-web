import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';

const Footer = () => (
  <Row className="footer py-4">
    <Col xl={4}>
      <p className="fira-mono">Built by Samuel Arno Saputra</p>
    </Col>
    <Col xl={4} className="text-center">
      <p className="fira-mono">samuelarnosaputra@gmail.com</p>
    </Col>
    <Col xl={4} className="text-end">
      <FontAwesomeIcon icon={['fab', 'whatsapp']} size="lg" className="me-3" />
      <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" className="me-3" />
      <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
    </Col>
  </Row>
);

export default Footer;
