import { FC, ReactElement, useRef } from "react";
import ReactToPrint from "react-to-print";

interface PrintPaycheckProps {
  button: ReactElement;
  content: ReactElement;
}

const PrintPaycheck: FC<PrintPaycheckProps> = ({ button, content }) => {
  const ref = useRef(null);
  return (
    <>
      <ReactToPrint trigger={() => button} content={() => ref.current} />
      <div ref={ref}>{content}</div>
    </>
  );
};

export default PrintPaycheck;
