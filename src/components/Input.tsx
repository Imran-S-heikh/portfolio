import classUtil from "@dev/utils/class-util";
import React, { ChangeEvent, useId } from "react";

type Props = {
  name?: string;
  type?: "text" | "password" | "email";
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
};

function Input({ name, label, placeholder, type, onChange }: Props) {
  const id = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}:</label>
      <input
        name={name}
        className="border-gray-base bg-blue-dark outline-none border h-10 rounded mt-2 px-3 text-white-base placeholder:text-gray-deep focus:shadow-outline hover:shadow-outline transition-all duration-150"
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
