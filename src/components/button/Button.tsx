import { ButtonProps } from './Button.types';
import React from 'react';
import './Button.css';

/**
 * Button component that extends the properties of the html button tag
 */
const Button: React.FC<ButtonProps> = ({
  testIdPrefix,
  variant = 'primary',
  children,
  rounded,
  size = 'medium',
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${rounded && 'btn--rounded'}`}
      data-testid={testIdPrefix}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
