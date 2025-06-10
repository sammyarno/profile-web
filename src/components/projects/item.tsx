import Image from 'next/image';

import cx from 'plugins/cx';

import { type IColorKey, colorMap } from 'constants/Portfolios';

import type { IItemProps } from './types';

const Item = ({ portfolio }: IItemProps) => {
  const wrapperClass = (key: string) =>
    cx('relative md:top-32 md:right-14 md:w-1/2 border-2 p-2 md:absolute w-full', colorMap[key as IColorKey]);

  return (
    <div className="relative flex h-full w-full flex-col gap-6 px-4 md:flex-row" key={portfolio.id}>
      <div className="relative h-[40dvh] w-full md:min-h-[calc(100dvh-200px)] md:w-3/5">
        <Image src={portfolio.preview} alt="website" unoptimized fill objectFit="cover" objectPosition="top" />
      </div>
      <div className={wrapperClass(portfolio.id)}>
        <div className="bg-secondary flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <a href={portfolio.url} target="_blank" rel="noreferrer">
              <h2 className="font-fira text-primary text-xl">{portfolio.name}</h2>
            </a>
            <p className="text-base">{portfolio.description}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <p className="font-fira text-lg">Built with</p>
            <div className="flex gap-2">
              {portfolio.skills.map(skill => (
                <p className="text-primary me-3" key={skill}>
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
