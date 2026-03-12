export interface IExperienceItem {
  company: string;
  logo: any;
  url: string;
  title: string;
  duration: string;
  list: string[];
}

export interface IExperiencesProps {
  item: IExperienceItem;
  onTabSelected: (key: string) => void;
}
