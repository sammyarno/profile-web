/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Row, Col, Tabs, Tab
} from 'react-bootstrap';
import useScrollInfo from 'react-element-scroll-hook';
import { skills, experiences, services } from '../constants/About';

const About = () => {
  const [scrollInfo, setRef] = useScrollInfo();

  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
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
                services.map(service => (
                  <div className="service rounded p-4">
                    <div className="header d-flex justify-content-between align-items-center text-primary mb-4">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar quam vitae nibh eleifend viverra. Donec viverra, magna vitae scelerisque consectetur, eros nibh tincidunt est, at semper 
            </p>
            <p className="mb-3">
              Here are some of my <span className="text-primary">skills</span>:
            </p>
            <div className="skill-container">
              {
                skills.map(skill => (
                  <p className="skill text-primary">{skill}</p>
                ))
              }
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={10}>
            <h4 className="fira-mono text-primary mb-3">Experiences()</h4>
            <div className="experience-container">
              <Tabs className="tabs" variant="pills">
                {
                  experiences.map(experience => (
                    <Tab eventKey={experience.company} title={experience.company}>
                      <div className="experience">
                        <h5 className="text-primary mb-1">{experience.title}</h5>
                        <p className="mb-2">
                          <small>{experience.duration}</small>
                        </p>
                        <ul>
                          {
                            experience.list.map(item => (
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
        </Row>
      </div>
    </Container>
  );
};

export default About;
