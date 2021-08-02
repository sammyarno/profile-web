/* eslint-disable */
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import Slider from 'react-slick';
import portfolios from '../constants/Portfolios';

const settings = {
  dots: true,
  centerMode: true,
  infinite: true,
  speed: 500,
  centerPadding: '100px',
  slidesToShow: 1,
  slidesToScroll: 1
};

const Projects = () => {
  
  return (
    <Container fluid className="projects page">
      <Row className="content d-flex justify-content-center">
        <Col xl={10}>
          <Slider {...settings}>
            {
              portfolios.map((portfolio, index) => (
                <div className={`project-wrapper p-5 ${portfolio.id}`}>
                  <div className="image-container">
                    <img src={portfolio.preview} alt="website" />
                  </div>
                  <div className={`project p-2 ${portfolio.id}`}>
                    <div className="inner-wrapper p-3">
                      <a href={portfolio.url} target="_blank">
                        <h4 className="text-primary mb-4">{portfolio.name}</h4>
                      </a>
                      <p className="mb-4">{portfolio.description}</p>
                      <div className="skill-wrapper d-flex">
                        {
                          portfolio.skills.map((skill) => (
                            <p className="text-primary me-xl-3" key={skill}>{skill}</p>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
