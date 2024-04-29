import { PropsWithChildren, ReactNode } from 'react';

export interface InlineAlertProps {
  /**
   * This will be the header title
   */
  title: String;
  /**
   *  Inline alert content
   */
  children?: ReactNode | undefined;
  /**
   * The type of inline alert
   */

  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
  /**
   * The state of the component
   */
  open: boolean;
  /**
   *  Click handler for closing the component
   */
  close: () => void;

  testIdPrefix?: String;
}
