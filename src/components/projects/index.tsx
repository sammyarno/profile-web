'use client';

import { useMemo, useState } from 'react';

import cx from '@/plugins/cx';

import portfolios from '@/constants/Portfolios';

import Item from './item';

const Projects = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const sorted = useMemo(() => [...portfolios].sort((a, b) => b.year - a.year), []);

  const allSkills = useMemo(() => {
    const skills = new Set<string>();
    portfolios.forEach((p) => p.skills.forEach((s) => skills.add(s)));
    return Array.from(skills).sort();
  }, []);

  const filtered = activeSkill ? sorted.filter((p) => p.skills.includes(activeSkill)) : sorted;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveSkill(null)}
          className={cx(
            'rounded-full px-3 py-1 text-sm transition-colors',
            activeSkill === null ? 'bg-primary text-secondary font-medium' : 'bg-white/10 text-white/60 hover:bg-white/20'
          )}
        >
          All
        </button>
        {allSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
            className={cx(
              'rounded-full px-3 py-1 text-sm transition-colors',
              activeSkill === skill
                ? 'bg-primary text-secondary font-medium'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            )}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {filtered.map((portfolio) => (
          <Item portfolio={portfolio} featured={portfolio.year >= 2026} key={portfolio.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
