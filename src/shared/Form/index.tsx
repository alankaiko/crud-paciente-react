import React from "react";

declare interface FormProps {
    title?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: JSX.Element | JSX.Element[];

}

const Form: React<FormProps> = (props) => {
    const preventedSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit && props.onSubmit(event);
    }

    return <form className='formulario' onSubmit={preventedSubmit}>
        {
            props.title && <div className='title'>
                {props.title}
            </div>
        }
        {
            props.children
        }
    </form>
}

export default Form;
