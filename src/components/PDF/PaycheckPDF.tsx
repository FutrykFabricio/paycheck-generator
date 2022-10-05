import usePaycheck from "../../hooks/usePaycheck";
import Footer from "./Footer";
import Header from "./Header";
import Table from "./Table";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const PaycheckPDF = () => {
  const { get } = usePaycheck();

  const formatDate = (str: string) => {
    const date = new Date(str);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  return (
    get.dataForm &&
    get.paymentForm && (
      <div className="hidden print:block">
        <Header />
        <Table />
        <Footer />
      </div>
    )
  );
};

export default PaycheckPDF;
