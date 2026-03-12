import Image from 'next/image';

import aboutImg from 'assets/images/about-dark.svg';
import useViewportSize from 'hooks/ViewportSize';

import { skills } from 'constants/About';

const Bio = () => {
  const viewportSize = useViewportSize();

  return (
    <div className="flex flex-col">
      <h4 className="font-fira text-primary mb-6 text-2xl tracking-wider">Bio()</h4>
      <div className="image-container d-flex d-md-block justify-content-center justify-content-md-start mb-4">
        <Image src={aboutImg} alt="profile" />
      </div>
      <p className="mb-4">
        Hi there! I&apos;m Samuel, a Software Engineer passionate about building scalable, efficient, and maintainable
        applications. With 6+ years of experience and a love for clean, optimized code, I can turn your ideas into a
        fully functional website—from scratch to launch -
        <span className="text-primary ms-1">yes, from zero to fully launch 🚀</span>.
      </p>
      <p className="mb-3">
        Here are some of my
        <span className="text-primary ms-1">skills</span>:
      </p>
      <div className="flex flex-col gap-4">
        {skills.map((skill, i) => (
          <div className="flex flex-col items-start gap-2" key={`skill-${i}`}>
            <p className="bg-primary/40 font-fira text-lg tracking-wide">{skill.category}</p>
            <div className="flex flex-row gap-3">
              {skill.stacks.map((stack, j) => (
                <p key={`stack-${j}`}>{stack}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bio;
