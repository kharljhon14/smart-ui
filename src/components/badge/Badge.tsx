import { BadgeProps } from './Badge.types';
import './Badge.css';
import React from 'react';

const Badge: React.FC<BadgeProps> = ({ testIdPrefix, children }) => {
  return (
    <div
      data-testid={testIdPrefix}
      className="badge"
    >
      {children}
    </div>
  );
};

export default Badge;
