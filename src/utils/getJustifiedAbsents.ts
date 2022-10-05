import { IAbsence } from "../interfaces/IAbsence";

export const getJustifiedAbsents = (absents: IAbsence[]) => {
  return absents.filter((absent) => absent.justified);
};
