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
  const entryDate = new Date(context.get.paymentForm.entryDate);
  let wage = parseFloat(context.get.paymentForm.wage);
  let workedHours = HOURS;
  const getHourValue = () => wage / workedHours;

  console.log(
    context.get.deductions.absents.length > 0
      ? context.get.deductions.absents[0].date.getDay()
      : "Nada"
  );
  const weekdayAbsent = context.get.deductions.absents.filter(
    (absence: IAbsence) =>
      absence.date.getDay() !== 6 && absence.date.getDay() !== 5
  );

  const weekendAbsent = context.get.deductions.absents.filter(
    (absence: IAbsence) =>
      absence.date.getDay() !== 6 && absence.date.getDay() === 5
  );

  const absentCount = context.get.deductions.absents.length;
  workedHours -= weekdayAbsent.length * 8 + weekendAbsent.length * 4;
  const absence =
    weekdayAbsent.length * 8 * getHourValue() +
    weekendAbsent.length * 4 * getHourValue();
  let justified = 0;

  wage -= absence;

  context.get.deductions.absents.forEach((absence) => {
    if (!absence.justified || absence.date.getDay() === 0) return;

    if (absence.date.getDay() === 6) justified += getHourValue() * 4;
    else justified += getHourValue() * 8;
  });

  let preSum = getHourValue();
  const extraHalf = context.get.paymentForm.extraHalf * preSum * 1.5;
  wage += extraHalf;
  const extraFull = context.get.paymentForm.extraFull * preSum * 2;
  wage += extraFull;
  const holidays = context.get.paymentForm.holidays * preSum * 8;
  const production = (PRODUCTION * wage) / 100;
  const presenteeism = ((DEFAULT_PRESENTEEISM - absentCount * 5) * wage) / 100;

  const lastDay = new Date(`12/31/${today.getFullYear()}`);
  const timeDifference = lastDay.getTime() - entryDate.getTime();
  const days = Math.floor(timeDifference / (1000 * 3600 * 24));
  const months = Math.floor(days / 30.5);
  let paidHolidaysAmount = context.get.values.paidHolidaysAmount;

  if (months < 6) paidHolidaysAmount = Math.floor(days / 20);
  else if (months <= 5 * 12) paidHolidaysAmount = 14;
  else if (months <= 10 * 12) paidHolidaysAmount = 28;
  else if (months <= 20 * 12) paidHolidaysAmount = 35;

  const seniority =
    (Math.round(months / 12) * (wage * context.get.paymentForm.seniority)) /
    100;

  const workDayWage = parseFloat(context.get.paymentForm.wage) / 22;
  const paidHolidays =
    (workDayWage + workDayWage * 0.1 + workDayWage * 0.25) * paidHolidaysAmount;
  const rawRemuneration =
    wage + production + presenteeism + seniority + holidays;

  const inssjp = (rawRemuneration * INSSJP) / 100;
  const sipa = (rawRemuneration * SIPA) / 100;
  const socialWork = (rawRemuneration * SOCIAL_WORK) / 100;
  const deductions = inssjp + sipa + socialWork + absence;

  const netRemuneration = rawRemuneration - deductions;

  context.set.values({
    ...context.get.values,
    wage,
    production: production,
    presenteeism: presenteeism,
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
