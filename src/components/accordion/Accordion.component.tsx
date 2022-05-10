import clsx from "clsx";
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { IconsId } from "../../assets/font-icons/icons";
import Hide from "../../molecules/Hide.mole";
import Icon from "../../molecules/Icon.mole"

type Props = {
    defaultOpen?: boolean,
    children?: ReactNode,
    className?: string
}

interface HeaderProps {
    label: string,
    iconClass?: string,
    icon?: IconsId,
    folderClass?: string,
    folder?: boolean,
    className?: string,
    activeClass?: string
}

function Header({ label, icon = "chevron-right-ii", iconClass, folder, folderClass,className,activeClass }: HeaderProps) {

    const {open,set} = useContext(Context);

    const handleClick = ()=>{
        set(pre=>!pre);
    }

    return (
        <div onClick={handleClick} className={clsx("flex items-center cursor-pointer group active:opacity-50",className,open && activeClass)}>
            <Icon icon={icon} className={clsx(open && "rotate-90 text-white-light", iconClass, "duration-150 text-white-muted text-2xl")} />
            <Hide open={folder}>
                <Icon icon="folder" className={clsx(folderClass, "text-yellow-base text-lg mr-2")} />
            </Hide>
            <p className={clsx("text-white-muted font-medium group-hover:text-yellow-base select-none", open && "text-white-light")}>{label}</p>
        </div>
    )
}


interface BodyProps {
    children: ReactNode,
    className?: string
}

function Body({ children,className }: BodyProps) {

    const {open} = useContext(Context);

    if (!open) {
       return null; 
    }

    return (
        <div className={clsx(className)}>
            {children}
        </div>
    )
}

interface ContextProps {
    open: Boolean,
    set: React.Dispatch<React.SetStateAction<boolean>>
}


const Context = createContext<ContextProps>({ open: false,set: ()=>{} } as ContextProps);

function Accordion({ defaultOpen, children,className }: Props) {

    const [open, setOpen] = useState(Boolean(defaultOpen));

    return (
        <Context.Provider value={{open,set: setOpen}}>
            <div className={clsx(className)}>
                {children}
            </div>
        </Context.Provider>
    )
}

Accordion.Header = Header;
Accordion.Body = Body;

export default Accordion