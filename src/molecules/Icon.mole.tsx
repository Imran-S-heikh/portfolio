import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { IconsId } from '../assets/font-icons/icons';


interface Props {
    icon: IconsId,
    className?: string,
    style?: React.CSSProperties
}

function Icon({icon,className,style}: Props): ReactElement {
    return <i style={style} className={`before:block icon-${icon} ${clsx(className)}`}></i>
}

export default Icon;
