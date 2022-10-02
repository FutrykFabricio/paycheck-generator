import { useState } from "react";
import AbsenceInput from "./AbsenceInput";
import Button from "./Base/Button";

const Absence = () => {
  const [presenteeism, setPresenteeism] = useState<number>(25);
  const [quantity, setQuantity] = useState<number>(0);

  const addAbsence = () => {
    if (presenteeism > 0 && quantity < 5) {
      setQuantity(quantity + 1);
      setPresenteeism(presenteeism - 5);
    }
  };

  const removeAbsence = () => {
    if (presenteeism < 25 && quantity > 0) {
      setQuantity(quantity - 1);
      setPresenteeism(presenteeism + 5);
    }
  };

  return (
    <div>
      <div className="flex w-full flex-row items-center justify-between">
        <p className="text-xl font-medium text-default">
          Faltas{" "}
          <span className="text-xs font-light">
            (Presentismo: {presenteeism}%)
          </span>
        </p>
        <div className="flex flex-row gap-5">
          <Button onClick={addAbsence}>+</Button>
          <Button onClick={removeAbsence}>-</Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {Array(quantity)
          .fill(null)
          .map((_, key) => {
            return <AbsenceInput key={key} />;
          })}
      </div>
    </div>
  );
};

export default Absence;
