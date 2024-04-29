import { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  /**
   * This will be the header title
   */
  title: String;
  /**
   * The type of modal
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
  testIdPrefix?: string;
}
