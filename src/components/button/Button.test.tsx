import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';
import React from 'react';

describe('Button', () => {
  test('Renders the Button component', () => {
    render(
      <Button
        testIdPrefix="button"
        variant="primary"
      >
        Button
      </Button>
    );
    expect(screen.getByTestId('button').innerHTML).toEqual('Button');
  });

  test('Disabled Button component', () => {
    render(
      <Button
        testIdPrefix="button"
        variant="primary"
        disabled
      >
        Button
      </Button>
    );

    expect(screen.getByRole('button')).toHaveProperty('disabled', true);
  });

  test('Check onClick event', () => {
    // Mock the onClick function
    const onClickMock = jest.fn();

    render(
      <Button
        testIdPrefix="button"
        variant="primary"
        onClick={onClickMock}
      >
        Button
      </Button>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
