import { useContext } from "react";
import { PaycheckContext } from "../context/PaycheckProvider";
import { IPaycheckContext } from "../interfaces/IPaycheckContext";

const usePaycheck = () => {
  return useContext(PaycheckContext) as IPaycheckContext;
};

export default usePaycheck;
