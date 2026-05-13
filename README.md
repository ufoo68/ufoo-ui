# ufoo UI

A React UI library built with Tailwind CSS and Vite.

## Features

- **Cyberpunk Aesthetic**: Neon accents, dark panels, and sharp visual contrast.
- **TypeScript First**: Full type safety out of the box.
- **Tailwind Powered**: Easily customizable and lightweight.
- **Vite Optimized**: Fast and modern build pipeline.

## Installation

```bash
npm install ufoo-ui
```

## Usage

1. Import the styles in your main entry file:

```javascript
import 'ufoo-ui/style.css';
```

2. Use the components:

```tsx
import {
  EditorShell,
  InspectorField,
  InspectorInput,
  InspectorPanel,
  InspectorSection,
  SlideThumbnail,
  ToolButton,
  Toolbar,
  ToolbarGroup,
} from 'ufoo-ui';

function App() {
  return (
    <EditorShell
      toolbar={
        <Toolbar>
          <ToolbarGroup label="Insert">
            <ToolButton label="Select" icon="↖" active />
            <ToolButton label="Text" icon="T" />
          </ToolbarGroup>
        </Toolbar>
      }
      sidebar={
        <SlideThumbnail slideNumber={1} title="Opening" selected />
      }
      inspector={
        <InspectorPanel title="Selection">
          <InspectorSection title="Position">
            <InspectorField label="X">
              <InspectorInput defaultValue="120" unit="px" />
            </InspectorField>
          </InspectorSection>
        </InspectorPanel>
      }
    >
      <div className="aspect-video bg-white">Slide canvas</div>
    </EditorShell>
  );
}
```

## Components

### Button
Futuristic buttons with neon glow effects.
- `variant`: 'neon' | 'pink' | 'outline'
- `size`: 'sm' | 'md' | 'lg'

### Card
Angled cards with neon borders.
- `title`: String (optional)

### EditorShell
Three-pane editor layout with optional `toolbar`, `sidebar`, `inspector`, and `statusbar` slots.

### Toolbar / ToolbarGroup / ToolButton
Compact editor toolbar primitives for actions such as select, text, shapes, undo, redo, and present.

### SlideThumbnail
Slide navigator item with slide number, title, metadata, selection state, and preview content.

### InspectorPanel / InspectorSection / InspectorField / InspectorInput
Property editor primitives for canvas and selection settings.

## License
MIT
