import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  const [value, setValue] = useState("");

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  return (
    <div className="flex flex-row justify-between ">
      <p className="font-medium text-xl text-default">{label}</p>
      <input
        placeholder="--------"
        className="focus:outline-none focus:border-b-2 focus:border-gradientFirst font-bold text-right w-1/2 text-transparent bg-clip-text bg-gradient-to-br from-gradientFirst to-gradientSecond placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-br placeholder:from-gradientFirst placeholder:to-gradientSecond"
        onChange={onChange}
        value={value}
        {...props}
      ></input>
    </div>
  );
};

export default Input;
