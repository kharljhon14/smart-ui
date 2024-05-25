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
   * Set the state to be open on start
   */
  open: boolean;

  disabled?: boolean;

  testIdPrefix?: String;
}
