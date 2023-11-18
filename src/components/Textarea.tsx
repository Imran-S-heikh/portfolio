import classUtil from "@dev/utils/class-util";
import React, { useId } from "react";

type Props = {
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (value: string) => void;
};

function Textarea({ name, label, placeholder, onChange }: Props) {
  const id = useId();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}:</label>
      <textarea
        name={name}
        className="border-gray-base bg-blue-dark outline-none border rounded mt-2 p-3 text-white-base placeholder:text-gray-deep focus:shadow-outline hover:shadow-outline transition-all duration-150"
        id={id}
        placeholder={placeholder}
        rows={5}
        onChange={handleChange}
      />
    </div>
  );
}

export default Textarea;
