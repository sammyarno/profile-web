import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { sendGAEvent } from '@next/third-parties/google';
import useViewportSize from 'hooks/ViewportSize';

import Bio from 'components/about/Bio';
import Experiences, { ExperienceLogo } from 'components/about/Experiences';
import Services from 'components/about/Services';
import { IExperienceItem } from 'components/about/types';

import { experiences } from 'constants/About';

const About = () => {
  const viewportSize = useViewportSize();
  const [activeCompany, setActiveCompany] = useState<IExperienceItem>(experiences[0]);

  const handleTabSelected = (key: string) => {
    setActiveCompany(prev => experiences.find(x => x.company === key) || prev);
  };

  useEffect(() => {
    sendGAEvent('event', 'pageview', { value: window.location.pathname + window.location.search });
  }, []);

  return (
    <Container className="about page">
      <div className="content">
        <Row className="d-flex justify-content-center flex-column-reverse flex-xl-row mb-5">
          <Col xl={5}>
            <Services />
          </Col>
          <Col xl={5} className="ps-xl-5 mb-5 mb-xl-0">
            <Bio />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={8}>
            <Experiences item={activeCompany} onTabSelected={handleTabSelected} />
          </Col>
          {!viewportSize.isMobile ? (
            <Col xl={3}>
              <ExperienceLogo company={activeCompany} />
            </Col>
          ) : null}
        </Row>
      </div>
    </Container>
  );
};

export default About;
