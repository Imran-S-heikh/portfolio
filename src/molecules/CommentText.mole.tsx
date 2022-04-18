import clsx from "clsx"
import React from 'react'

type Props = {
    text: string[],
    className?: string
}

function CommentText({text,className}: Props) {
    return (
        <div className={clsx(className)}>
            {'/**'}
            {text.map((ov,i) => (
                <p key={i}>&nbsp;* {ov}</p>
            ))}
            &nbsp;{'*/'}
        </div>
    )
}

export default CommentText;