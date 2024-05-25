import { IoMdClose } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import React from 'react';
import { ModalProps } from './Modal.types';
import './Modal.css';

const Modal: React.FC<ModalProps> = ({
  title,
  open,
  close,
  variant = 'primary',
  testIdPrefix,
  children
}) => {
  return (
    <div
      data-testid={testIdPrefix}
      className={`modal__wrapper ${!open && 'modal--close'}`}
    >
      <div className="modal">
        <div className={`modal__header modal--variant--${variant}`}>
          <div className="modal__header-title">
            <div className="modal__header-title-icon">
              <IoBookmarkOutline />
            </div>
            <h1>{title}</h1>
          </div>
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
