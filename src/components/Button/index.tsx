import React from 'react'
import styles from './styles.module.scss';

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    appendIcon?: JSX.Element
    children: string
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button className={styles.AppButton} onClick={props.onClick}>
        {props.children || 'Nameless button'}
        {props.appendIcon}
    </button>
}

export default Button
