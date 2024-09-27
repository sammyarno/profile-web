import useViewportSize from 'hooks/ViewportSize';
import { skills } from 'constants/About';

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
        Hi there! I&apos;m Samuel, a 26-year-old Software Engineer specializing in creating scalable, robust, and maintainable web applications. With 4 years of professional experience and a passion for clean, optimized code, I can help you build your website from scratch —
        <span className="text-primary ms-1">yes, from zero to fully functional</span>
        .
      </p>
      <p className="mb-3">
        Here are some of my
        <span className="text-primary ms-1">skills</span>
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
