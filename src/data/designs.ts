import {
  BrutalismThumb,
  MaximalismThumb,
  MinimalismThumb,
  SwissThumb,
} from '../components/designThumbs';
import { BrutalismLanding } from '../landings/BrutalismLanding';
import { MaximalismLanding } from '../landings/MaximalismLanding';
import { MinimalismLanding } from '../landings/MinimalismLanding';
import { SwissLanding } from '../landings/SwissLanding';
import type { DesignStyle } from '../types';

/**
 * To add a style: write a thumb in components/designThumbs.tsx, a landing page
 * in landings/, scope both in styles/designs.css + styles/landings.css, then
 * append an entry here. The card grid and the detail route are generated from
 * this array — no component edits needed.
 */
export const designs: DesignStyle[] = [
  {
    id: 'minimalism',
    name: 'Minimalism',
    era: '1960s Bauhaus lineage · web since 2010',
    use: 'portfolio · saas',
    tagline: 'Nothing left to take away',
    desc: 'Whitespace as the loudest element. One typeface, one accent, a single obvious action per screen. **The safest style to get right and the hardest to make memorable.**',
    accent: '#EDEBF5',
    Thumb: MinimalismThumb,
    Landing: MinimalismLanding,
    detail: {
      intro:
        'Minimalism strips a page back until only the message and the next action remain. It is not “empty” — every removal is a decision to spend the reader’s attention somewhere else. **Whitespace is the design**, not the gap between designs.',
      origin:
        'It descends from the Bauhaus and Dieter Rams’ ten principles at Braun — *Weniger, aber besser*, less but better. The web inherited it through Apple in the 2000s and Google’s Material reset in 2014, then again with the flat-design correction against skeuomorphism.',
      principles: [
        {
          title: 'Subtract until it breaks',
          body: 'Remove one element at a time. When the page stops working, put the last thing back. Everything still standing has **earned its place**.',
        },
        {
          title: 'One focal point per screen',
          body: 'A visitor should never wonder what to look at first. Size, weight and space create a single obvious entry point — not three competing ones.',
        },
        {
          title: 'Restrict the palette',
          body: 'A neutral base, one ink, one accent. The accent appears **only on the primary action**, which is what makes it read as a button without a border.',
        },
        {
          title: 'Type carries the hierarchy',
          body: 'With decoration gone, `font-size`, `font-weight` and `letter-spacing` do all the structural work. Two or three sizes are usually enough.',
        },
        {
          title: 'Generous, uneven space',
          body: 'Space above a heading should be larger than the space below it. That asymmetry is what groups content — equal padding everywhere reads as a wireframe.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'One neutral sans (`Inter`, `Helvetica Now`, `Söhne`), two or three weights, tight tracking on large sizes.',
        },
        {
          label: 'Colour',
          value: 'Off-white or near-black base, one ink, a single accent used sparingly. **Contrast comes from value, not hue.**',
        },
        {
          label: 'Layout',
          value: 'Wide margins, narrow measure — 60 to 75 characters. The content column is often narrower than the container.',
        },
        {
          label: 'Imagery',
          value: 'Few images, but large and high quality. One weak photo undoes the whole page.',
        },
        { label: 'Motion', value: 'Short, quiet fades and 200ms transitions. Nothing bounces.' },
        {
          label: 'Risk',
          value: 'Reads as unfinished or generic when spacing and type are not precisely tuned.',
        },
      ],
      bestFor: [
        '**Portfolios and studio sites** where the work itself is the visual interest.',
        '**SaaS and B2B products** that need to look trustworthy and legible.',
        '**Long-form reading** — documentation, essays, editorial.',
        'Luxury and premium retail, where restraint signals price.',
      ],
      avoidWhen: [
        'The brand’s personality *is* the product — children’s brands, festivals, entertainment.',
        'You have a lot of content and no information architecture. Minimalism hides nothing; it exposes the mess.',
        'The client measures effort in visible elements. This style looks cheap to people who have not read it.',
      ],
      lang: 'css',
      code: `/* Minimalism runs on space and one accent, nothing else. */
:root {
  --ink: #111111;
  --paper: #FFFFFF;
  --accent: #111111;
  --measure: 62ch;
}

body {
  background: var(--paper);
  color: var(--ink);
  font: 400 17px/1.65 "Inter", system-ui, sans-serif;
}

h1 {
  font-size: clamp(40px, 7vw, 76px);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.03;
  max-width: 14ch;
}

/* space above a block > space below it — that gap is the grouping */
section { padding: 140px 0 100px; }
p { max-width: var(--measure); }

.cta {
  background: var(--accent);
  color: var(--paper);
  padding: 14px 28px;
  border-radius: 999px;
  transition: opacity .2s ease;
}
.cta:hover { opacity: .78; }`,
    },
  },
  {
    id: 'maximalism',
    name: 'Maximalism',
    era: 'Memphis 1980s · web revival since 2020',
    use: 'brand · culture',
    tagline: 'More is more, on purpose',
    desc: 'Clashing colour, layered type, stickers, textures and motion stacked until the page has a pulse. **Chaotic to look at, ruthlessly structured underneath.**',
    accent: '#FF6FB5',
    Thumb: MaximalismThumb,
    Landing: MaximalismLanding,
    detail: {
      intro:
        'Maximalism is the deliberate rejection of restraint. Colour fights colour, type overlaps image, and the page keeps moving. It works because **the noise is composed** — underneath every good maximalist layout is a grid holding the mess in place.',
      origin:
        'Its ancestors are the Memphis Group’s 1980s furniture, 1990s rave flyers and David Carson’s *Ray Gun* typography. It returned to the web around 2020 as a reaction to a decade of identical flat SaaS pages — when every brand looks the same, being loud becomes a differentiator.',
      principles: [
        {
          title: 'Layer, do not tile',
          body: 'Elements overlap and bleed past their containers. Negative margins and `z-index` are the main tools — a maximalist page has **depth**, not just density.',
        },
        {
          title: 'Anchor the chaos to a grid',
          body: 'Rotations, stickers and blobs sit on an underlying grid. Take the decoration away and you should still find a **clean, ordinary layout**.',
        },
        {
          title: 'Pick a fight between two colours',
          body: 'Two saturated hues that should not work together, plus a near-black for text. Three or more fighting hues turn into mud.',
        },
        {
          title: 'Type as an image',
          body: 'Headlines run to the edge, break across lines, and mix a display face with something ugly on purpose. Size jumps are extreme — 16px next to 120px.',
        },
        {
          title: 'Protect one calm zone',
          body: 'Body copy, forms and prices sit on a plain background. **The loud parts buy attention; the quiet parts convert it.**',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A display face for headlines against a plain sans for body. Heavy weights, extreme size contrast, occasional outline or shadow type.',
        },
        {
          label: 'Colour',
          value: 'Saturated and clashing — hot pink on lime, orange on purple. **Ink stays near-black** so text survives.',
        },
        {
          label: 'Layout',
          value: 'Overlaps, rotations, marquees, edge-to-edge blocks. Asymmetric by default.',
        },
        {
          label: 'Imagery',
          value: 'Cutouts, stickers, grain, halftone, emoji, gradients and blobs — often three at once.',
        },
        {
          label: 'Motion',
          value: 'Constant but cheap: marquees, hover wobbles, scroll parallax. Honour `prefers-reduced-motion` or it becomes hostile.',
        },
        {
          label: 'Risk',
          value: 'Accessibility. Contrast, focus states and reading order break first under this much decoration.',
        },
      ],
      bestFor: [
        '**Culture brands** — festivals, labels, streetwear, food and drink with attitude.',
        'Campaign and launch microsites that need to be screenshotted and shared.',
        'Creative studios and agencies proving they can do more than a template.',
        'Youth-facing products where blending in is the actual failure mode.',
      ],
      avoidWhen: [
        '**Finance, healthcare, legal, government** — noise reads as untrustworthy.',
        'Content-heavy sites: dashboards, documentation, anything read for more than a minute.',
        'The audience skews older, or the site must work well on weak devices and connections.',
      ],
      lang: 'css',
      code: `/* Maximalism: loud surface, disciplined structure underneath. */
.hero {
  display: grid;                 /* the grid never goes away */
  background:
    radial-gradient(60% 60% at 15% 20%, #FF3DAE 0%, transparent 60%),
    radial-gradient(50% 50% at 85% 10%, #7CFF4F 0%, transparent 55%),
    #150C2E;
}

h1 {
  font-size: clamp(56px, 16vw, 190px);
  line-height: .82;
  letter-spacing: -.05em;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #150C2E;   /* outline type */
}

/* stickers break the box on purpose */
.sticker {
  position: absolute;
  rotate: -11deg;
  background: #FFE347;
  border: 3px solid #150C2E;
  box-shadow: 6px 6px 0 #150C2E;
  z-index: 3;
}

.marquee-track {
  display: flex;
  animation: slide 18s linear infinite;
}
@keyframes slide { to { transform: translateX(-50%); } }

/* the escape hatch that keeps it usable */
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}`,
    },
  },
  {
    id: 'swiss-design',
    name: 'Swiss Design',
    era: 'Basel & Zürich, 1950s — still the baseline',
    use: 'editorial · culture',
    tagline: 'The grid is the argument',
    desc: 'The International Typographic Style: a strict modular grid, flush-left ragged-right type, mathematical spacing and one signal colour. **Every layout system you use descends from it.**',
    accent: '#46E0C8',
    Thumb: SwissThumb,
    Landing: SwissLanding,
    detail: {
      intro:
        'Swiss Design — properly the International Typographic Style — treats a page as a mathematical problem with a beautiful answer. Content sits on a **modular grid**, type is flush-left and ragged-right, and objectivity is the goal: the designer’s taste should be invisible, the information unmissable.',
      origin:
        'Formalised in Basel and Zürich in the 1950s by Josef Müller-Brockmann, Armin Hofmann and Emil Ruder. Helvetica and Univers both arrive in 1957. Müller-Brockmann’s *Grid Systems in Graphic Design* (1981) is still the reference — and CSS Grid is, more or less, that book expressed as a spec.',
      principles: [
        {
          title: 'Design the grid first',
          body: 'Columns, gutters and a baseline rhythm come before any content is placed. **Twelve columns is a convention, not a rule** — a 6- or 16-column grid is often a better fit.',
        },
        {
          title: 'Flush left, ragged right',
          body: 'Never justify. An even left edge and a natural rag keep word spacing constant, which is what makes a block of text look calm.',
        },
        {
          title: 'One family, few sizes',
          body: 'A neutral grotesque — Helvetica, Univers, Akzidenz — in three or four sizes. Hierarchy comes from **size, weight and position**, never from a second typeface.',
        },
        {
          title: 'Asymmetry over centring',
          body: 'Balance is achieved by weight across the grid, not by centring everything on an axis. Centred layouts are static; Swiss layouts have tension.',
        },
        {
          title: 'One accent, usually red',
          body: 'Black, white, and a single signal colour used for emphasis and nothing else. Colour is **information**, not decoration.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'Neutral grotesque, flush-left, tight leading on headlines, generous leading on body. `text-wrap: balance` is the modern equivalent of hand-set rags.',
        },
        {
          label: 'Colour',
          value: 'Black and white plus one accent — classically red. **Two-colour discipline** is most of the look.',
        },
        {
          label: 'Layout',
          value: 'Visible modular grid, hairline rules, large type blocks anchored to column edges. Whitespace is measured, not decorative.',
        },
        {
          label: 'Imagery',
          value: 'Objective photography, often duotone or full-bleed, always aligned to the grid.',
        },
        {
          label: 'Motion',
          value: 'Minimal and linear. Movement along grid axes, never bounce or spring.',
        },
        {
          label: 'Risk',
          value: 'Reads as cold or corporate. Without exceptional type craft it becomes a boring spreadsheet.',
        },
      ],
      bestFor: [
        '**Museums, galleries and cultural programmes** — the style was largely invented for this.',
        'Editorial, magazines and long-form journalism.',
        'Architecture, design and engineering practices.',
        '**Design systems and documentation** — the grid discipline transfers directly to components.',
      ],
      avoidWhen: [
        'The brand needs warmth or playfulness — Swiss reads as institutional.',
        'Content is irregular and user-generated, so nothing lands on the grid cleanly.',
        'You cannot afford the type craft. Half-executed Swiss looks like an unstyled document.',
      ],
      lang: 'css',
      code: `/* Swiss: define the grid, then place everything on it. */
:root {
  --cols: 12;
  --gutter: 24px;
  --red: #E1140A;
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  column-gap: var(--gutter);
  max-width: 1280px;
  margin-inline: auto;
}

/* content spans columns — it never floats freely */
.headline { grid-column: 1 / span 7; }
.meta     { grid-column: 9 / span 4; }

h1 {
  font-family: "Helvetica Now", "Inter", sans-serif;
  font-size: clamp(44px, 8vw, 108px);
  font-weight: 700;
  line-height: .92;
  letter-spacing: -.04em;
  text-align: left;          /* never justify */
  text-wrap: balance;
}

.rule { border-top: 1px solid #111; }        /* hairlines divide */
.accent { color: var(--red); }               /* red = signal only */`,
    },
  },
  {
    id: 'brutalism',
    name: 'Brutalism',
    era: 'Béton brut 1950s · web since 2014',
    use: 'agency · dev tools',
    tagline: 'Show the concrete',
    desc: 'Raw defaults, thick black borders, hard offset shadows and type that shouts. **Honest about being a webpage** — no gradients pretending to be glass.',
    accent: '#FFB84D',
    Thumb: BrutalismThumb,
    Landing: BrutalismLanding,
    detail: {
      intro:
        'Brutalism takes the position that a website should look like a website. System fonts, visible borders, unsoftened corners, links that look like links. **Nothing is disguised** — the structure of the document is the aesthetic. Its friendlier descendant, neubrutalism, keeps the thick outlines and hard shadows but adds bright pastel fills.',
      origin:
        'Named for *béton brut* — raw concrete — the post-war architecture of Le Corbusier and the Barbican. The web version began around 2014 as a reaction to identical Bootstrap pages, spread through Pascal Deville’s brutalistwebsites.com, and softened into the neubrutalist style Gumroad popularised in 2022.',
      principles: [
        {
          title: 'Honest materials',
          body: 'Borders are borders, buttons look pressable, links are underlined. **No skeuomorphism, no faux depth** — flat fills and a hard offset shadow instead of a blur.',
        },
        {
          title: 'Hard edges and thick lines',
          body: 'Two- to four-pixel black borders, `border-radius: 0` or a very small radius, and `box-shadow: 6px 6px 0 #000` with **zero blur**.',
        },
        {
          title: 'Type at full volume',
          body: 'Oversized, tightly-leaded, often uppercase and monospaced. Headlines are allowed to break awkwardly — that is part of the voice.',
        },
        {
          title: 'High contrast, few colours',
          body: 'Black on white, or black on one loud flat colour. No gradients. **Contrast ratios are usually excellent**, which is the style’s quiet advantage.',
        },
        {
          title: 'Deliberate friction, not real friction',
          body: 'It can look uncomfortable while remaining perfectly usable. Keep focus rings, hit targets and reading order intact — brutalist styling is **not** an excuse for a broken interface.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'System stacks, monospace or a heavy grotesque. Uppercase headlines, tight `line-height`, very large sizes.',
        },
        {
          label: 'Colour',
          value: 'Black, white and one flat loud accent — yellow, electric blue, acid green. Neubrutalism adds pastel fills.',
        },
        {
          label: 'Layout',
          value: 'Boxes with visible borders, asymmetric blocks, tickers and marquees. Structure is always readable.',
        },
        {
          label: 'Imagery',
          value: 'Unretouched photos, screenshots, ASCII, dithering. Polish is avoided on purpose.',
        },
        {
          label: 'Motion',
          value: 'Snappy and mechanical — a button that shifts 3px into its own shadow on hover, and little else.',
        },
        {
          label: 'Risk',
          value: 'Reads as amateur to conservative audiences. The style must look obviously intentional or it just looks unfinished.',
        },
      ],
      bestFor: [
        '**Developer tools, APIs and technical products** — the audience reads it as confidence.',
        'Agencies and studios that want to look sharp rather than polished.',
        'Indie products, launches and anything competing against bland incumbents.',
        'Editorial and portfolio sites with a strong voice.',
      ],
      avoidWhen: [
        'Trust is the primary conversion factor — banking, insurance, healthcare intake.',
        'The audience is broad or non-technical; the visual codes do not read the same way.',
        'The site is content-dense — heavy borders and uppercase text tire the eye quickly.',
      ],
      lang: 'css',
      code: `/* Brutalism: flat fills, hard shadows, zero blur. */
:root {
  --ink: #0B0B0B;
  --paper: #F5F1E8;
  --acid: #FFE100;
  --line: 3px;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: "JetBrains Mono", ui-monospace, monospace;
}

h1 {
  font-size: clamp(44px, 11vw, 128px);
  line-height: .88;
  letter-spacing: -.03em;
  text-transform: uppercase;
}

.card,
.btn {
  border: var(--line) solid var(--ink);
  border-radius: 0;
  box-shadow: 7px 7px 0 var(--ink);   /* offset, no blur */
  background: var(--paper);
}

/* the button physically moves into its own shadow */
.btn {
  background: var(--acid);
  transition: transform .08s linear, box-shadow .08s linear;
}
.btn:hover {
  transform: translate(4px, 4px);
  box-shadow: 3px 3px 0 var(--ink);
}
.btn:active {
  transform: translate(7px, 7px);
  box-shadow: 0 0 0 var(--ink);
}

/* keep the interface honest as well as loud */
a { text-decoration: underline; }
:focus-visible { outline: var(--line) solid #0057FF; outline-offset: 3px; }`,
    },
  },
];

/** Lookup used by the detail and full-screen routes. */
export function findDesign(id: string) {
  return designs.find((d) => d.id === id);
}
