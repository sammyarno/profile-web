import { Tabs, Tab } from 'react-bootstrap';

import Collapsible from 'react-collapsible';
import useViewportSize from 'hooks/ViewportSize';
import CollapsibleHeader from 'components/collapsible/CollapsibleHeader';
import { experiences } from 'constants/About';
import { IExperiencesProps, IExperienceLogoProps } from './types';

const Experiences = ({ item, onTabSelected }: IExperiencesProps) => {
  const viewportSize = useViewportSize();

  return (
    <>
      <h4 className="fira-mono text-primary mb-3">Experiences()</h4>
      <div className="experience-container">
        {!viewportSize.isMobile ? (
          <Tabs
            className="tabs"
            variant="pills"
            activeKey={item.company}
            onSelect={k => onTabSelected(k || experiences[0].company)}
          >
            {experiences.map(experience => (
              <Tab key={experience.company} eventKey={experience.company} title={experience.company}>
                <div className="experience">
                  <h5 className="text-primary mb-1">{experience.title}</h5>
                  <p className="mb-2">
                    <small>{experience.duration}</small>
                  </p>
                  <ul>
                    {experience.list.map(item => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab>
            ))}
          </Tabs>
        ) : (
          <>
            {experiences.map(experience => (
              <Collapsible
                trigger={<CollapsibleHeader company={experience.company} duration={experience.duration} />}
                lazyRender
                classParentString="collapsible"
                onOpening={() => onTabSelected(experience.company)}
                open={item.company === experience.company}
                key={experience.company}
              >
                <p className="text-primary">{experience.title}</p>
                <p className="mb-2">
                  <small>{experience.duration}</small>
                </p>
                <ul>
                  {experience.list.map(item => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </Collapsible>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export const ExperienceLogo = ({ company }: IExperienceLogoProps) => (
  <a href={company.url} target="_blank" rel="noreferrer">
    <div className="image-container h-100 d-flex align-items-center">
      <img src={company.logo} alt="company" className="company-image" />
    </div>
  </a>
);

export default Experiences;
