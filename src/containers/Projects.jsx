import {
  Container, Row, Col,
} from 'react-bootstrap';
import Slider from 'react-slick';
import useViewportSize from '../hooks/ViewportSize';
import portfolios from '../constants/Portfolios';

const Projects = () => {
  const viewportSize = useViewportSize();

  return (
    <Container fluid className="projects page">
      <Row className="content d-flex justify-content-center align-items-center">
        <Col xs={12} xl={10}>
          {
            !viewportSize.isMobile
              ? (
                <Slider
                  dots
                  centerMode
                  infinite
                  centerPadding="100px"
                  slidesToScroll={1}
                  slidesToShow={1}
                >
                  {
                    portfolios.map((portfolio) => (
                      <div className={`project-wrapper px-5 ${portfolio.id}`}>
                        <div className="image-container">
                          <img src={portfolio.preview} alt="website" />
                        </div>
                        <div className={`project p-2 ${portfolio.id}`}>
                          <div className="inner-wrapper p-3">
                            <a href={portfolio.url} target="_blank" rel="noreferrer">
                              <h4 className="text-primary mb-3">{portfolio.name}</h4>
                            </a>
                            <p className="mb-3">{portfolio.description}</p>
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
              ) : (
                <Slider
                  dots
                  centerMode
                  infinite
                  slidesToScroll={1}
                  slidesToShow={1}
                  arrows={false}
                  className="mobile"
                >
                  {
                    portfolios.map((portfolio) => (
                      <div className="mobile-wrapper">
                        <div className="image-container mb-3">
                          <img src={portfolio.preview} alt="website" />
                        </div>
                        <a href={portfolio.url} target="_blank" rel="noreferrer">
                          <h4 className="text-primary mb-3">{portfolio.name}</h4>
                        </a>
                        <p className="mb-3">
                          {portfolio.description}
                        </p>
                        <div className="skill-wrapper d-flex">
                          {
                            portfolio.skills.map((skill) => (
                              <p className="text-primary me-3" key={skill}>{skill}</p>
                            ))
                          }
                        </div>
                      </div>
                    ))
                  }
                </Slider>
              )
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
