import React from "react";

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = (props) => {
    return <div className='input'>
        <label>
            <span>{props.label}</span>
            <input {...props}/>
        </label>
    </div>
}

export default Input;
