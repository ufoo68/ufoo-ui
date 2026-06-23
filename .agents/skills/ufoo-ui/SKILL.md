---
name: ufoo-ui
description: Build, modify, document, and validate reusable React components in the ufoo-ui library. Use when Codex works in this repository on components, Storybook stories, exports, Tailwind CSS styling, package compatibility, release preparation, or UI primitives intended for consuming React and Next.js applications.
---

# ufoo-ui Development

Create reusable React 19 components that fit the existing ufoo-ui package and remain safe to consume from Next.js applications.

## Inspect before editing

1. Read `package.json`, `src/index.ts`, and `src/index.css`.
2. Read the closest existing component and its Storybook story.
3. Inspect the consuming application when the request names one.
4. Check `git status` and preserve unrelated user changes.

## Implement components

- Place components in `src/components/<ComponentName>.tsx`.
- Export public components and prop interfaces from the component file.
- Re-export public APIs from `src/index.ts`.
- Prefer React primitives and platform HTML over new dependencies.
- Accept `className` and relevant native HTML attributes.
- Use slots typed as `React.ReactNode` when consumers may provide Next.js `Link`, `Image`, icons, or custom controls.
- Avoid importing Next.js or application-specific modules into this package.
- Keep components compatible with Server Components unless client-side state or effects are essential.
- Use accessible semantic elements, labels, focus styles, and state attributes.
- Avoid global element styling or page-level background and text-color side effects in `src/index.css`.

## Style consistently

- Use Tailwind CSS 4 utility classes.
- Reuse the `ufoo-*` theme tokens in `src/index.css` for the established dark and neon visual language.
- Support neutral light surfaces where portfolio or content-site components require them.
- Include responsive behavior for layout components.
- Let consumers refine layout through `className` or explicit slot props.

## Add Storybook coverage

Create `src/components/<ComponentName>.stories.tsx` for every public visual component.

- Use `tags: ['autodocs']`.
- Demonstrate the primary state and important variants.
- Include realistic Japanese portfolio content when the component targets `ufoo68-portfolio`.
- Set `layout: 'fullscreen'` for page-level layouts and `layout: 'centered'` for compact primitives.

## Document public APIs

Update `README.md` when adding or materially changing a public component.

- Add a concise import and usage example.
- Add the component to the Components section.
- Show consumer-provided `Link`, `Image`, or data mapping where that is part of the API design.

## Validate

Run the checks appropriate to the change:

```powershell
npm run build
npm run build-storybook
npm run pack:dry-run
```

Always run `npm run build`. Run Storybook for visual component changes and the package dry run for export, type declaration, or release changes.

Confirm:

- TypeScript declarations are generated.
- New components appear in `dist/src/components`.
- `dist/style.css` contains required Tailwind utilities.
- The npm package includes the generated declarations and CSS.
- `git diff --check` reports no whitespace errors.

## Prepare releases

- Treat a user-provided version change as separate work unless it clearly accompanies the requested public API addition.
- Never publish automatically.
- Commit and push only when explicitly requested.
