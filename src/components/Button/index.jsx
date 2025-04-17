import React from 'react';
import { ButtonWrapper } from './Button.styles';

function Button(props) {
    const { children, type = "light", onClick, size = "large", disabled =false } = props;

    return (
        <ButtonWrapper type={type} onClick={onClick} size={size} disabled={disabled}>
            {children}
        </ButtonWrapper>
    );
}

export default Button;