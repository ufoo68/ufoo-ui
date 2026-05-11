import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | number>('markdown');

    return (
      <div className="grid w-[420px] gap-4 bg-ufoo-dark p-5">
        <Tabs aria-label="Editor panels" selectedKey={selected} onSelectionChange={setSelected}>
          <Tabs.List className="grid grid-cols-3 rounded-md border border-ufoo-panel-border bg-ufoo-panel p-1">
            <Tabs.Tab id="markdown">Markdown</Tabs.Tab>
            <Tabs.Tab id="preview">Preview</Tabs.Tab>
            <Tabs.Tab id="review">Review</Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <div className="rounded-md border border-ufoo-panel-border bg-ufoo-panel p-4 text-sm text-ufoo-muted">
          Selected: <span className="font-bold text-ufoo-neon">{selected}</span>
        </div>
      </div>
    );
  },
};
