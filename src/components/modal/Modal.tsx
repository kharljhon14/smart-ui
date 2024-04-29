import { IoMdClose } from 'react-icons/io';
import React from 'react';
import { ModalProps } from './Modal.types';
import './Modal.css';

const Modal: React.FC<ModalProps> = ({ title, open, close, testIdPrefix, children }) => {
  return (
    <div
      data-testid={testIdPrefix}
      className={`modal__wrapper ${!open && 'modal--close'}`}
    >
      <div className="modal">
        <div className="modal__header">
          <h1>{title}</h1>
          <button onClick={close}>
            <IoMdClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
