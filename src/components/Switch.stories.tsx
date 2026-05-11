import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState(true);

    return (
      <Switch
        className="border border-ufoo-panel-border bg-ufoo-panel px-3 py-2 text-ufoo-ink"
        isSelected={selected}
        size="sm"
        onChange={setSelected}
      >
        <Switch.Control />
        Public
      </Switch>
    );
  },
};

export const CustomControl: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <Switch
        className="border border-ufoo-panel-border bg-ufoo-panel px-3 py-2 text-ufoo-ink"
        isSelected={selected}
        size="sm"
        onChange={setSelected}
      >
        <Switch.Control
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
            selected ? 'bg-ufoo-neon' : 'bg-stone-500'
          }`}
        >
          <span
            className={`absolute top-0.5 block h-4 w-4 rounded-full bg-white shadow transition-[left] ${
              selected ? 'left-[18px]' : 'left-0.5'
            }`}
          />
        </Switch.Control>
        Visibility
      </Switch>
    );
  },
};
