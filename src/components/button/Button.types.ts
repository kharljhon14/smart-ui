import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testIdPrefix: string;
  variant: 'primary' | 'secondary' | 'danger';
  outline?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}
