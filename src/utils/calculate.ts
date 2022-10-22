import {
  DEFAULT_PRESENTEEISM,
  HOURS,
  INSSJP,
  PRODUCTION,
  SIPA,
  SOCIAL_WORK,
} from "../constants";
import { IPaycheckContext } from "../interfaces/IPaycheckContext";

const calculate = (context: IPaycheckContext) => {
  const today = new Date();
  let wage = parseFloat(context.get.paymentForm.wage);
  let absence = 0;
  let justified = 0;
  const justifiedAbsents = context.get.deductions.absents.filter(
    (value) => value.justified
  );
  const absents = context.get.deductions.absents.filter(
    (value) => !value.justified
  );

  const hourValue = wage / (HOURS - justifiedAbsents.length - absents.length);

  console.log(hourValue);

  const entryDate = new Date(context.get.paymentForm.entryDate);
  const production = (wage * PRODUCTION) / 100;
  const presenteeism =
    (wage *
      (DEFAULT_PRESENTEEISM - context.get.deductions.absents.length * 5)) /
    100;
  const years = today.getFullYear() - entryDate.getFullYear();
  const seniority = (years * (wage * context.get.paymentForm.seniority)) / 100;
  const holidays = context.get.paymentForm.holidays * hourValue * 8;
  const extraHalf = hourValue * context.get.paymentForm.extraHalf * 1.5;
  const extraFull = hourValue * context.get.paymentForm.extraFull * 2;

  const lastDay = new Date(`12/31/${today.getFullYear()}`);
  const timeDifference = lastDay.getTime() - entryDate.getTime();
  const days = Math.floor(timeDifference / (1000 * 3600 * 24));
  const months = Math.floor(days / 30.5);
  let paidHolidaysAmount = context.get.values.paidHolidaysAmount;

  if (months <= 6) paidHolidaysAmount = Math.floor(days / 20);
  else if (months <= 5 * 12) paidHolidaysAmount = 14;
  else if (months <= 10 * 12) paidHolidaysAmount = 28;
  else if (months <= 20 * 12) paidHolidaysAmount = 35;

  const workDayWage = parseFloat(context.get.paymentForm.wage) / 22;
  const paidHolidays =
    (workDayWage + workDayWage * 0.1 + workDayWage * 0.25) * paidHolidaysAmount;
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
    paidHolidays,
    paidHolidaysAmount,
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
