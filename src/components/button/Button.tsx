import { ButtonProps } from './Button.types';
import React from 'react';
import './Button.css';

const Button: React.FC<ButtonProps> = ({ testIdPrefix, variant, ...props }) => {
  return (
    <button
      className={`btn btn--${variant}`}
      data-testid={testIdPrefix}
      disabled={props.disabled}
      {...props}
    >
      Button
    </button>
  );
};

export default Button;
