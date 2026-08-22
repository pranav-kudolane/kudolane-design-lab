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
                 useHashRoute, useSeo
  lib/           highlight.tsx — the small CSS/JS syntax highlighter
                 seo.ts — every URL, title and description the site publishes
                 seoDom.ts — writes a page's meta into the document head
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
| `--showcard` | Rye | victorian display only |
| `--black-letter` | Pirata One | gothic display only — never a paragraph |

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

## SEO

Every absolute URL, title and description the site publishes comes from one file,
`src/lib/seo.ts`. Three consumers read it, so they cannot drift apart:

| consumer | what it produces |
| --- | --- |
| `index.html` | the static head — canonical, robots, Open Graph, Twitter card, JSON-LD |
| `hooks/useSeo.ts` | rewrites that head as the hash route changes |
| `vite.config.ts` | generates `robots.txt` and `sitemap.xml` at build time |

`index.html` asks for values by name — `%SITE_URL%`, `%SITE_TITLE%`,
`%SITE_DESCRIPTION%`, `%COMPANY%`, `%AUTHOR%`, `%OG_IMAGE%` and friends. The
`seo()` plugin in `vite.config.ts` substitutes them in dev and in the build,
escaping for HTML in markup and for JSON inside the `ld+json` block — the two
contexts disagree about `&`, so one blanket escape would corrupt one of them.

**Before deploying, set `SITE_URL`** in `src/lib/seo.ts`. It ships as
`https://kudolane-design-lab.example.com`, a placeholder. A canonical tag naming
a host that isn't serving the page tells Google the real page is elsewhere, and
it drops this one rather than ranking it.

On GitHub Pages that means `https://pranav-kudolane.github.io/kudolane-design-lab`
plus `base: '/kudolane-design-lab/'` in `vite.config.ts`.

### Crawling

`robots.txt` is generated, not committed — a stale committed copy pointing at an
old domain is the usual way a site gets de-indexed after a move. It allows
everything, and names the search and AI crawlers explicitly (`GPTBot`,
`ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`
and the rest). `User-agent: *` already permits them; a couple are consulted only
by name, and the list documents the intent.

### What the hash router costs

`sitemap.xml` has one entry, and that is correct rather than lazy. A URL fragment
is never a separate document to a crawler, so the 29 write-ups behind
`#/design/<id>` cannot rank separately from the root URL — listing them would
submit 29 copies of the same `<loc>`.

`useSeo` still rewrites the head per route, which is what makes each one share
correctly on Slack, LinkedIn, WhatsApp and Discord, and keeps the tab title
honest. Making the write-ups individually indexable is a different job: real
History API paths, a server or host rewrite serving `index.html` for unknown
paths, and sitemap entries generated from `src/data/designs.ts`.

### The social card

`public/og-image.svg` is a 1200×630 card built from the lab's own tokens. X and
Facebook do not rasterise SVG — export it to `og-image.png`, drop it in
`public/`, and change `OG_IMAGE` in `src/lib/seo.ts`. That one edit moves the
tag, its MIME type and its dimensions together. Google does not use `og:image`
at all, so search visibility does not wait on this; link previews do.

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
