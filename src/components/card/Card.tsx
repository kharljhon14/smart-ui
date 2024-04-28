import { CardProps } from './Card.types';
import React from 'react';
import './Card.css';

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
