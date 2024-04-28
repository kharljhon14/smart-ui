import { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  /**
   * This will be the header title
   */
  title: String;
  /**
   * The state of the component
   */
  open: boolean;
  /**
   *  Click handler for closing the component
   */
  close: () => void;
}
