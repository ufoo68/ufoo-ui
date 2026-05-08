# ufoo UI

A cool, Cyberpunk-themed React UI library built with Tailwind CSS and Vite.

## Features
- **Cyberpunk Aesthetic**: Neon glows, sharp angles, and futuristic vibes.
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
import { Button, Card } from 'ufoo-ui';

function App() {
  return (
    <Card title="System Alert">
      <Button variant="neon">Execute Protocol</Button>
    </Card>
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

## License
MIT
