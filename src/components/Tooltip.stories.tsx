import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CopyButton: Story = {
  render: () => (
    <div className="bg-ufoo-dark p-12">
      <Tooltip>
        <Button aria-label="Copy markdown" isIconOnly variant="ghost">
          <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect height="14" rx="2" width="14" x="8" y="8" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        </Button>
        <Tooltip.Content>Copy markdown</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};
