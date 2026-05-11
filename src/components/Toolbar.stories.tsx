import type { Meta, StoryObj } from '@storybook/react';
import { ToolButton, Toolbar, ToolbarGroup } from './Toolbar';

const meta: Meta<typeof Toolbar> = {
  title: 'Editor/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-ufoo-panel p-3">
      <Toolbar>
        <ToolbarGroup label="History">
          <ToolButton label="Undo" icon="↶" />
          <ToolButton label="Redo" icon="↷" />
        </ToolbarGroup>
        <ToolbarGroup label="Insert">
          <ToolButton label="Select" icon="↖" active />
          <ToolButton label="Text" icon="T" />
          <ToolButton label="Shape" icon="□" />
          <ToolButton label="Present" icon="▶" showLabel />
        </ToolbarGroup>
      </Toolbar>
    </div>
  ),
};
