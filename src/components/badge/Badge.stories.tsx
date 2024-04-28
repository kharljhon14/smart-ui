import { Meta, StoryObj } from '@storybook/react';
import { BadgeProps } from './Badge.types';
import Badge from './Badge';

const meta = {
  title: 'Components/Badge',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  component: Badge
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<BadgeProps>;

export const Example: Story = {
  args: {
    children: '32'
  }
};
