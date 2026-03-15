'use client';

import { ReactTyped } from 'react-typed';

const Home = () => {
  const handleChatClicked = () => {
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text="Hi, Sam. I want to inquire about your service`,
      '_blank'
    );
  };

  const handleResumeClicked = () => {
    window.open(`${process.env.NEXT_PUBLIC_BASE_URL}/file/Samuel.pdf`, '_blank');
  };

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl items-center px-4 md:min-h-[calc(100dvh-106px)]">
      <div className="flex flex-col items-stretch justify-center gap-8 md:gap-4">
        <div className="flex flex-col gap-3">
          <h1
            className="glitch text-primary animate-boot-in text-center text-7xl md:text-left"
            data-text="Hello."
          >
            Hello.
          </h1>
          <h2 className="animate-boot-in text-center text-3xl [animation-delay:200ms] md:text-left">
            <span className="me-2">My name is Sam, and I am a</span>
            <ReactTyped
              strings={['Web Engineer', 'Software Engineer']}
              className="text-primary typed-wrapper"
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h2>
        </div>
        <h5 className="animate-boot-in text-center text-lg [animation-delay:400ms] md:text-left">
          Driven by a passion for building intuitive, high-impact digital experiences that truly connect with users.
        </h5>
        <div className="animate-boot-in flex items-center justify-center gap-6 [animation-delay:600ms] md:justify-start md:gap-10">
          {[
            { value: '6+', label: 'Years Experience' },
            { value: '11', label: 'Projects Built' },
            { value: '4', label: 'Companies' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-primary text-3xl font-bold md:text-4xl">{stat.value}</span>
              <span className="text-xs tracking-wide text-neutral-400 md:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="animate-boot-in flex flex-col items-stretch justify-start gap-3 [animation-delay:800ms] md:flex-row md:items-center md:gap-0">
          <button
            role="button"
            className="cursor-pointer rounded bg-red-900 px-4 py-2 md:me-3"
            onClick={handleChatClicked}
          >
            <strong>Please Help Me !</strong>
          </button>
          <button
            role="button"
            className="bg-primary text-secondary cursor-pointer rounded px-4 py-2 md:me-3"
            onClick={handleResumeClicked}
          >
            <strong>Check Resume</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
