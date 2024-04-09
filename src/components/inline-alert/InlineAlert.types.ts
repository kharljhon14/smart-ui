import { PropsWithChildren } from 'react';

export interface InlineAlertProps extends PropsWithChildren {
  title: String;
  testIdPrefix: String;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
}
