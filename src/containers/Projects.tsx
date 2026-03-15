'use client';

import ProjectsContent from '@/components/projects';

const Projects = () => {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4">
      <h4 className="font-fira text-primary mb-6 text-left text-2xl tracking-wider md:w-full">Projects()</h4>
      <div className="mx-auto w-full">
        <ProjectsContent />
      </div>
    </div>
  );
};

export default Projects;
