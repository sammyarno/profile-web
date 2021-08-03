import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import useScrollInfo from 'react-element-scroll-hook';
import { skills, experiences, services } from '../constants/About';

const About = () => {
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
        <Row className="d-flex justify-content-center mb-5">
          <Col xl={5}>
            <h4 className="fira-mono text-primary mb-3">Services()</h4>
            <div className="service-container">
              {
                services.map((service) => (
                  <div className="service rounded py-3 px-4">
                    <div className="header d-flex justify-content-between align-items-center text-primary mb-3">
                      <h4>{service.title}</h4>
                      <FontAwesomeIcon icon={service.icon} size="lg" />
                    </div>
                    <p>{service.description}</p>
                  </div>
                ))
              }
            </div>
          </Col>
          <Col xl={5} className="ps-xl-5">
            <h4 className="fira-mono text-primary mb-3">Bio()</h4>
            <div className="image-container mb-4">
              <img src="/images/about-dark.svg" alt="profile" />
            </div>
            <p className="mb-4">
              Hi there! I&apos;m Samuel, a 24 years old Web Engineer focus on creating an optimized and clean scalable website. I love what I do and I can help you build your website from scratch —
              {' '}
              <span className="text-primary">yes, from zero to website</span>
              .
            </p>
            <p className="mb-3">
              Here are some of my
              {' '}
              <span className="text-primary">skills</span>
              :
            </p>
            <div className="skill-container">
              {
                skills.map((skill) => (
                  <p className="skill text-primary">{skill}</p>
                ))
              }
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={7}>
            <h4 className="fira-mono text-primary mb-3">Experiences()</h4>
            <div className="experience-container">
              <Tabs className="tabs" variant="pills" onSelect={handleTabSelected}>
                {
                  experiences.map((experience) => (
                    <Tab eventKey={experience.company} title={experience.company}>
                      <div className="experience">
                        <h5 className="text-primary mb-1">{experience.title}</h5>
                        <p className="mb-2">
                          <small>{experience.duration}</small>
                        </p>
                        <ul>
                          {
                            experience.list.map((item) => (
                              <li>
                                <p>{item}</p>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </Tab>
                  ))
                }
              </Tabs>
            </div>
          </Col>
          <Col xl={3}>
            <a href={activeCompany.url} target="_blank" rel="noreferrer">
              <div className="image-container h-100 d-flex align-items-center">
                <img src={activeCompany.logo} alt="company" className="company-image" />
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
