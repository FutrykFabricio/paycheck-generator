import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-row justify-between ">
      <p className="text-xl font-medium text-default">{label}</p>
      <input
        placeholder="--------"
        className="w-1/2 bg-gradient-to-br from-gradientFirst to-gradientSecond bg-clip-text text-right font-bold text-transparent placeholder:bg-gradient-to-br placeholder:from-gradientFirst placeholder:to-gradientSecond placeholder:bg-clip-text placeholder:text-transparent focus:border-b-2 focus:border-gradientFirst focus:outline-none"
        {...props}
      ></input>
    </div>
  );
};

export default Input;
