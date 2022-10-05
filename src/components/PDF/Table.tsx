import {
  DEFAULT_PRESENTEEISM,
  INSSJP,
  PRODUCTION,
  SIPA,
  SOCIAL_WORK,
} from "../../constants";
import usePaycheck from "../../hooks/usePaycheck";
import { getJustifiedAbsents } from "../../utils/getJustifiedAbsents";
import ColumnContent from "./ColumnContent";
import ColumnHeader from "./ColumnHeader";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const Table = () => {
  const {
    get: { dataForm, values, paymentForm, deductions },
  } = usePaycheck();

  const formatDate = (value: string | Date) => {
    const date = value instanceof Date ? value : new Date(value);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const formatSettlementDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `MES ${month}/${year}`;
  };

  const intl = new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="p-2">
      <TableRow>
        <TableColumn className="w-8/12">
          <ColumnHeader>
            <p>Apellidos y Nombres"</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${dataForm.surnames} ${dataForm.names}`}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-1/12">
          <ColumnHeader>
            <p>Legajo</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${dataForm.file}`}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-3/12">
          <ColumnHeader>
            <p>C.U.I.L.</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${dataForm.cuil}`}</p>
          </ColumnContent>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn className="w-6/12">
          <ColumnHeader>
            <p>Categoría</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${dataForm.category}`}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-3/12">
          <ColumnHeader>
            <p>División</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${dataForm.division}`}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-3/12">
          <ColumnHeader>
            <p>Departamento</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${dataForm.departament}`}</p>
          </ColumnContent>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <ColumnHeader>
            <p>Fecha Ingreso</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{formatDate(paymentForm.entryDate)}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn>
          <ColumnHeader>
            <p>Sueldo</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{`${intl.format(parseFloat(paymentForm.wage))}`}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn>
          <ColumnHeader>
            <p>Liquidación</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{formatSettlementDate(new Date())}</p>
          </ColumnContent>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn className="w-7/12">
          <ColumnHeader>
            <p>Detalle</p>
          </ColumnHeader>
          <ColumnContent className="ml-5 text-left">
            <div className="mt-2 flex flex-col gap-2">
              <p>SUELDO</p>
              <p>PRODUCCION</p>
              <p>PRESENTISMO</p>
              <p>ANTIGÜEDAD</p>
              <p>FERIADOS</p>
              <p>HORAS EXTRA (50%)</p>
              <p>HORAS EXTRA (100%)</p>
              <p>SIPA</p>
              <p>INSSJP</p>
              <p>OBRA SOCIAL</p>
              <p>FALTAS</p>
              <p>FALTAS JUSTIFICADAS</p>
            </div>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-2/12">
          <ColumnHeader>
            <p>Cantidad</p>
          </ColumnHeader>
          <ColumnContent>
            <div className="mt-2 flex flex-col gap-2">
              <p>-</p>
              <p>{PRODUCTION}%</p>
              <p>{DEFAULT_PRESENTEEISM - deductions.absents.length * 5}%</p>
              <p>{paymentForm.seniority}%</p>
              <p>{paymentForm.holidays}</p>
              <p>{paymentForm.extraHalf}</p>
              <p>{paymentForm.extraFull}</p>
              <p>{SIPA}%</p>
              <p>{INSSJP}%</p>
              <p>{SOCIAL_WORK}%</p>
              <p>{deductions.absents.length}</p>
              <p>{getJustifiedAbsents(deductions.absents).length}</p>
            </div>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-2/12">
          <ColumnHeader>
            <p>Haberes</p>
          </ColumnHeader>
          <ColumnContent className="text-right">
            <div className="mt-2 flex flex-col gap-2 px-2">
              <p>{intl.format(parseFloat(paymentForm.wage))}</p>
              <p>{intl.format(values.production)}</p>
              <p>{intl.format(values.presenteeism)}</p>
              <p>{intl.format(values.seniority)}</p>
              <p>{intl.format(values.holidays)}</p>
              <p>{intl.format(values.extraHalf)}</p>
              <p>{intl.format(values.extraFull)}</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>
                {deductions.absence > 0
                  ? intl.format(-deductions.absence)
                  : intl.format(0)}
              </p>
              <p>{intl.format(values.justified)}</p>
            </div>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-2/12">
          <ColumnHeader>
            <p>Deducciones</p>
          </ColumnHeader>
          <ColumnContent>
            <div className="mt-2 flex flex-col gap-2">
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-{intl.format(deductions.SIPA)}</p>
              <p>-{intl.format(deductions.socialWork)}</p>
              <p>-{intl.format(deductions.INSSJP)}</p>
              <p>-</p>
              <p>-</p>
            </div>
          </ColumnContent>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn className="w-7/12">
          <ColumnHeader>
            <p>Lugar y Fecha de Pago</p>
          </ColumnHeader>
          <ColumnContent className="ml-5 text-left">
            <p>BERAZATEGUI {formatDate(new Date())}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-3/12">
          <ColumnHeader>
            <p>Total Remunerado</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{intl.format(values.rawRemuneration)}</p>
          </ColumnContent>
        </TableColumn>
        <TableColumn className="w-3/12">
          <ColumnHeader>
            <p>Deducciones</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{intl.format(values.deductions)}</p>
          </ColumnContent>
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <ColumnHeader>
            <p>Total Neto</p>
          </ColumnHeader>
          <ColumnContent>
            <p>{intl.format(values.netRemuneration)}</p>
          </ColumnContent>
        </TableColumn>
      </TableRow>
    </div>
  );
};

export default Table;
