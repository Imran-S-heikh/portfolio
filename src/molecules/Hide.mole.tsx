import React, { ReactElement } from 'react';

interface Props {
    open: boolean | undefined | null,
    children: ReactElement,
    fallback?: ReactElement
}

function Hide({open,children,fallback}: Props) {
    if(open){
        return children;
    }else if(fallback){
        return fallback
    }

    return null;
}

export default Hide;
