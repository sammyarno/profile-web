import Image from 'next/image';
import Link from 'next/link';

import { experiences } from '@/constants/About';

const Experiences = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <h4 className="font-fira text-primary text-2xl tracking-wider">Experiences()</h4>
      <div className="relative flex w-full flex-col">
        {/* Timeline line */}
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-white/10 md:left-[9px]" />

        {experiences.map((experience, index) => (
          <div className="group relative flex gap-4 pb-10 last:pb-0 md:gap-6" key={experience.company}>
            {/* Timeline dot */}
            <div className="relative z-10 flex shrink-0 items-start pt-1.5">
              <div className="bg-secondary group-hover:border-primary size-[15px] rounded-full border-2 border-white/20 transition-colors md:size-[19px]" />
            </div>

            {/* Content card */}
            <div className="bg-secondary flex flex-1 flex-col gap-3 rounded-lg border border-white/5 p-4 transition-all group-hover:border-white/10 md:p-5">
              {/* Header */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-1">
                  <Link href={experience.url} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                    <Image
                      src={experience.logo}
                      width={100}
                      height={100}
                      alt={experience.company}
                      className="rounded bg-white p-1"
                    />
                    <h5 className="font-fira group-hover:text-primary text-lg tracking-wide text-white transition-colors">
                      {experience.company}
                    </h5>
                  </Link>
                  <p className="text-primary font-fira text-sm">{experience.title}</p>
                </div>
                <span className="font-fira shrink-0 text-xs tracking-wide text-white/40">{experience.duration}</span>
              </div>

              {/* Achievements */}
              <ul className="flex flex-col gap-1.5 border-t border-white/5 pt-3">
                {experience.list.map(item => (
                  <li className="flex gap-2 text-sm text-white/60" key={item}>
                    <span className="text-primary mt-1 shrink-0 text-xs">&#9656;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
