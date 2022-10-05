import usePaycheck from "../../hooks/usePaycheck";
import Footer from "./Footer";
import Header from "./Header";
import Table from "./Table";

const PaycheckPDF = () => {
  const { get } = usePaycheck();

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
