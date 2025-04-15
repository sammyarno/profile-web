export interface IPortfolio {
  id: string;
  logo?: string;
  preview: string;
  name: string;
  description: string;
  url: string;
  themeColor?: string;
  skills: string[];
}

export interface IItemProps {
  portfolio: IPortfolio;
}
