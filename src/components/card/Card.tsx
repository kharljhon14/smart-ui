import { CardProps } from './Card.types';
import React from 'react';
import './Card.css';

const Card: React.FC<CardProps> = ({ testIdPrefix, children }) => {
  return (
    <div
      data-testid={testIdPrefix}
      className="card"
    >
      {children}
    </div>
  );
};

export default Card;
