import Absence from "./components/Absence";
import Button from "./components/Base/Button";
import Input from "./components/Base/Input";
import Header from "./components/Header";
import PaycheckPDF from "./components/PDF/PaycheckPDF";
import PrintPaycheck from "./components/PrintPaycheck";
import Results from "./components/Results";
import usePaycheck from "./hooks/usePaycheck";

const App = () => {
  const { onDataChange, onPaymentChange } = usePaycheck();

  return (
    <div className="h-screen w-screen bg-[#FBFBFB] font-poppins">
      <Header />
      <div className="flex w-full flex-col items-center gap-8 py-4">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex w-screen flex-col gap-6 p-2 px-6 md:w-full">
            <Input label="Nombres" name="names" onChange={onDataChange} />
            <Input label="Apellidos" name="surnames" onChange={onDataChange} />
            <Input
              label="CUIL"
              placeholder="00-00000000-0"
              name="cuil"
              onChange={onDataChange}
            />
            <Input
              label="Legajo"
              min={1}
              placeholder="N° ---"
              type={"number"}
              name="file"
              onChange={onDataChange}
            />
            <Input label="Categoría" name="category" onChange={onDataChange} />
            <Input label="Division" name="division" onChange={onDataChange} />
            <Input
              label="Departamento"
              name="departament"
              onChange={onDataChange}
            />
            <Input
              label="Fecha de ingreso"
              name="entryDate"
              type={"date"}
              onChange={onPaymentChange}
            />
            <Input
              label="Antigüedad"
              placeholder="---%"
              min={0}
              step={0.1}
              type={"number"}
              name="seniority"
              onChange={onPaymentChange}
            />
            <Input
              label="Sueldo Básico"
              placeholder="$------,--"
              name="wage"
              onChange={onPaymentChange}
            />
            <Input
              label="Horas Extra (50%)"
              placeholder="---"
              name="extraHalf"
              min={0}
              type={"number"}
              onChange={onPaymentChange}
            />
            <Input
              label="Horas Extra (100%)"
              placeholder="---"
              name="extraFull"
              min={0}
              type={"number"}
              onChange={onPaymentChange}
            />
            <Input
              label="Feriados"
              placeholder="---"
              name="holidays"
              min={0}
              type={"number"}
              onChange={onPaymentChange}
            />
          </div>
          <div className="flex w-screen flex-col gap-5 p-2  px-6 md:w-full">
            <Absence />
            <Results />
          </div>
        </div>
        <PrintPaycheck
          button={<Button>Generar Recibo de Sueldo</Button>}
          content={<PaycheckPDF />}
        />
      </div>
    </div>
  );
};

export default App;
