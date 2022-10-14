import { FC } from "react";
import Tooltip from "./Tooltip";

interface ResultValueProps {
  label: string;
  value: number;
  percentage?: string;
  tooltip?: string;
}

const intl = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "ARS",
});

const ResultValue: FC<ResultValueProps> = ({
  label,
  value,
  percentage,
  tooltip,
}) => {
  return (
    <div className="flex flex-row justify-between text-default">
      {tooltip ? (
        <Tooltip tooltipContent={tooltip}>
          <p className="text-base font-bold">
            {label}
            {percentage && (
              <span className="text-xs font-normal">({percentage}%)</span>
            )}
          </p>
        </Tooltip>
      ) : (
        <p className="text-base font-bold">
          {label}
          {percentage && (
            <span className="text-xs font-normal">({percentage}%)</span>
          )}
        </p>
      )}
      <p className="text-lg font-thin">${intl.format(value)}</p>
    </div>
  );
};

export default ResultValue;
