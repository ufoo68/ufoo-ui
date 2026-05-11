import type { Meta, StoryObj } from '@storybook/react';
import { EditorShell } from './EditorShell';
import { InspectorField, InspectorInput, InspectorPanel, InspectorSection } from './InspectorPanel';
import { SlideThumbnail } from './SlideThumbnail';
import { ToolButton, Toolbar, ToolbarGroup } from './Toolbar';

const meta: Meta<typeof EditorShell> = {
  title: 'Editor/EditorShell',
  component: EditorShell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const toolbar = (
  <Toolbar>
    <ToolbarGroup label="History">
      <ToolButton label="Undo" icon="↶" />
      <ToolButton label="Redo" icon="↷" />
    </ToolbarGroup>
    <ToolbarGroup label="Insert">
      <ToolButton label="Select" icon="↖" active />
      <ToolButton label="Text" icon="T" />
      <ToolButton label="Shape" icon="□" />
      <ToolButton label="Image" icon="▧" />
    </ToolbarGroup>
    <ToolbarGroup label="View">
      <ToolButton label="Present" icon="▶" showLabel />
    </ToolbarGroup>
  </Toolbar>
);

const sidebar = (
  <div className="space-y-2 p-3">
    <SlideThumbnail slideNumber={1} title="Opening" meta="16:9" selected>
      <div className="flex size-full items-center justify-center bg-slate-950 text-xs font-bold text-cyan-300">
        LT
      </div>
    </SlideThumbnail>
    <SlideThumbnail slideNumber={2} title="Agenda" meta="3 items" />
    <SlideThumbnail slideNumber={3} title="Demo" meta="Code + notes" />
  </div>
);

const inspector = (
  <InspectorPanel title="Slide">
    <InspectorSection title="Canvas">
      <InspectorField label="Width">
        <InspectorInput defaultValue="1280" unit="px" />
      </InspectorField>
      <InspectorField label="Height">
        <InspectorInput defaultValue="720" unit="px" />
      </InspectorField>
    </InspectorSection>
    <InspectorSection title="Selection">
      <InspectorField label="X">
        <InspectorInput defaultValue="120" unit="px" />
      </InspectorField>
      <InspectorField label="Y">
        <InspectorInput defaultValue="88" unit="px" />
      </InspectorField>
    </InspectorSection>
  </InspectorPanel>
);

export const SlideEditor: Story = {
  args: {
    toolbar,
    sidebar,
    inspector,
    statusbar: '100% zoom · 3 slides · Saved',
    children: (
      <div className="mx-auto flex aspect-video max-w-5xl items-center justify-center rounded-sm bg-ufoo-canvas p-12 text-slate-950 shadow-2xl">
        <div className="w-full">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">Lightning Talk</p>
          <h1 className="max-w-2xl text-5xl font-black leading-tight">Build slides directly from structured ideas</h1>
        </div>
      </div>
    ),
  },
};
