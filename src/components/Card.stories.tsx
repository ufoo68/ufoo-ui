import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'System Status',
    children: 'All modules operational. Connection to matrix stable.',
  },
};

export const Alert: Story = {
  args: {
    title: 'Security Alert',
    className: 'border-ufoo-pink',
    children: 'UNAUTHORIZED ACCESS DETECTED IN SECTOR 7G.',
  },
};
