import React, { FC } from 'react'

interface InputProps {
    className?: string,
    value?: string,
    handleChange?: (e: React.SyntheticEvent) => void,
    handleBlur?: () => void,
    handleFocus?: () => void,
    handleKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void,
    handlePaste?: () => void,
    id?: string,
    name: string,
    type?: string,
    placeholder?: string,
    disabled?: boolean,
    maxLength?: number,
    autoComplete?: string,
    checked?: boolean
}


const Input: FC<InputProps> = ({ handleChange, handleKeyDown, ...props }) => {
    return (
        <input  {...props} onChange={handleChange} onKeyDown={handleKeyDown} />
    )
};

Input.defaultProps = {
    className: 'form-control',
    type: 'text'
}

export default Input;
