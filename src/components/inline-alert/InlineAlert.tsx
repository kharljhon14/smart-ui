import { InlineAlertProps } from './InlineAlert.types';
import { MdClose } from 'react-icons/md';
import React from 'react';
import './InlineAlert.css';

const InlineAlert: React.FC<InlineAlertProps> = ({
  title,
  variant = 'primary',
  testIdPrefix,
  children
}) => {
  return (
    <div
      data-testid={testIdPrefix}
      className={`inline-alert inline-alert--${variant}`}
    >
      <div className="inline-alert__header">
        <h1>{title}</h1>
        <button>
          <MdClose />
        </button>
      </div>
      {children}
    </div>
  );
};

export default InlineAlert;
