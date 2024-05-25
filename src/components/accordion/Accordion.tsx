import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { AccordionProps } from './Accordion.types';
import './Accordion.css';

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  open,
  disabled,
  testIdPrefix,
  children
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="accordion__container"
      data-state={isOpen ? 'open' : 'close'}
      data-testid={testIdPrefix}
    >
      <button
        className="accordion__button"
        disabled={disabled}
        onClick={handleToggle}
      >
        <IoChevronDown className="accordion__arrow" />
        <div className="accordion__header">
          <h1>{title}</h1>
          <span>{subtitle}</span>
        </div>
        <IoChevronDown className="accordion__arrow" />
      </button>
      <div className="accordion__content">{children}</div>
    </div>
  );
};

export default Accordion;
