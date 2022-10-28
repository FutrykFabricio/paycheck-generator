import { FC } from "react";

interface ResultValueProps {
  label: string;
  value: number;
  info?: string;
  tooltip?: string;
}

const intl = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "ARS",
});

const ResultValue: FC<ResultValueProps> = ({ label, value, info }) => {
  return (
    <div className="flex flex-row justify-between text-default">
      <p className="text-base font-bold">
        {label}
        {info && <span className="text-xs font-normal">{info}</span>}
      </p>
      <p className="text-lg font-thin">${intl.format(value)}</p>
    </div>
  );
};

export default ResultValue;
