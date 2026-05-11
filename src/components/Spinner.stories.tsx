import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['accent', 'default', 'primary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
  args: {
    color: 'accent',
    size: 'md',
  },
};

export const LoadingBlockPattern: Story = {
  render: () => (
    <div className="flex items-center gap-3 rounded-lg border border-dashed border-ufoo-panel-border bg-ufoo-panel p-8">
      <Spinner color="accent" size="sm" />
      <p className="text-sm font-semibold text-ufoo-muted">Loading slides...</p>
    </div>
  ),
};
