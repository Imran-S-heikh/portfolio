import classUtil from "@dev/utils/class-util"
import React from 'react'

type Props = {
    placeholder?: string,
    label?: string,
    onChange?: (value: string)=>void;  
}

function Textarea({ label, placeholder,onChange }: Props) {

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(event.target.value);
    }

    return (
        <div className="flex flex-col">
            <label htmlFor="name">{label}:</label>
            <textarea
                className="border-gray-base bg-blue-dark outline-none border rounded mt-2 p-3 text-white-base placeholder:text-gray-deep focus:shadow-outline hover:shadow-outline transition-all duration-150"
                id={classUtil(label)}
                placeholder={placeholder}
                rows={5}
                onChange={handleChange}
            />
        </div>
    )
}

export default Textarea;