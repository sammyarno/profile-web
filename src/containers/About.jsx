/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Row, Col, Button, Tabs, Tab
} from 'react-bootstrap';
import useScrollInfo from 'react-element-scroll-hook';

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
              <div className="service rounded p-4">
                <div className="header d-flex justify-content-between align-items-center text-primary mb-4">
                  <h4>Design</h4>
                  <FontAwesomeIcon icon="palette" size="lg" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar quam vitae nibh</p>
              </div>
              <div className="service rounded p-4">
                <div className="header d-flex justify-content-between align-items-center text-primary mb-4">
                  <h4>Front-end Development</h4>
                  <FontAwesomeIcon icon="code" size="lg" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar quam vitae nibh</p>
              </div>
              <div className="service rounded p-4">
                <div className="header d-flex justify-content-between align-items-center text-primary mb-4">
                  <h4>Back-end Development</h4>
                  <FontAwesomeIcon icon="database" size="lg" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar quam vitae nibh</p>
              </div>
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
              <p className="skill text-primary">React.js</p>
              <p className="skill text-primary">Vue.js</p>
              <p className="skill text-primary">Express.js</p>
              <p className="skill text-primary">Golang</p>
              <p className="skill text-primary">Typescript</p>
              <p className="skill text-primary">HTML</p>
              <p className="skill text-primary">CSS/SCSS</p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xl={10}>
            <h4 className="fira-mono text-primary mb-3">Experiences()</h4>
            <div className="experience-container">
              <Tabs className="tabs" variant="pills" defaultActiveKey="tokopedia">
                <Tab eventKey="tokopedia" title="Tokopedia">
                  <div className="experience">
                    <h5 className="text-primary mb-1">Software Engineer - Web Platform</h5>
                    <p className="mb-2">
                      <small>March 2021 - Now</small>
                    </p>
                    <ul>
                      <li>
                        <p>Part of Home and Search Division.</p>
                      </li>
                      <li>
                        <p>Worked closely with React.js and React-Emotion.</p>
                      </li>
                      <li>
                        <p>Managed to work on a team with Agile Scrum Development process using Kanban Board.</p>
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="modalrakyat" title="Modal Rakyat">
                  <div className="experience">
                    <h5 className="text-primary mb-1">Front-end Software Engineer</h5>
                    <p className="mb-2">
                      <small>August 2019 - March 2021</small>
                    </p>
                    <ul>
                      <li>
                        <p>Developed an enterprise level website for Modal Rakyat and some of its internal system to help them doing company's business. Work in a team and report directly to our CTO and Product Manager.</p>
                      </li>
                      <li>
                        <p>Worked with React.js. Vue.js, Nuxt.js, and SASS.</p>
                      </li>
                      <li>
                        <p>Managed to work on customized Agile Scrum Development process using Kanban Board.</p>
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="accelist" title="Accelist">
                  <div className="experience">
                    <h5 className="text-primary mb-1">Full-stack Software Engineer</h5>
                    <p className="mb-2">
                      <small>March 2018 - Feb 2019</small>
                    </p>
                    <ul>
                      <li>
                        <p>Developed an enterprise level Web and Mobile Application for a national caompany for organizing and centralizing internal data across branches and dealers. Worked in a team that comprises of a Project Manager, two Business Analysts, a Software Architect, and other Developers.</p>
                      </li>
                      <li>
                        <p>Worked with ASP.Net Core 2.2, Vue.Js, and SASS for the Web Application and Xamarin.Android for Mobile Application.</p>
                      </li>
                      <li>
                        <p>Managed to work on Agile Scrum Development process with minimum obstacle.</p>
                      </li>
                      <li>
                        <p>Received positive feedbacks from client and successfully delivered the program on time.</p>
                      </li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
