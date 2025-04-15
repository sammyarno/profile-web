import { IItemProps } from '../types';

const Item = ({ portfolio }: IItemProps) => (
  <div className={`mobile-wrapper px-5 ${portfolio.id}`} key={portfolio.id}>
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
          {portfolio.skills.map(skill => (
            <p className="text-primary me-xl-3" key={skill}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Item;
