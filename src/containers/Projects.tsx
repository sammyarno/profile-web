import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { sendGAEvent } from '@next/third-parties/google';
import useViewportSize from 'hooks/ViewportSize';

import ProjectsDesktop from 'components/projects/desktop';
import ProjectsMobile from 'components/projects/mobile';

const Projects = () => {
  const viewportSize = useViewportSize();

  useEffect(() => {
    sendGAEvent('event', 'pageview', { value: window.location.pathname + window.location.search });
  }, []);

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
