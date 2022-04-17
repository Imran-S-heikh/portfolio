import clsx from "clsx";
import React, { ReactNode, useState } from 'react'
import Hide from "../../molecules/Hide.mole";
import Icon from "../../molecules/Icon.mole"

type Props = {
    defaultOpen?: boolean,
    children?: ReactNode,
    label: string,
    iconClass?: string
}

function Accordion({ defaultOpen, children, label, iconClass }: Props) {

    const [open, setOpen] = useState(Boolean(defaultOpen));

    return (
        <div className="">
            <div onClick={() => setOpen(pre => !pre)} className="flex items-center mt-2 cursor-pointer group active:opacity-50">
                <Icon icon="chevron-right-ii" className={clsx(open && "rotate-90", "duration-150 text-white-muted text-2xl")} />
                <Icon icon="folder" className={clsx(iconClass, "text-yellow-base text-lg")} />
                <p className="text-white-muted ml-2 font-medium group-hover:text-yellow-base select-none">{label}</p>
            </div>

            <Hide open={open}>
                <React.Fragment>
                    {children}
                </React.Fragment>
            </Hide>
        </div>
    )
}

export default Accordion