import clsx from "clsx"
import React from 'react'

type Props = {
    text: string[],
    className?: string
}

function CommentText({text,className}: Props) {
    return (
        <p className={clsx(className)}>
            {'/**'}
            {text.map(ov => (
                <p>&nbsp;* {ov}</p>
            ))}
            &nbsp;{'*/'}
        </p>
    )
}

export default CommentText