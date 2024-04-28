import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Badge from './Badge';

describe('Badge', () => {
  test('Renders Badge Component', () => {
    render(<Badge testIdPrefix="badge">32</Badge>);

    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });
});
