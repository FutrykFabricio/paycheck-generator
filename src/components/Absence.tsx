import {
  DEFAULT_PRESENTEEISM,
  MAX_PRESENTEEISM,
  MIN_PRESENTEEISM,
} from "../constants";
import usePaycheck from "../hooks/usePaycheck";
import AbsenceInput from "./AbsenceInput";
import Button from "./Base/Button";

const Absence = () => {
  const { get, set } = usePaycheck();

  const addAbsence = () => {
    if (
      DEFAULT_PRESENTEEISM - get.deductions.absents.length * 5 >
      MIN_PRESENTEEISM
    ) {
      set.deductions({
        ...get.deductions,
        absents: [...get.deductions.absents, { date: new Date() }],
      });
    }
  };

  const removeAbsence = () => {
    if (
      DEFAULT_PRESENTEEISM - get.deductions.absents.length * 5 <
      MAX_PRESENTEEISM
    ) {
      set.deductions({
        ...get.deductions,
        absents: get.deductions.absents.slice(
          0,
          get.deductions.absents.length - 1
        ),
      });
    }
  };

  return (
    <div>
      <div className="flex w-full flex-row items-center justify-between">
        <p className="text-xl font-medium text-default">Faltas</p>
        <div className="flex flex-row gap-5">
          <Button onClick={addAbsence}>+</Button>
          <Button onClick={removeAbsence}>-</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {get.deductions.absents.map((_, key) => {
          return <AbsenceInput index={key} key={key} />;
        })}
      </div>
    </div>
  );
};

export default Absence;
