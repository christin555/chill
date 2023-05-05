import React from 'react';
import {StyledButtonProps} from './StyledButtonI';
import {StyledButton} from './StyledElements';

export interface ButtonProps extends StyledButtonProps {
  onClick: () => void;
  label: string
}

const Button = ({onClick, label, ...rest}: ButtonProps) => (
        <StyledButton
            onClick={onClick}
            {...rest}
        >
            {label}
        </StyledButton>
);

export default Button;
