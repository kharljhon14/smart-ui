import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from './Modal';
import React from 'react';

describe('Modal', () => {
  test('Renders Modal Component', () => {
    render(
      <Modal
        testIdPrefix="modal"
        open={true}
        close={() => {}}
        title="Header"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ducimus.
      </Modal>
    );

    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  test('Check onClick close event', () => {
    // Mock the onClick function
    const onClickMock = jest.fn();

    render(
      <Modal
        testIdPrefix="modal"
        open={true}
        close={onClickMock}
        title="Header"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ducimus.
      </Modal>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
