"use client";

import classUtil from "@dev/utils/class-util";
import React, { ChangeEvent, useState } from "react";
import Icon from "./Icon";

type Props = {
  checked?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
};

function Checkbox({ checked, className, onChange }: Props) {
  // const [checked, setChecked] = useState(Boolean(defaultChecked));

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange?.(event.target.checked);
  }

  return (
    <div
      className={classUtil(
        "relative w-6 h-6 rounded flex items-center justify-center transition-colors duration-150 hover:shadow-outline",
        className,
        checked ? "bg-gray-light" : "border-gray-light border"
      )}
    >
      <input
        onChange={handleChange}
        checked={checked}
        type="checkbox"
        className={classUtil("w-full h-full absolute opacity-0 cursor-pointer")}
      />
      <Icon
        icon="done"
        className={classUtil(
          "text-white-base text-xs pointer-events-none transition-colors duration-150 ",
          !checked && "opacity-0"
        )}
      />
    </div>
  );
}

export default Checkbox;
