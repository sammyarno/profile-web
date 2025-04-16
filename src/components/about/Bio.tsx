import useViewportSize from 'hooks/ViewportSize';
import { skills } from 'constants/About';
import Image from 'next/image';

import aboutImg from 'assets/images/about-dark.svg';

const Bio = () => {
  const viewportSize = useViewportSize();

  return (
    <>
      {!viewportSize.isMobile ? <h4 className="fira-mono text-primary mb-3">Bio()</h4> : null}
      <div className="image-container mb-4 d-flex d-md-block justify-content-center justify-content-md-start">
        <Image src={aboutImg} alt="profile" />
      </div>
      <p className="mb-4">
        Hi there! I&apos;m Samuel, a 27-year-old Software Engineer passionate about building scalable, efficient, and
        maintainable web applications. With 6 years of experience and a love for clean, optimized code, I can turn your
        ideas into a fully functional website—from scratch to launch -
        <span className="text-primary ms-1">yes, from zero to fully launch 🚀</span>.
      </p>
      <p className="mb-3">
        Here are some of my
        <span className="text-primary ms-1">skills</span>:
      </p>
      <div className="skill-container">
        {skills.map(skill => (
          <p className="skill text-primary" key={skill}>
            {skill}
          </p>
        ))}
      </div>
    </>
  );
};

export default Bio;
