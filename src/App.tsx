import Absence from "./components/Absence";
import Button from "./components/Base/Button";
import Input from "./components/Base/Input";
import Header from "./components/Header";
import Results from "./components/Results";

const App = () => {
  return (
    <div className="h-screen w-screen bg-[#FBFBFB] font-poppins">
      <Header />
      <div className="flex w-full flex-col items-center gap-5">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex w-screen flex-col gap-6 p-2 px-6 md:w-full">
            <Input label="Nombres" />
            <Input label="Apellidos" />
            <Input label="CUIL" placeholder="00-00000000-0" />
            <Input
              label="Legajo"
              min={1}
              placeholder="N° ---"
              type={"number"}
            />
            <Input label="Categoría" />
            <Input label="Division" />
            <Input label="Departamento" />
            <Input label="Fecha de ingreso" />
            <Input
              label="Antigüedad"
              placeholder="---%"
              min={0}
              step={0.1}
              type={"number"}
            />
            <Input label="Sueldo Básico" placeholder="$------,--" />
          </div>
          <div className="flex w-screen flex-col gap-5 p-2  px-6 md:w-full">
            <Absence />
            <Results />
          </div>
        </div>
        <Button>Generar Recibo de Sueldo</Button>
      </div>
    </div>
  );
};

export default App;
