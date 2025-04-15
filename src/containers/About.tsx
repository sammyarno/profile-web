import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import useViewportSize from 'hooks/ViewportSize';
import { experiences } from 'constants/About';
import Bio from 'components/about/Bio';
import Services from 'components/about/Services';
import Experiences, { ExperienceLogo } from 'components/about/Experiences';

const About = () => {
  const viewportSize = useViewportSize();
  const [activeCompany, setActiveCompany] = useState({
    logo: experiences[0].logo,
    url: experiences[0].url,
  });

  const handleTabSelected = (key: string) => {
    setActiveCompany(prev => experiences.find((x) => x.company === key) || prev);
  };

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
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
