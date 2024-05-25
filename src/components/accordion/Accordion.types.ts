import { ReactNode } from 'react';

export interface AccordionProps {
  /**
   * This will be the headline
   */
  title: String;
  /**
   * This will be the sub headline
   */
  subtitle: String;
  /**
   *  Inline alert content
   */
  children?: ReactNode | undefined;
  /**
   * The state of the component
   */
  open: boolean;
  /**
   *  Click handler for closing the component
   */
  close: () => void;
  disabled?: boolean;

  testIdPrefix?: String;
}
