import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Card from './Card';

describe('Card', () => {
  test('Renders Card Component', () => {
    render(
      <Card testIdPrefix="card">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quia laudantium
        veritatis. Est pariatur, aut sit delectus atque impedit! Corrupti sunt tempora ipsa officiis
        veritatis reprehenderit aperiam rerum aut explicabo.
      </Card>
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
