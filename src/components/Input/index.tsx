import React from "react";
import {styled, TextField} from "@mui/material";
import {grey, purple} from "@mui/material/colors";

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputWrapper = styled(TextField)({
    display: "flex",
    flex: "1",
    cursor: "pointer",
    "& label.Mui-focused": {
        color: purple[500],
        transition: ".3s ease",
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: purple[500],
            transition: ".3s ease",
        },
        "&.Mui-focused fieldset": {
            borderColor: purple[500],
            transition: ".3s ease",
        },

        "& fieldset": {
            borderColor: grey[200],
            transition: ".3s ease",
        }
    }
})

const Input: React.FC<InputProps> = (props) => {
    return <>
        <span>{props.label}</span>
        <InputWrapper {...props}/>
    </>
}

export default Input;
