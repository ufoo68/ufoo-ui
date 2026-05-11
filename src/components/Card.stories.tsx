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

export const WithContentSlot: Story = {
  render: () => (
    <Card className="w-96 border border-ufoo-panel-border bg-ufoo-panel">
      <Card.Content className="p-5">
        <h3 className="text-lg font-black text-ufoo-ink">Deck summary</h3>
        <p className="text-sm leading-6 text-ufoo-muted">
          A compact card pattern for dashboard rows, login panels, loading blocks, and review results.
        </p>
      </Card.Content>
    </Card>
  ),
};
