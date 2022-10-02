import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IAbsence } from "./IAbsence";
import { IDataForm, IPaymentForm } from "./IForm";

export interface IPaycheckContext {
  get: {
    paymentForm: IPaymentForm;
    dataForm: IDataForm;
    values: IValues;
    deductions: IDeductions;
  };
  set: {
    values: Dispatch<SetStateAction<IValues>>;
    deductions: Dispatch<SetStateAction<IDeductions>>;
  };
  onDataChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  onPaymentChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

export interface IValues {
  wage: number;
  production: number;
  presenteeism: number;
  extraHalf: number;
  seniority: number;
  extraFull: number;
  holidays: number;
  rawRemuneration: number;
  netRemuneration: number;
  deductions: number;
  justified: number;
}

export interface IDeductions {
  SIPA: number;
  INSSJP: number;
  socialWork: number;
  absence: number;
  absents: IAbsence[];
}
