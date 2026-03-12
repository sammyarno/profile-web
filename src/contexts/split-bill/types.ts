import type { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IProvider {
  children: ReactNode;
}

export interface IContext {
  members: string[];
  details: IItemDetail[];
  extras: IExtraDetail[];
  setMembers: Dispatch<SetStateAction<string[]>>;
  setDetails: Dispatch<SetStateAction<IItemDetail[]>>;
  setExtras: Dispatch<SetStateAction<IBaseDetail[]>>;
  isLoading: boolean;
  step: number;
  setStep: (nextStep: number, reset?: boolean) => void;
  calculateFinal: () => void;
  finalData: IFinalDetail[];
  selectedDetail?: IItemDetail;
  setSelectedDetail: Dispatch<SetStateAction<IItemDetail | undefined>>;
}

export interface IBaseDetail {
  id: number;
  name: string;
  amount: string;
}

export type IItemDetail = IBaseDetail & {
  members: string[];
};

export type IExtraDetail = IBaseDetail;

export interface IFinalDetailItem {
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

export interface IDetailChangeParams {
  id: number;
  key: keyof IItemDetail;
  value: string;
}

export interface IExtraChangeParams {
  id: number;
  key: keyof IExtraDetail;
  value: string;
}
