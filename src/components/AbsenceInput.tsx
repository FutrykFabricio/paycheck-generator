import { ChangeEvent, FC, useEffect, useState } from "react";
import usePaycheck from "../hooks/usePaycheck";
import Checkbox from "./Base/Checkbox";

interface AbsenceInputProps {
  index: number;
}

const AbsenceInput: FC<AbsenceInputProps> = ({ index }) => {
  const { get, set } = usePaycheck();
  const [justified, setJustified] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());

  const onDateChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(ev.target.value));
  };

  useEffect(() => {
    const absenceCopy = [...get.deductions.absents];
    const absent = { ...absenceCopy[index] };

    absent.date = date;
    absent.justified = justified;

    absenceCopy[index] = absent;

    set.deductions({ ...get.deductions, absents: absenceCopy });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [justified, date]);

  return (
    <div className="flex flex-row justify-between">
      <input type="date" onChange={onDateChange}></input>
      <div className="mr-2 flex flex-row items-center">
        <p className="text-xs font-extralight">Justificada?</p>
        <Checkbox checked={justified} setChecked={setJustified} />
      </div>
    </div>
  );
};

export default AbsenceInput;
