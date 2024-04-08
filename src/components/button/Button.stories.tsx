import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    testIdPrefix: 'button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    testIdPrefix: 'button'
  }
};
