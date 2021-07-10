/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import useScrollInfo from 'react-element-scroll-hook';

const About = () => {
  const [scrollInfo, setRef] = useScrollInfo();

  const handleChatClicked = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE}?text="Hi, Sam. I want to inquire about the website development`, '_blank');
  };

  console.log('scroll', scrollInfo)

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
      <Row className="content d-flex justify-content-center" ref={setRef}>
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
                <h4>Baack-end Development</h4>
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
    </Container>
  );
};

export default About;
