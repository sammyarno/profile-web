import PropTypes from 'prop-types';

const Item = ({ portfolio }) => (
  <div className={`project-wrapper px-5 ${portfolio.id}`} key={portfolio.id}>
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
);

Item.propTypes = {
  portfolio: PropTypes.shape({
    id: PropTypes.string,
    logo: PropTypes.string,
    preview: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    themeColor: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Item;
