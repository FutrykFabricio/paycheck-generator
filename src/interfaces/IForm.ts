export interface IDataForm {
  names: string;
  surnames: string;
  cuil: string;
  file: number;
  category: string;
  division: string;
  departament: string;
}

export interface IPaymentForm {
  entryDate: string;
  seniority: number;
  wage: string;
  extraHalf: number;
  extraFull: number;
  holidays: number;
}
