export interface IAddress {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export interface IContact {
  email: string;
  phone: string;
  address: IAddress;
}

export interface ISocial {
  twitter: string;
  instagram: string;
  linkedin: string;
  github: string;
  website: string;
}

export interface ICompanyLocation {
  city: string;
  state: string;
  country: string;
  zipcode: string;
  street: string;
}

export interface ICompany {
  name: string;
  location: ICompanyLocation;
  industry: string;
}

export interface ISkills {
  frontend: string[];
  backend: string[];
  devops: string[];
  tools: string[];
  soft_skills: string[];
}

export interface IProject {
  name: string;
  tech_stack: string[];
  role: string;
  duration: string;
  team_size: number;
}

export interface IExperience {
  years: number;
  skills: ISkills;
  projects: {
    [key: string]: IProject;
  };
}

export interface IWork {
  position: string;
  company: ICompany;
  experience: IExperience;
}

export interface ISampleData {
  name: string;
  age: number;
  contact: IContact;
  social: ISocial;
  work: IWork;
}

export interface IHierarchyNode {
  name: string;
  value?: any;
  children: IHierarchyNode[];
}
