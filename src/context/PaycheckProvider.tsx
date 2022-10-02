import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import useForm from "../hooks/useForm";
import { IDataForm, IPaymentForm } from "../interfaces/IForm";
import {
  IDeductions,
  IPaycheckContext,
  IValues,
} from "../interfaces/IPaycheckContext";
import calculate from "../utils/calculate";

export const PaycheckContext = createContext<IPaycheckContext | null>(null);

const PaycheckProvider: FC<PropsWithChildren> = ({ children }) => {
  const { form: dataForm, onChange: onDataChange } = useForm<IDataForm>();
  const { form: paymentForm, onChange: onPaymentChange } =
    useForm<IPaymentForm>({
      extraFull: 0,
      extraHalf: 0,
      holidays: 0,
      seniority: 0,
      wage: "0",
      entryDate: Date(),
    });
  const [values, setValues] = useState<IValues>({
    extraFull: 0,
    extraHalf: 0,
    holidays: 0,
    presenteeism: 0,
    production: 0,
    wage: 0,
    seniority: 0,
    deductions: 0,
    netRemuneration: 0,
    rawRemuneration: 0,
    justified: 0,
  });
  const [deductions, setDeductions] = useState<IDeductions>({
    absents: [],
    INSSJP: 0,
    SIPA: 0,
    socialWork: 0,
    absence: 0,
  });

  const value: IPaycheckContext = {
    get: {
      paymentForm,
      dataForm,
      values,
      deductions,
    },
    set: {
      deductions: setDeductions,
      values: setValues,
    },
    onDataChange,
    onPaymentChange,
  };

  useEffect(() => {
    calculate(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paymentForm, deductions.absents]);

  return (
    <PaycheckContext.Provider value={value}>
      {children}
    </PaycheckContext.Provider>
  );
};

export default PaycheckProvider;
