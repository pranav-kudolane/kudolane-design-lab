# Kudolane Design Lab

A working reference for client-ready sites: live CSS effects, premium palettes by
industry, an accessibility checklist, and an AI build workflow — all copy-and-paste ready.

Built with **Vite + React + TypeScript**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the built output
npm run typecheck
```

## How it's organised

Content lives in `src/data/` as typed arrays. Presentation lives in `src/components/`
and `src/sections/`. Adding content means editing one data file — you almost never
touch the section components.

```
src/
  data/          effects, palettes, checklist, aiTips, alsoWorth
  components/    cards, demos, code block, toast, rich text
  sections/      Hero, Effects, Palettes, Accessibility, AiWorkflow, Footer
  hooks/         useTilt, useSpotlight, useCopy, useToast, useReducedMotion
  lib/           highlight.tsx — the small CSS/JS syntax highlighter
  styles/        tokens, base, layout, cards, demos
  types.ts       the shape of every data file
```

## Adding things

**A new effect** — write a demo component in `src/components/demos.tsx`, then append an
entry to `src/data/effects.ts`:

```ts
{
  id: 'scroll-snap',
  name: 'Scroll Snap',
  use: 'sections',
  desc: 'Full-screen snapping. **Pure CSS**, no library.',
  lang: 'css',
  Demo: ScrollSnapDemo,
  code: `.deck { scroll-snap-type: y mandatory; }`,
}
```

The rank badge is the array index, so reordering the array reorders the page.
Snippets are plain strings — `lib/highlight.tsx` colours them at render time and the
Copy button puts the raw text on the clipboard.

**A new palette** — one entry in `src/data/palettes.ts` with five hexes. Swatches,
click-to-copy and the toast come for free.

**Rich text** — `desc`, `why`, checklist items and tip bodies support two inline
markers: `**bold**` and `` `code` ``. See `components/RichText.tsx`.

## Design tokens

Every colour, font and radius is a CSS custom property in `src/styles/tokens.css`.
Change a value there and the whole lab follows.

## Accessibility

Reduced motion is honoured in two places: a global CSS `@media` block, and
`useReducedMotion()`, which makes the pointer-tracking hooks no-op entirely.
