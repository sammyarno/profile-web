export interface IExperienceItem {
  company: string;
  logo: string;
  url: string;
  title: string;
  duration: string;
  list: string[];
}

export interface IExperiencesProps {
  item: IExperienceItem;
  onTabSelected: (key: string) => void;
}

export interface IExperienceLogoProps {
  company: IExperienceItem;
}
