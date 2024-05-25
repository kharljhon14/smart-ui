import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs']
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: 'Headline',
    subtitle: 'Supporting text line',
    children: 'Insert text here',
    open: true,
    testIdPrefix: 'accordion'
  }
};
