import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';
import React from 'react';

describe('Accordion', () => {
  test('Renders Accordion component', () => {
    render(
      <Accordion
        title="Title"
        subtitle="subtitle"
        open={false}
        testIdPrefix="accordion"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime
      </Accordion>
    );
    expect(screen.getByTestId('accordion')).toBeInTheDocument();
    expect(screen.getByRole('heading').textContent).toEqual('Title');
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime'
      )
    ).toBeInTheDocument();
  });
});
