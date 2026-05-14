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
      options: ['neon', 'pink', 'outline', 'primary', 'ghost'],
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

export const ButtonSet: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 bg-ufoo-dark p-6">
      <Button variant="primary">Save</Button>
      <Button variant="outline">Preview</Button>
      <Button variant="ghost">Copy</Button>
      <Button isDisabled variant="primary">
        Disabled
      </Button>
      <Button aria-label="Icon only" isIconOnly variant="ghost">
        <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect height="14" rx="2" width="14" x="8" y="8" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </Button>
    </div>
  ),
};
