import type { Meta, StoryObj } from '@storybook/react';
import { SlideThumbnail } from './SlideThumbnail';

const meta: Meta<typeof SlideThumbnail> = {
  title: 'Editor/SlideThumbnail',
  component: SlideThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
  args: {
    slideNumber: 1,
    title: 'Opening',
    meta: '16:9',
    selected: true,
    children: (
      <div className="flex size-full items-center justify-center bg-slate-950 text-xs font-bold text-cyan-300">
        LT
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    slideNumber: 2,
    title: 'Agenda',
    meta: '3 blocks',
  },
};
