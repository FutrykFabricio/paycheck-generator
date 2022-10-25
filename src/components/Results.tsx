import { Icon } from "@iconify/react";
import {
  DEFAULT_PRESENTEEISM,
  HOURS,
  INSSJP,
  PRODUCTION,
  SIPA,
  SOCIAL_WORK,
} from "../constants";
import usePaycheck from "../hooks/usePaycheck";
import ResultValue from "./ResultValue";

const Results = () => {
  const { get } = usePaycheck();

  return (
    <div>
      <div className="my-4 border-b-2 border-[#D3D3D3]">
        <ResultValue label="Básico" value={get.values.wage} />
        <ResultValue
          label="Produccion"
          percentage={`${PRODUCTION}`}
          value={get.values.production}
        />
        <ResultValue
          label="Presentismo"
          value={get.values.presenteeism}
          percentage={`${
            DEFAULT_PRESENTEEISM - get.deductions.absents.length * 5
          }`}
        />
        <ResultValue
          label="Antigüedad"
          percentage={`${get.paymentForm.seniority}`}
          value={get.values.seniority}
        />
        <ResultValue label="Feriados" value={get.values.holidays} />
        <ResultValue
          label="Horas Extra"
          percentage="50"
          value={get.values.extraHalf}
        />
        <ResultValue
          label="Horas Extra"
          percentage="100"
          value={get.values.extraFull}
        />
        <ResultValue label="Faltas Justificadas" value={get.values.justified} />
      </div>
      <div className="my-4 border-b-2 border-[#D3D3D3]">
        <ResultValue
          label="SIPA"
          percentage={`${SIPA}`}
          value={get.deductions.SIPA}
        />
        <ResultValue
          label="INSSJP"
          percentage={`${INSSJP}`}
          value={get.deductions.INSSJP}
        />
        <ResultValue
          label="Obra Social"
          percentage={`${SOCIAL_WORK}`}
          value={get.deductions.socialWork}
        />
        <ResultValue label="Faltas" value={get.deductions.absence} />
      </div>
      <div className="my-4 border-b-2 border-[#D3D3D3]">
        <ResultValue label="Aguinaldo" value={get.values.rawRemuneration / 2} />
        <ResultValue label="Vacaciones" value={get.values.paidHolidays} />
      </div>
      <div className="my-4">
        <ResultValue
          label="Remuneracion Bruta"
          value={get.values.rawRemuneration}
        />
        <ResultValue
          label="Total de Deducciones"
          value={get.values.deductions}
        />
        <ResultValue
          label="Remuneracion Neta"
          value={get.values.netRemuneration}
        />
      </div>
    </div>
  );
};

export default Results;
