import { IoMdClose } from 'react-icons/io';
import React from 'react';
import { ModalProps } from './Modal.types';
import './Modal.css';

const Modal: React.FC<ModalProps> = ({ title, open, close, children }) => {
  return (
    <div className="modal">
      <div className="modal__header">
        <h1>{title}</h1>
        <button>
          <IoMdClose />
        </button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
