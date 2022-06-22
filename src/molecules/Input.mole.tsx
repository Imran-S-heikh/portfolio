import clsx from "clsx"
import React, { ChangeEvent } from 'react'

type Props = {
    type?: "text" | "password" | "email",
    placeholder?: string,
    label?: string,
    onChange?: (value: string)=>void;  
}

function Input({ label,placeholder,type,onChange}: Props) {


    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        onChange && onChange(event.target.value);
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="name">{label}:</label>
            <input
                className="border-gray-base bg-blue-dark outline-none border h-10 rounded mt-2 px-3 text-white-base placeholder:text-gray-deep focus:shadow-outline hover:shadow-outline transition-all duration-150"
                id={clsx(label)}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default Input