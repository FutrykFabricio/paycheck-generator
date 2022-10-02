import { ChangeEvent, useState } from "react";
import Checkbox from "./Base/Checkbox";

const AbsenceInput = () => {
  const [justified, setJustified] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);

  const onDateChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(ev.target.value));
  };

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
