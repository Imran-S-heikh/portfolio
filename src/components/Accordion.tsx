"use client";

import classUtil from "@dev/utils/class-util";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { IconsId } from "../assets/font-icons/icons";
import Hide from "./Hide";
import Icon from "./Icon";

type Props = {
  defaultOpen?: boolean;
  children?: ReactNode;
  className?: string;
};

interface HeaderProps {
  label: string;
  iconClass?: string;
  icon?: IconsId;
  folderClass?: string;
  folder?: boolean;
  className?: string;
  activeClass?: string;
}

export function AccordionHeader({
  label,
  icon = "chevron-right-ii",
  iconClass,
  folder,
  folderClass,
  className,
  activeClass,
}: HeaderProps) {
  const { open, set } = useContext(Context);

  const handleClick = () => {
    set((pre) => !pre);
  };

  return (
    <div
      onClick={handleClick}
      className={classUtil(
        "flex items-center cursor-pointer group active:opacity-50",
        className,
        open && activeClass
      )}
    >
      <Icon
        icon={icon}
        className={classUtil(
          open && "rotate-90 text-white-light",
          iconClass,
          "duration-150 text-white-muted text-2xl"
        )}
      />
      <Hide open={folder}>
        <Icon
          icon="folder"
          className={classUtil(folderClass, "text-yellow-base text-lg mr-2")}
        />
      </Hide>
      <p
        className={classUtil(
          "text-white-muted font-medium group-hover:text-yellow-base select-none",
          open && "text-white-light"
        )}
      >
        {label}
      </p>
    </div>
  );
}

interface BodyProps {
  children: ReactNode;
  className?: string;
}

export function AccordionBody({ children, className }: BodyProps) {
  const { open } = useContext(Context);

  // if (!open) {
  //   return null;
  // }

  return <div className={classUtil(className,!open && "hidden")}>{children}</div>;
}

interface ContextProps {
  open: Boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>({
  open: false,
  set: () => {},
} as ContextProps);

function Accordion({ defaultOpen, children, className }: Props) {
  const [open, setOpen] = useState(Boolean(defaultOpen));

  return (
    <Context.Provider value={{ open, set: setOpen }}>
      <div className={classUtil(className)}>{children}</div>
    </Context.Provider>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
