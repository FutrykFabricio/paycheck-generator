import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="font-bold text-white text-xl bg-gradient-to-br from-gradientFirst to-gradientSecond py-2 px-4 shadow-md rounded-lg"
  >
    {children}
  </button>
);

export default Button;
