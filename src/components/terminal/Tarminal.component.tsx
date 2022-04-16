import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import './taminal.style.scss';

function Caret() {

    const [content, setContent] = useState('hello world');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [start, setStart] = useState(0);

    const handleSelectionChange = useCallback(()=>{
        const val = inputRef.current?.selectionStart;
        if (inputRef.current && typeof val === 'number') {
            setStart(val)
        }

        if (inputRef.current) {
            inputRef.current.focus();
        }
    },[]);

    useEffect(() => {
        handleSelectionChange();

        inputRef.current?.addEventListener('selectionchange', handleSelectionChange)
    }, [handleSelectionChange])



    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    return (
        <div className="tarminal relative w-[300px] overflow-hidden h-10">
            <input ref={inputRef} maxLength={15} id="terminal-input" onChange={handleChange} value={content} className="absolute inset-0 opacity-0 block w-full h-full border-none outline-none" type="text" />
            <span className="text-white-muted leading-10 font-medium text-2xl align-middle terminal-view">
                &nbsp;{content.substring(0,start)}<span className="caret"></span>{content.substring(start,content.length)}
            </span>
            <label onClick={() => inputRef.current?.focus()} htmlFor="terminal-input" className="absolute block inset-0">
            </label>
        </div>
    )
}

export default Caret