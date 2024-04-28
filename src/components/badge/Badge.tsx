import { BadgeProps } from './Badge.types';
import './Badge.css';
import React from 'react';

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className="badge">{children}</div>;
};

export default Badge;
