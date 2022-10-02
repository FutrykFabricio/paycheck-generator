import { ChangeEvent, useState } from "react";

const useForm = <T>(initialValue?: T) => {
  const [form, setForm] = useState<T>(initialValue as T);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    } as T);

  return {
    form,
    onChange,
  };
};

export default useForm;
