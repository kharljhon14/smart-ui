import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  /**
   * How type of button
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';

  /**
   * How large the button will be
   */
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  rounded?: boolean;
  testIdPrefix: string;
}
