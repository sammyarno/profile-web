import Image from 'next/image';

import cx from '@/plugins/cx';

import { type IColorKey, colorMap } from '@/constants/Portfolios';

import type { IItemProps } from './types';

const Item = ({ portfolio, featured }: IItemProps) => {
  const borderClass = colorMap[portfolio.id as IColorKey];
  const hasPreview = !!portfolio.preview;

  return (
    <a
      href={portfolio.url}
      target="_blank"
      rel="noreferrer"
      className={cx(
        'bg-secondary flex flex-col overflow-hidden rounded-lg border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5',
        borderClass,
        featured && 'lg:col-span-2'
      )}
    >
      {hasPreview ? (
        <div className="relative aspect-video w-full">
          <Image src={portfolio.preview!} alt={portfolio.name} fill className="object-cover object-top" unoptimized />
        </div>
      ) : (
        <div
          className="flex aspect-video items-center justify-center p-6"
          style={{
            background: `linear-gradient(135deg, ${portfolio.themeColor}22 0%, ${portfolio.themeColor}44 100%)`,
          }}
        >
          <h3 className="font-fira text-center text-2xl font-bold text-white/90">{portfolio.name}</h3>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-fira text-primary text-lg">{portfolio.name}</h3>
          <span className="font-fira shrink-0 text-sm text-white/50">{portfolio.year}</span>
        </div>
        <p className={cx('text-sm text-white/70', hasPreview ? 'line-clamp-2' : 'line-clamp-3')}>
          {portfolio.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {portfolio.skills.map((skill) => (
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/60" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Item;
