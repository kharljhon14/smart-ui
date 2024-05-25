import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { AccordionProps } from './Accordion.types';
import './Accordion.css';

export const Accordion: React.FC<AccordionProps> = ({ title, subtitle, children }) => {
  return (
    <div className="accordion__container">
      <button className="accordion__button">
        <IoChevronDown />
        <div className="accordion__header">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>
        <IoChevronDown />
      </button>
      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
