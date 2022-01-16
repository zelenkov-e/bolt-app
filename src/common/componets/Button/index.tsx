import React, { FC } from 'react'
import './styles.scss'

interface ButtonProps {
    className?: string;
    onClick?: (e: React.SyntheticEvent) => void;
    disabled?: boolean;
    title?: string;
    children: React.ReactNode;
    type?: string,
    position?: string,
    top?: number,
    left?: number
}

const Button: FC<ButtonProps> = ({
    className,
    onClick,
    title,
    disabled,
    children,
}) => {
    return (
        <button
            className={'btn ' + className}
            onClick={onClick}
            title={title}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    className: `btn btn-default`,
    type: 'button',
};

export default Button;
