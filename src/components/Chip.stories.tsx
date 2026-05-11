import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['accent', 'default', 'primary', 'danger', 'warning', 'success'],
    },
    variant: {
      control: 'select',
      options: ['soft', 'solid', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Soft: Story = {
  args: {
    children: 'Public',
    color: 'accent',
    variant: 'soft',
  },
};

export const StatusSet: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 bg-ufoo-dark p-5">
      <Chip color="accent" variant="soft">Public</Chip>
      <Chip color="default" variant="soft">Private</Chip>
      <Chip color="success" variant="soft">Saved</Chip>
      <Chip color="warning" variant="soft">Draft</Chip>
      <Chip color="danger" variant="soft">Error</Chip>
    </div>
  ),
};
