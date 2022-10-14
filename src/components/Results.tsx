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
  const hourValue = get.values.wage / HOURS;

  return (
    <div>
      <div className="text-md ml-4 flex flex-row items-center gap-2 text-[#6A6A6A]">
        <p className="text-right text-xs">
          Puedes ver como se forma cada valor pasando el mouse sobre el nombre.
        </p>
        <Icon icon="akar-icons:info" className="h-5 w-5" />
      </div>
      <div>
        <div className="my-4 border-b-2 border-[#D3D3D3]">
          <ResultValue
            label="Básico"
            value={get.values.wage}
            tooltip={`${
              get.paymentForm.wage
            }$ - ${get.deductions.absence.toFixed(
              2
            )}$ + ${get.values.justified.toFixed(2)}$`}
          />
          <ResultValue
            label="Produccion"
            tooltip={`${PRODUCTION}% de ${get.values.wage.toFixed(2)}$`}
            percentage={`${PRODUCTION}`}
            value={get.values.production}
          />
          <ResultValue
            label="Presentismo"
            value={get.values.presenteeism}
            percentage={`${
              DEFAULT_PRESENTEEISM - get.deductions.absents.length * 5
            }`}
            tooltip={`${
              DEFAULT_PRESENTEEISM - get.deductions.absents.length * 5
            }% de ${get.values.wage.toFixed(2)}$`}
          />
          <ResultValue
            label="Antigüedad"
            percentage={`${get.paymentForm.seniority}`}
            value={get.values.seniority}
            tooltip={`${
              get.paymentForm.seniority
            }% de ${get.values.wage.toFixed(2)}$`}
          />
          <ResultValue
            label="Feriados"
            value={get.values.holidays}
            tooltip={`${get.paymentForm.holidays} * ${hourValue.toFixed(
              2
            )}$ * 8`}
          />
          <ResultValue
            label="Horas Extra"
            percentage="50"
            value={get.values.extraHalf}
            tooltip={`${hourValue.toFixed(2)}$ * ${
              get.paymentForm.extraHalf
            } * 1.5`}
          />
          <ResultValue
            label="Horas Extra"
            percentage="100"
            value={get.values.extraFull}
            tooltip={`${hourValue.toFixed(2)}$ * ${
              get.paymentForm.extraFull
            } * 2`}
          />
          <ResultValue
            label="Faltas Justificadas"
            value={get.values.justified}
            tooltip={""}
          />
        </div>
        <div className="my-4 border-b-2 border-[#D3D3D3]">
          <ResultValue
            label="SIPA"
            percentage={`${SIPA}`}
            value={get.deductions.SIPA}
            tooltip={`${SIPA}% de ${get.values.rawRemuneration.toFixed(2)}$`}
          />
          <ResultValue
            label="INSSJP"
            percentage={`${INSSJP}`}
            value={get.deductions.INSSJP}
            tooltip={`${INSSJP}% de ${get.values.rawRemuneration.toFixed(2)}$`}
          />
          <ResultValue
            label="Obra Social"
            percentage={`${SOCIAL_WORK}`}
            value={get.deductions.socialWork}
            tooltip={`${SOCIAL_WORK}% de ${get.values.rawRemuneration.toFixed(
              2
            )}$`}
          />
          <ResultValue
            label="Faltas"
            value={get.deductions.absence}
            tooltip={""}
          />
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
    </div>
  );
};

export default Results;
