"use client";

import React, { ReactElement, useState } from "react";
import { usePopper } from "react-popper";
import "@popperjs/core";
import Icon from "./Icon";
import classUtil from "@dev/utils/class-util";
import { Placement } from "@popperjs/core";
import { IconsId } from "@dev/assets/font-icons/icons";
import Hide from "./Hide";

interface Props {
  children: ReactElement;
  label: string;
  placement?: Placement;
  arrowIcon?: IconsId;
}

function Tooltip({
  children,
  label,
  placement,
  arrowIcon = "caret-up",
}: Props) {
  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  return (
    <React.Fragment>
      {React.cloneElement(children, {
        onMouseEnter: () => setShow(true),
        onMouseLeave: () => setShow(false),
        ref: setReferenceElement,
      } as any)}

      <div
        ref={setPopperElement}
        style={styles.popper}
        className={classUtil(
          "transition-opacity z-50 duration-150 pointer-events-none",
          show ? "opacity-100" : "opacity-0"
        )}
        {...attributes.popper}
      >
        <Hide open={!!arrowIcon}>
          <div ref={setArrowElement} style={styles.arrow}>
            <Icon
              icon={arrowIcon}
              className="text-gray-dark text-lg leading-tight"
            />
          </div>
        </Hide>
        <span className="mt-3 block bg-gray-dark py-1 px-3 text-sm font-semibold rounded text-white-base">
          {label}
        </span>
      </div>
    </React.Fragment>
  );
}

export default Tooltip;
