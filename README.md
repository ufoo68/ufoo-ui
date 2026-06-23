# ufoo-ui

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
  QuizChoice,
  QuizQuestionCard,
  SlideThumbnail,
  ToolButton,
  Toolbar,
  ToolbarGroup,
  PortfolioSection,
  ProjectCard,
  SkillBadge,
  SkillGroup,
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

### Portfolio example

```tsx
import {
  PortfolioSection,
  ProjectCard,
  SkillBadge,
  SkillGroup,
} from 'ufoo-ui';

<PortfolioSection title="個人開発" eyebrow="Selected work" tone="muted">
  <div className="grid gap-6 md:grid-cols-3">
    {products.map((product) => (
      <ProjectCard
        key={product.id}
        title={product.title}
        description={product.detail}
        media={<img src={product.image.url} alt="" />}
        technologies={product.technologies}
        action={<Link href={product.url}>詳細を見る →</Link>}
      />
    ))}
  </div>
</PortfolioSection>

<SkillGroup title="言語">
  {languages.map((skill) => (
    <SkillBadge key={skill.id} name={skill.title} meta={`${skill.years}年`} />
  ))}
</SkillGroup>
```

### Quiz authoring example

```tsx
import { QuizChoice, QuizQuestionCard, QuizStats } from 'ufoo-ui';

function QuizEditor() {
  return (
    <div className="grid gap-4">
      <QuizStats
        items={[
          { label: 'Questions', value: 12, tone: 'accent' },
          { label: 'Total score', value: '120 pt' },
          { label: 'Estimated', value: '8 min' },
        ]}
      />
      <QuizQuestionCard
        difficulty="normal"
        points={10}
        questionNumber={3}
        status="ready"
        title="Which step should happen before publishing a package?"
        type="single"
      >
        <QuizChoice label="A">Push directly from a local branch</QuizChoice>
        <QuizChoice label="B" state="correct">
          Run a dry-run package check and review the generated files
        </QuizChoice>
      </QuizQuestionCard>
    </div>
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

### QuizQuestionCard / QuizChoice / QuizStats
Quiz authoring primitives for question cards, answer choices, correctness states, points, and overview metrics.

### PortfolioSection / ProjectCard / SkillBadge / SkillGroup
Portfolio page primitives for section layout, CMS-backed project cards, technology tags, and categorized skills.

## License
MIT
