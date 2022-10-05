import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="py-2">
      <div className="absolute right-0 mr-5 text-right text-lg">
        <p>RECIBO DE HABERES Ley N°20.744</p>
        <p>DUPLICADO</p>
      </div>
      <div className="flex w-full flex-row items-center gap-5 px-10">
        <div className="w-fit border-[1px] border-black p-2">
          <img src={logo} height={100} width={100} />
        </div>
        <div className="flex flex-col text-lg">
          <p>Empresa E.E.S.T. N°4</p>
          <p>Calle 111 y 19</p>
          <p>(1884)</p>
          <p>Berazategui</p>
          <p>CUIT N° xxxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
