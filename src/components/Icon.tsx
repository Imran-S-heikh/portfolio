import { IconsId } from "@dev/assets/font-icons/icons";
import classUtil from "@dev/utils/class-util";
import React, { ReactElement } from "react";

interface Props {
  icon: IconsId;
  className?: string;
  style?: React.CSSProperties;
}

function Icon({ icon, className, style }: Props): ReactElement {
  return (
    <i
      style={style}
      className={`before-block flex icon-${icon} ${classUtil(className)}`}
    ></i>
  );
}

export default Icon;