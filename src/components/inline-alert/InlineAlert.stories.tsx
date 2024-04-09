import { Meta, StoryObj } from '@storybook/react';
import InlineAlert from './InlineAlert';

const meta = {
  title: 'Components/Inline-Alert',
  component: InlineAlert
} satisfies Meta<typeof InlineAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?'
  }
};

export const Neutral: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'neutral',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?'
  }
};

export const Success: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'success',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?'
  }
};

export const Warning: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'warning',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?'
  }
};

export const Danger: Story = {
  args: {
    title: 'Inline Alert Header',
    testIdPrefix: 'inlineAlert',
    variant: 'danger',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sint?'
  }
};
