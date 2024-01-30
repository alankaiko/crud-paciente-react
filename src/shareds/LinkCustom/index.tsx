import Link from "next/link";
import React from "react";

declare interface LinkProps {
    label?: string;
    href?: () => void;
}

const LinkCustom: React.FC<LinkProps> = (props) => {
    return <Link href={props.href} a>
        {props.label || 'Nameless button'}
    </Link>;
}

export default LinkCustom;
