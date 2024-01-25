import React from "react";
import {styled} from "@mui/material";
import {grey, purple} from "@mui/material/colors";
import {LoadingButton} from "@mui/lab";

declare interface ButtonProps {
    label?: string;
    onClick?: () => void;
    appendIcon?: JSX.Element;
    children: string;
}

const ButtonWrapper = styled(LoadingButton)(({theme}) => ({
    backgroundColor: purple[500],
    display: "flex",
    flex: "1",
    color: grey[100],
    "&:hover": {
        backgroundColor: purple[700],
        transition: ".7s ease",
    },
}));

const Button: React.FC<ButtonProps> = (props) => {
    return <ButtonWrapper onClick={props.onClick}>
        {props.children || 'Nameless button'}
        {props.appendIcon}
    </ButtonWrapper>;
}

export default Button;
