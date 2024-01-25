import {styled} from "@mui/system";
import Link from "next/link";
import {purple} from "@mui/material/colors";
import React from "react";

declare interface LinkCustomProps {
    label?: string;
    href?: () => void;
}

export const LinkWrapper = styled(Link)({
    cursor: "pointer",
    textDecoration: "none",
    transition: ".3s ease",
    fontFamily: "Roboto, sans-serif",
    wordBreak: "normal",
    "&:hover": {
        color: purple[500],
    }
});

const LinkCustom: React.FC<LinkCustomProps> = (props) => {
    return <LinkWrapper href={props.href}>
        {props.label || 'Nameless button'}
    </LinkWrapper>;
}

export default LinkCustom;
