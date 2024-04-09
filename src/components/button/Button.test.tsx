import { render, screen } from '@testing-library/react';

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
});
