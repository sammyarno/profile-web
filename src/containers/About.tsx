'use client';

import { useState } from 'react';

import Bio from 'components/about/Bio';
import Experiences from 'components/about/Experiences';
import Services from 'components/about/Services';
import { IExperienceItem } from 'components/about/types';

import { experiences } from 'constants/About';

const About = () => {
  const [activeCompany, setActiveCompany] = useState<IExperienceItem>(experiences[0]);

  const handleTabSelected = (key: string) => {
    setActiveCompany(prev => experiences.find(x => x.company === key) || prev);
  };

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-146.5px)] w-full max-w-7xl flex-col items-start gap-6 py-8 md:min-h-[calc(100dvh-106px)]">
      <div className="flex w-full flex-col items-start md:flex-row">
        <div className="flex flex-1 p-4">
          <Services />
        </div>
        <div className="flex flex-1 p-4">
          <Bio />
        </div>
      </div>
      <div className="border-primary flex w-full justify-start border-t px-4 py-8">
        <Experiences item={activeCompany} onTabSelected={handleTabSelected} />
      </div>
    </div>
  );
};

export default About;
