'use client';

import { useEffect } from 'react';

import { sendGAEvent } from '@next/third-parties/google';

import ProjectsContent from 'components/projects';

const Projects = () => {
  useEffect(() => {
    sendGAEvent('event', 'pageview', { value: window.location.pathname + window.location.search });
  }, []);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl flex-col items-center px-4 md:min-h-[calc(100dvh-106px)]">
      <h4 className="font-fira text-primary mb-6 text-left text-2xl tracking-wider">Projects()</h4>
      <div className="mx-auto w-full">
        <ProjectsContent />
      </div>
    </div>
  );
};

export default Projects;
