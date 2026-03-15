import type { StaticImageData } from 'next/image';

export interface IPortfolio {
  id: string;
  logo?: string;
  preview?: StaticImageData;
  name: string;
  description: string;
  url: string;
  themeColor?: string;
  year: number;
  skills: string[];
}

export interface IItemProps {
  portfolio: IPortfolio;
  featured?: boolean;
}
