import { Dispatch, FC, SetStateAction } from "react";
import { Icon } from "@iconify/react";

interface CheckboxProps {
  checked?: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

const Checkbox: FC<CheckboxProps> = ({ checked = false, setChecked }) => {
  const toggle = () => setChecked(!checked);

  return (
    <Icon
      icon={`${checked ? "bx-checkbox-checked" : "bx-checkbox"}`}
      onClick={toggle}
      className={`w-6 h-auto ${
        checked ? "text-gradientFirst" : "text-gradientSecond"
      }`}
    />
  );
};

export default Checkbox;
