import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Slide title',
    variant: 'primary',
  },
};

export const Form: Story = {
  render: () => (
    <div className="grid w-80 gap-4 bg-ufoo-panel p-5">
      <label className="grid gap-1 text-sm font-semibold text-ufoo-ink">
        Email
        <Input placeholder="speaker@example.com" type="email" variant="primary" />
      </label>
      <label className="grid gap-1 text-sm font-semibold text-ufoo-ink">
        Password
        <Input placeholder="Password" type="password" variant="primary" />
      </label>
    </div>
  ),
};
