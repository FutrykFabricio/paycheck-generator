import signature from "../../assets/images/signature.png";
import usePaycheck from "../../hooks/usePaycheck";
import { numeroALetras } from "../../utils/numeroALetras";

const Footer = () => {
  const {
    get: {
      values: { netRemuneration },
    },
  } = usePaycheck();
  return (
    <div className="absolute bottom-0 flex flex-col">
      <div className="flex flex-col border-[1px] border-transparent border-t-black p-2">
        <p>Son pesos:</p>
        <p className="ml-5">{numeroALetras(netRemuneration).padEnd(80, "-")}</p>
      </div>
      <div className="flex flex-row">
        <div className="w-3/4 border-[1px] border-black p-5">
          El presente es duplicado del recibo original que obra en nuestro poder
          firmado por el empleado.
        </div>
        <div className="flex w-1/4 flex-col items-center border-[1px] border-black border-l-transparent p-5 align-middle">
          <img src={signature} height={100} width={100} alt="" />
          <p>Firma del Empleador</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
