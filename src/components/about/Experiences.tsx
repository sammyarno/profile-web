import { useState } from 'react';
import Collapsible from 'react-collapsible';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Image from 'next/image';
import Link from 'next/link';

import useViewportSize from '@/hooks/ViewportSize';

import CollapsibleHeader from '@/components/collapsible/CollapsibleHeader';

import { experiences } from '@/constants/About';

import type { IExperiencesProps } from './types';

const Experiences = ({ item, onTabSelected }: IExperiencesProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const viewportSize = useViewportSize();

  return (
    <div className="flex w-full flex-col items-start gap-6">
      <h4 className="font-fira text-primary text-2xl tracking-wider">Experiences()</h4>
      <div className="w-full">
        {!viewportSize.isMobile ? (
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>
              {experiences.map((experience, index) => (
                <Tab key={`exp-tab-${index}`}>{experience.company}</Tab>
              ))}
            </TabList>
            {experiences.map((experience, index) => (
              <TabPanel key={`exp-panel-${index}`}>
                <div className="py-3">
                  <Link href={experience.url} target="_blank" rel="noreferrer">
                    <Image
                      src={experience.logo}
                      width={200}
                      height={50}
                      alt={experience.company}
                      className="mb-3 bg-white"
                      unoptimized
                    />
                  </Link>
                  <h5 className="text-primary font-fira text-xl tracking-wide">{experience.title}</h5>
                  <p className="mb-4">{experience.duration}</p>
                  <ul className="list-disc px-8">
                    {experience.list.map(item => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
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
                <div className="p-3">
                  <p className="text-primary">{experience.title}</p>
                  <p className="mb-2">
                    <small>{experience.duration}</small>
                  </p>
                  <ul className="list-disc pl-6">
                    {experience.list.map(item => (
                      <li key={item}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapsible>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Experiences;
