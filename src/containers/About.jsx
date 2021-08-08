import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import useScrollInfo from 'react-element-scroll-hook';
import useViewportSize from '../hooks/ViewportSize';
import { experiences } from '../constants/About';
import Bio from '../components/about/Bio';
import Services from '../components/about/Services';
import Experiences, { ExperienceLogo } from '../components/about/Experiences';

const About = () => {
  const viewportSize = useViewportSize();
  const [scrollInfo, setRef] = useScrollInfo();
  const [activeCompany, setActiveCompany] = useState({
    logo: '/images/tokopedia.png',
    url: 'https://tokopedia.com',
  });

  const handleTabSelected = (key) => {
    setActiveCompany(experiences.find((x) => x.company === key));
  };

  return (
    <Container className="about page">
      {
        scrollInfo.y.value <= 100
          ? (
            <div className="scroll-toggle text-center">
              <p className="fira-mono text-primary mb-2">Scroll</p>
              <FontAwesomeIcon icon="long-arrow-alt-down" size="2x" />
            </div>
          ) : null
      }
      <div className="content" ref={setRef}>
        <Row className="d-flex justify-content-center flex-column-reverse flex-xl-row mb-5">
          <Col xl={5}>
            <Services />
          </Col>
          <Col xl={5} className="ps-xl-5 mb-5 mb-xl-0">
            <Bio />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={7}>
            <Experiences
              company={activeCompany}
              onTabSelected={handleTabSelected}
            />
          </Col>
          {
            !viewportSize.isMobile
              ? (
                <Col xl={3}>
                  <ExperienceLogo company={activeCompany} />
                </Col>
              ) : null
          }
        </Row>
      </div>
    </Container>
  );
};

export default About;
