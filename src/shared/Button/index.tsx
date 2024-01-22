import React from "react";

declare interface ButtonProps {
    label?: string;
    onClick?: () => void;
    appendIcon?: JSX.Element;
    children: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className='button' onClick={props.onClick}>
        {props.children || 'Nameless button'}
        {props.appendIcon}
    </button>
}

export default Button;
