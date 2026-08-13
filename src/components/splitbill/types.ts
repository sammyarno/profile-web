import { ReactNode } from 'react';

export interface IBaseDetail {
  id: number;
  name: string;
  amount: string;
}

export interface IItemDetail extends IBaseDetail {
  members: string[];
}

export interface IFinalDetailItem {
  id: number;
  name: string;
  amount: number;
}

export interface IFinalDetail {
  id: number;
  name: string;
  totalMenuAmount: number;
  totalExtraAmount: number;
  menus: IFinalDetailItem[];
  extras: IFinalDetailItem[];
}

export interface IBillDetail {
  id: number;
  name: string;
  amount: string;
  members: string[];
}

export interface ISplitBillContext {
  members: string[];
  details: IItemDetail[];
  extras: IBaseDetail[];
  setMembers: React.Dispatch<React.SetStateAction<string[]>>;
  setDetails: React.Dispatch<React.SetStateAction<IItemDetail[]>>;
  setExtras: React.Dispatch<React.SetStateAction<IBaseDetail[]>>;
  step: number;
  setStep: (nextStep: number, reset: boolean) => void;
  calculateFinal: () => void;
  finalData: IFinalDetail[];
}

export interface ISplitBillProviderProps {
  children: ReactNode;
}

export interface IReviewDetailProps {
  item: IItemDetail;
  onClick: (item: IItemDetail) => void;
}
