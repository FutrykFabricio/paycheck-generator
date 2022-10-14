import {
  DEFAULT_PRESENTEEISM,
  HOURS,
  INSSJP,
  PRODUCTION,
  SIPA,
  SOCIAL_WORK,
} from "../constants";
import { IAbsence } from "../interfaces/IAbsence";
import { IPaycheckContext } from "../interfaces/IPaycheckContext";

const calculate = (context: IPaycheckContext) => {
  const today = new Date();
  let wage = parseFloat(context.get.paymentForm.wage);
  let absence = 0;
  let justified = 0;
  const hourValue = wage / HOURS;

  context.get.deductions.absents.forEach((absent: IAbsence) => {
    if (absent.date.getDay() === 6) return;

    if (absent.date.getDay() === 5) {
      if (absent.justified) justified += hourValue * 4;

      absence += hourValue * 4;
    } else {
      if (absent.justified) justified += hourValue * 8;

      absence += hourValue * 8;
    }
  });

  wage -= absence;

  const production = (wage * PRODUCTION) / 100;
  const presenteeism =
    (wage *
      (DEFAULT_PRESENTEEISM - context.get.deductions.absents.length * 5)) /
    100;
  const years =
    today.getFullYear() -
    new Date(context.get.paymentForm.entryDate).getFullYear();
  const seniority = (years * (wage * context.get.paymentForm.seniority)) / 100;
  const holidays = context.get.paymentForm.holidays * hourValue * 8;
  const extraHalf = hourValue * context.get.paymentForm.extraHalf * 1.5;
  const extraFull = hourValue * context.get.paymentForm.extraFull * 2;

  const rawRemuneration =
    wage +
    production +
    presenteeism +
    seniority +
    holidays +
    extraFull +
    extraHalf;

  const inssjp = (rawRemuneration * INSSJP) / 100;
  const sipa = (rawRemuneration * SIPA) / 100;
  const socialWork = (rawRemuneration * SOCIAL_WORK) / 100;
  const deductions = inssjp + sipa + socialWork + absence;

  const netRemuneration = rawRemuneration - deductions;

  context.set.values({
    ...context.get.values,
    wage,
    production,
    presenteeism,
    seniority,
    holidays,
    extraHalf,
    extraFull,
    deductions,
    justified,
    rawRemuneration,
    netRemuneration,
  });
  context.set.deductions({
    ...context.get.deductions,
    socialWork,
    INSSJP: inssjp,
    SIPA: sipa,
    absence,
  });
};

export default calculate;
