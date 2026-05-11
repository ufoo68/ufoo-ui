import type { Meta, StoryObj } from '@storybook/react';
import { InspectorField, InspectorInput, InspectorPanel, InspectorSection } from './InspectorPanel';

const meta: Meta<typeof InspectorPanel> = {
  title: 'Editor/InspectorPanel',
  component: InspectorPanel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Selection',
    children: (
      <>
        <InspectorSection title="Position">
          <InspectorField label="X">
            <InspectorInput defaultValue="120" unit="px" />
          </InspectorField>
          <InspectorField label="Y">
            <InspectorInput defaultValue="88" unit="px" />
          </InspectorField>
        </InspectorSection>
        <InspectorSection title="Size">
          <InspectorField label="Width">
            <InspectorInput defaultValue="640" unit="px" />
          </InspectorField>
        </InspectorSection>
      </>
    ),
  },
};
