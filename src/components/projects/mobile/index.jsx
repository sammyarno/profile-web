import Slider from 'react-slick';
import portfolios from '../../../constants/Portfolios';
import Item from './item';

const Projects = () => (
  <Slider
    dots
    centerMode
    infinite
    centerPadding="100px"
    slidesToScroll={1}
    slidesToShow={1}
  >
    {
      portfolios.map((portfolio) => <Item portfolio={portfolio} />)
    }
  </Slider>
);

export default Projects;
