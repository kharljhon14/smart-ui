import { ButtonProps } from './Button.types';
import React from 'react';
import './Button.css';

const Button: React.FC<ButtonProps> = ({ testIdPrefix, variant, children, ...props }) => {
  return (
    <button
      className={`btn btn--${variant}`}
      data-testid={testIdPrefix}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
