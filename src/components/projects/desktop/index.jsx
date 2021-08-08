import Slider from 'react-slick';
import portfolios from '../../../constants/Portfolios';
import Item from './item';

const Projects = () => (
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
      portfolios.map((portfolio) => <Item portfolio={portfolio} key={portfolio.id} />)
    }
  </Slider>
);

export default Projects;
