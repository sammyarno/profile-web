import useViewportSize from '../../hooks/ViewportSize';
import { skills } from '../../constants/About';

const Bio = () => {
  const viewportSize = useViewportSize();

  return (
    <>
      {
        !viewportSize.isMobile ? (
          <h4 className="fira-mono text-primary mb-3">Bio()</h4>
        ) : null
      }
      <div className="image-container mb-4">
        <img src="/images/about-dark.svg" alt="profile" />
      </div>
      <p className="mb-4">
        Hi there! I&apos;m Samuel, a 24 years old Web Engineer focus on creating an optimized and clean scalable website. I love what I do and I can help you build your website from scratch —
        {' '}
        <span className="text-primary">yes, from zero to website</span>
        .
      </p>
      <p className="mb-3">
        Here are some of my
        {' '}
        <span className="text-primary">skills</span>
        :
      </p>
      <div className="skill-container">
        {
          skills.map((skill) => (
            <p className="skill text-primary" key={skill}>{skill}</p>
          ))
        }
      </div>
    </>
  );
};

export default Bio;
