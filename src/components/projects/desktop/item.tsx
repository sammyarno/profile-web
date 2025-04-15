import { IItemProps } from '../types';

const Item = ({ portfolio }: IItemProps) => (
  <div className="desktop-wrapper" key={portfolio.id}>
    <div className="image-container mb-3">
      <img src={portfolio.preview} alt="website" />
    </div>
    <a href={portfolio.url} target="_blank" rel="noreferrer">
      <h4 className="text-primary mb-3">{portfolio.name}</h4>
    </a>
    <p className="mb-3">{portfolio.description}</p>
    <div className="skill-wrapper d-flex">
      {portfolio.skills.map(skill => (
        <p className="text-primary me-3" key={skill}>
          {skill}
        </p>
      ))}
    </div>
  </div>
);

export default Item;
