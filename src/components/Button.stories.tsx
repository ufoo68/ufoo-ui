import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neon', 'pink', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Neon: Story = {
  args: {
    variant: 'neon',
    children: 'Launch System',
  },
};

export const Pink: Story = {
  args: {
    variant: 'pink',
    children: 'Initialize Core',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Secondary Protocol',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Heavy Duty',
  },
};
