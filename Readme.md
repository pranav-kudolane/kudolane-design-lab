# Kudolane Design Lab

A working reference for client-ready sites: live CSS effects, premium palettes by
industry, the design languages a site can be built in, an accessibility checklist,
and an AI build workflow — all copy-and-paste ready.

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
  data/          effects, palettes, designs, checklist, aiTips, alsoWorth
  components/    cards, demos, designThumbs, code block, toast, rich text
  landings/      one sample landing page per design style
  sections/      Hero, Effects, Palettes, Designs, Accessibility, AiWorkflow,
                 Footer, DesignDetail, DesignLive
  hooks/         useTilt, useSpotlight, useCopy, useToast, useReducedMotion,
                 useHashRoute
  lib/           highlight.tsx — the small CSS/JS syntax highlighter
  styles/        tokens, base, layout, cards, demos, designs, landings
  types.ts       the shape of every data file
```

## Routing

The lab is one page with a ~40-line hash router (`hooks/useHashRoute.ts`). Two
shapes of hash share the URL bar:

| hash | what renders |
| --- | --- |
| `#effects`, `#palettes`, … | the home page, scrolled to that section |
| `#/design/brutalism` | the full write-up for one design style |
| `#/design/brutalism/live` | that style's sample landing page, full screen |

Anything not starting with `#/` is treated as a plain anchor, so every existing
nav link keeps working. Landing pages use the `A` component from
`landings/anchors.tsx` for their own in-page links — a bare `#work` would be read
as a route change and throw the reader off the page.

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

**A new design style** — three files, then one data entry:

1. a thumbnail in `src/components/designThumbs.tsx` — a miniature fake website
   built from divs, sized in `cqi` so it scales with the card;
2. a sample landing page in `src/landings/`, scoped under its own root class;
3. the styles for both, in `styles/designs.css` and `styles/landings.css`;
4. an entry in `src/data/designs.ts` carrying the write-up — origin, principles,
   traits, when to reach for it, when not to, and a representative snippet.

The card grid, the `#/design/<id>` write-up and the full-screen preview are all
generated from that array; no component needs editing.

Fonts are loaded once in `index.html` and exposed as tokens in `tokens.css`:

| token | face | used by |
| --- | --- | --- |
| `--display` | Bricolage Grotesque | the lab's own headings, claymorphism |
| `--body` | Inter | the lab, and most landings |
| `--mono` | JetBrains Mono | code, labels, kickers |
| `--hand` | Caveat | scrapbook captions, sketch annotations |
| `--serif` | Playfair Display | luxury typography, editorial |
| `--pixel` | Press Start 2P | pixel art headings only — never body copy |

Adding a style that needs a new face means one more family on that existing
link, not a second request. Weigh it anyway: a style whose whole identity is its
typeface (luxury, pixel) earns one; a style that merely prefers one does not.

Landing pages are **container-query sized**: each root sets `container-type:
inline-size` and every fluid value uses `cqi`, never `vw`. That is what makes a
page look identical framed inside the write-up and filling a 4K screen — so keep
`@container` rules, not `@media` rules, in `styles/landings.css`.

**Rich text** — `desc`, `why`, checklist items, tip bodies and every design-style
field support three inline markers: `**bold**`, `*italic*` and `` `code` ``.
See `components/RichText.tsx`.

## Design tokens

Every colour, font and radius is a CSS custom property in `src/styles/tokens.css`.
Change a value there and the whole lab follows.

## Accessibility

Reduced motion is honoured in two places: a global CSS `@media` block, and
`useReducedMotion()`, which makes the pointer-tracking hooks no-op entirely.

**Every sample landing page passes WCAG AA on text contrast** — 4.5:1 for body
copy, 3:1 for large display type — measured against the pixels actually painted
behind each glyph, not against a nominal background colour. That matters here
because several of these styles fail contrast *by nature*: pale-on-pale in
Ethereal, terracotta text in Bohemian, white on hot pink in Maximalism, gradient
text in Y2K. Where a style's instinct and the contrast floor disagreed, the floor
won, and `styles/landings.css` says so in a comment at that spot.

If you add a style, hold it to the same line. The measurement that matters is a
screenshot of the text's own bounding box with the glyph colour excluded — a
computed `background-color` lookup will tell you a gradient, a blurred orb or a
`backdrop-filter` pane is `transparent`, and you will pass a test you should
have failed.
