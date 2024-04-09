import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import SmartRating from './SmartRating';
import { userEvent } from '@storybook/test';

describe('SmartRating', () => {
  test('renders the Rating component', () => {
    render(
      <SmartRating
        title="default"
        theme="primary"
        testIdPrefix="rating"
      />
    );

    expect(screen.getByRole('heading').innerHTML).toEqual('default');
    expect(screen.getAllByRole('button', { hidden: true }).length).toEqual(5);
  });

  test('click the 5 star rating', async () => {
    const stars = [0, 1, 2, 3, 4];
    render(
      <SmartRating
        title="default"
        theme="primary"
        testIdPrefix="rating"
      />
    );

    stars.forEach(async (star) => {
      const element = screen.getByTestId('rating-' + star);
      userEvent.click(element);
      await waitFor(() => expect(element.className).toBe('starActive'));
    });
  });
});
