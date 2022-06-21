import React, { ReactElement, useState } from 'react';
import { usePopper } from 'react-popper';
import '@popperjs/core';
import Icon from "./Icon.mole";
import clsx from "clsx";

interface Props {
    children: ReactElement,
    label: string
}

function Tooltip({ children, label }: Props) {

    const [show, setShow] = useState(false);
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    return (
        <React.Fragment>

            {React.cloneElement(children, {
                onMouseEnter: () => setShow(true), 
                onMouseLeave: () => setShow(false),
                ref: setReferenceElement,
            })}

            <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className={clsx("transition-opacity duration-150",show ? "opacity-100" : "opacity-0")}>
                <div ref={setArrowElement} style={styles.arrow} >
                    <Icon icon="caret-up" className="text-gray-dark text-lg leading-tight" />
                </div>
                <span className="mt-3 block bg-gray-dark py-1 px-3 text-sm font-semibold rounded text-white-base">{label}</span>
            </div>
        </React.Fragment>
    );
};

export default Tooltip;