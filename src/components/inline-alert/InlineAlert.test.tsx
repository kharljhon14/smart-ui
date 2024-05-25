import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import InlineAlert from './InlineAlert';

describe('InlineAlert', () => {
  test('Renders Inline Alert component', () => {
    const open = true;
    render(
      <InlineAlert
        title="Title"
        open={open}
        close={() => {}}
        testIdPrefix="inlineAlert"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime
      </InlineAlert>
    );
    expect(screen.getByTestId('inlineAlert')).toBeInTheDocument();
    expect(screen.getByRole('heading').textContent).toEqual('Title');
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime'
      )
    ).toBeInTheDocument();
  });

  test('Mock call close function', () => {
    const open = true;
    const onCloseMockCall = jest.fn();

    render(
      <InlineAlert
        title="Title"
        open={open}
        close={onCloseMockCall}
        testIdPrefix="inlineAlert"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime
      </InlineAlert>
    );

    const inlineAlertCloseButton = screen.getByRole('button');

    fireEvent.click(inlineAlertCloseButton);

    expect(onCloseMockCall).toHaveBeenCalled();
  });
});
