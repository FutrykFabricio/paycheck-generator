import { Icon } from "@iconify/react";
import ResultValue from "./ResultValue";

const Results = () => {
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
          <ResultValue label="Básico" value={100_000} />
          <ResultValue label="Produccion" value={10_454.4} />
          <ResultValue label="Presentismo" value={20_908.8} />
          <ResultValue label="Antiguedad" percentage="1" value={20_908.8} />
          <ResultValue label="Feriados" value={4_544.0} />
          <ResultValue label="Horas Extra" percentage="50" value={4_544.0} />
          <ResultValue label="Horas Extra" percentage="100" value={4_544.0} />
        </div>
        <div className="my-4 border-b-2 border-[#D3D3D3]">
          <ResultValue label="SIPA" percentage="11" value={100_000} />
          <ResultValue label="INSSJP" percentage="3" value={10_454.4} />
          <ResultValue label="Obra Social" percentage="3" value={20_908.8} />
        </div>
        <div className="my-4">
          <ResultValue label="Remuneracion Bruta" value={100_000} />
          <ResultValue label="Remuneracion Neta" value={100_000.4} />
          <ResultValue label="Total de Deducciones" value={100_000.8} />
        </div>
      </div>
    </div>
  );
};

export default Results;
