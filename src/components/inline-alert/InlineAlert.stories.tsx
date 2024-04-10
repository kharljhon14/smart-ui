import { Meta, StoryObj } from '@storybook/react';
import InlineAlert from './InlineAlert';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Inline Alert',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { close: fn() },
  component: InlineAlert
} satisfies Meta<typeof InlineAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?',
    open: true
  }
};

export const Neutral: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'neutral',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?',
    open: true
  }
};

export const Success: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'success',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?',
    open: true
  }
};

export const Warning: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'warning',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?',
    open: true
  }
};

export const Danger: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'danger',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?',
    open: true
  }
};
