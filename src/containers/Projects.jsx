import {
  Container, Row, Col,
} from 'react-bootstrap';
import useViewportSize from '../hooks/ViewportSize';
import ProjectsMobile from '../components/projects/mobile';
import ProjectsDesktop from '../components/projects/desktop';

const Projects = () => {
  const viewportSize = useViewportSize();

  return (
    <Container fluid className="projects page">
      <Row className="content d-flex justify-content-center align-items-center">
        <Col xs={12} xl={10}>
          {!viewportSize.isMobile ? <ProjectsMobile /> : <ProjectsDesktop />}
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
