import { Meta, StoryObj } from '@storybook/react';
import { ModalProps } from './Modal.types';
import Modal from './Modal';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Modal',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  component: Modal,
  args: { close: fn() }
} satisfies Meta<ModalProps>;

export default meta;

type Story = StoryObj<ModalProps>;

export const Example: Story = {
  args: {
    open: true,
    title: 'Header',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
};
