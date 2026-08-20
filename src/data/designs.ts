import {
  BentoThumb,
  BrutalismThumb,
  ClaymorphismThumb,
  GlassmorphismThumb,
  MaximalismThumb,
  MinimalismThumb,
  NeoBrutalismThumb,
  NeoClassicalThumb,
  NeumorphismThumb,
  ScrapbookThumb,
  SurrealismThumb,
  SwissThumb,
} from '../components/designThumbs';
import { BentoLanding } from '../landings/BentoLanding';
import { BrutalismLanding } from '../landings/BrutalismLanding';
import { ClaymorphismLanding } from '../landings/ClaymorphismLanding';
import { GlassmorphismLanding } from '../landings/GlassmorphismLanding';
import { MaximalismLanding } from '../landings/MaximalismLanding';
import { MinimalismLanding } from '../landings/MinimalismLanding';
import { NeoBrutalismLanding } from '../landings/NeoBrutalismLanding';
import { NeoClassicalLanding } from '../landings/NeoClassicalLanding';
import { NeumorphismLanding } from '../landings/NeumorphismLanding';
import { ScrapbookLanding } from '../landings/ScrapbookLanding';
import { SurrealismLanding } from '../landings/SurrealismLanding';
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
  {
    id: 'surrealism',
    name: 'Surrealism',
    era: 'Breton’s manifesto 1924 · web since 2020',
    use: 'brand · campaign',
    tagline: 'Dream logic, rendered',
    desc: 'Impossible scale, floating objects and two ordinary things that should never share a frame. **A picture the visitor has to finish in their own head.**',
    accent: '#C9A7FF',
    Thumb: SurrealismThumb,
    Landing: SurrealismLanding,
    detail: {
      intro:
        'Surrealism puts recognisable things in impossible relationships — a door standing in the sky, a bottle the size of a building, a horizon that will not stay put. The effect is not confusion but *attention*: the brain stops skimming and starts working. **It buys you the one thing a landing page cannot otherwise get: a second look.**',
      origin:
        'André Breton’s *Surrealist Manifesto* (1924) and the painters who followed it — Dalí, Magritte, Carrington, Tanning. Magritte matters most to designers: his pictures are painted plainly and *composed* impossibly. The web revival arrived around 2020, when WebGL, 3D asset libraries and generative imagery made dream scenes cheap to produce for the first time.',
      principles: [
        {
          title: 'Juxtapose two ordinary things',
          body: 'The surrealism is in the *pairing*, not the objects. A rock and a cloud are boring; a rock **floating like** a cloud is not. Keep both halves recognisable.',
        },
        {
          title: 'Break one law, not all of them',
          body: 'Suspend gravity, or scale, or perspective — one. Break three and the image reads as noise, and the viewer stops looking for meaning in it.',
        },
        {
          title: 'Scale is the cheapest trick that works',
          body: 'An everyday object at the wrong size is instantly unsettling and costs nothing but a `transform`. It is the highest-return move in the style.',
        },
        {
          title: 'Keep the craft immaculate',
          body: 'Dream content, waking execution. Soft shadows land correctly, edges are clean, the type is set properly. **Sloppy surrealism just reads as a mistake.**',
        },
        {
          title: 'Anchor the reader with one real thing',
          body: 'Somewhere on the page there must be a plain sentence and an ordinary button. The strangeness sells the brand; the anchor sells the product.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A calm counterweight to the imagery — an elegant serif or a plain grotesque. **The type stays sane so the picture can be strange.**',
        },
        {
          label: 'Colour',
          value: 'Dusk and dawn gradients — peach into lilac into deep indigo. Light that comes from nowhere identifiable.',
        },
        {
          label: 'Layout',
          value: 'Objects float free of the grid and overlap section boundaries. The text still sits on a grid underneath.',
        },
        {
          label: 'Imagery',
          value: 'Collage, cutouts, 3D renders, arches, doors, orbs, clouds, eyes. Hard-edged objects against soft backgrounds.',
        },
        {
          label: 'Motion',
          value: 'Slow drift and parallax — 15 to 30 second loops. Fast motion breaks the spell instantly.',
        },
        {
          label: 'Risk',
          value: 'Mood over meaning, plus weight: 3D scenes and large renders are the easiest way to ruin your `LCP`.',
        },
      ],
      bestFor: [
        '**Fragrance, fashion and beauty** — categories that sell a feeling rather than a spec sheet.',
        'Campaign and launch microsites that need to be remembered for a week.',
        'Music, film and festival brands.',
        '**AI and creative tools**, where “imagination” is literally the product.',
      ],
      avoidWhen: [
        'The page is transactional — checkout, booking, onboarding, account settings.',
        'The visitor arrives under time pressure or in a support context.',
        'You cannot afford the asset weight. A dream scene that takes four seconds to load is just a slow page.',
        'The imagery has nothing to do with the brand. Decoration pretending to be an idea is the most common failure here.',
      ],
      lang: 'css',
      code: `/* Surrealism: ordinary objects, impossible relationships. */
.sky {
  background: linear-gradient(180deg,
    #FAD3AC 0%, #E9A9C0 26%, #B583C9 52%, #6C4E9E 76%, #241645 100%);
}

/* a door, standing in the sky, opening onto nothing */
.door {
  position: absolute;
  border-radius: 50% 50% 2px 2px;      /* an arch */
  background: linear-gradient(180deg, #2B1B52, #120A26);
  box-shadow:
    inset 0 0 0 4px rgba(255,226,182,.65),   /* lit from inside */
    0 40px 90px rgba(30,15,60,.4);           /* but casting down */
  rotate: -7deg;
  animation: drift 30s ease-in-out infinite;
}

/* the whole style is one slow loop — never a fast one */
@keyframes drift { 50% { transform: translateY(-28px); } }

@media (prefers-reduced-motion: reduce) {
  .door { animation: none; }
}`,
    },
  },
  {
    id: 'neo-brutalism',
    name: 'Neo-Brutalism',
    era: 'Gumroad’s 2022 redesign onward',
    use: 'saas · fintech',
    tagline: 'Brutalism that smiles',
    desc: 'Thick black outlines, hard offset shadows and candy-flat fills. **Brutalism’s structure with none of its hostility** — the default look for indie software since 2022.',
    accent: '#8DF2C0',
    Thumb: NeoBrutalismThumb,
    Landing: NeoBrutalismLanding,
    detail: {
      intro:
        'Neo-brutalism keeps the honest structure of **Brutalism** — visible borders, unblurred shadows, no faux depth — and swaps the hostility for warmth. Corners get a small radius, fills get bright and pastel, and the whole thing reads as **confident rather than confrontational**. It is the friendliest way to look like you build things yourself.',
      origin:
        'Brutalism’s descendant. Gumroad’s 2022 redesign made the recipe famous, Figma community files and Tailwind template packs spread it in months, and by 2024 it was the house style of indie SaaS, creator tools and hackathon projects alike.',
      principles: [
        {
          title: 'Outline everything',
          body: 'Every surface gets the same **2–4px near-black border**. Consistency of the outline is what holds a loud palette together.',
        },
        {
          title: 'Shadows never blur',
          body: '`box-shadow: 6px 6px 0 #000`. A blur radius above zero drops you straight back into ordinary material design.',
        },
        {
          title: 'One bright fill per surface',
          body: 'Flat pastel blocks — mint, lilac, pink, butter. Never a gradient, and never two fills fighting inside the same card.',
        },
        {
          title: 'Round the corners just enough',
          body: '8–16px. **This single value is the difference between neo-brutalism and brutalism** — zero reads as aggressive, 32px reads as a generic startup.',
        },
        {
          title: 'Let buttons move into their shadow',
          body: 'On press, translate the element by the shadow offset and shrink the shadow to match. It is the only motion the style needs.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A heavy geometric or grotesque sans — `Satoshi`, `Space Grotesk`, `Inter` at 800. Tight tracking, sentence case, not shouty.',
        },
        {
          label: 'Colour',
          value: 'Cream or off-white base, near-black ink, and three or four **flat pastels** used as whole-surface fills.',
        },
        {
          label: 'Layout',
          value: 'Cards, badges, pills and tilted stickers. Slight rotations (1–3°) on mock-ups keep it from looking rigid.',
        },
        {
          label: 'Imagery',
          value: 'Product mock-ups drawn in the same border-and-shadow language, plus emoji and simple icons.',
        },
        {
          label: 'Motion',
          value: 'Short and mechanical — 80–120ms press states. No easing curves with bounce.',
        },
        {
          label: 'Risk',
          value: '**Template fatigue.** It is so widely adopted that it can read as “made from a starter kit” rather than designed.',
        },
      ],
      bestFor: [
        '**Indie SaaS and creator tools** — the audience recognises the codes and trusts them.',
        'Fintech and money apps aimed at freelancers or young users.',
        'Developer products, docs sites and API landing pages.',
        'Anything that has to look built by humans rather than by a committee.',
      ],
      avoidWhen: [
        'Enterprise or luxury positioning — the palette actively undercuts a high price.',
        'Data-dense interfaces: heavy borders on every element create enormous visual noise at scale.',
        '**Differentiation is the goal.** Half your competitors are already using it.',
      ],
      lang: 'css',
      code: `/* Neo-brutalism is four tokens and one press animation. */
:root {
  --ink: #14110C;
  --paper: #FFF3D6;
  --mint: #8DF2C0;
  --line: 3px;
  --lift: 7px;          /* the shadow offset, reused everywhere */
  --round: 14px;        /* brutalism is 0 — this value is the whole difference */
}

.card,
.btn {
  border: var(--line) solid var(--ink);
  border-radius: var(--round);
  box-shadow: var(--lift) var(--lift) 0 var(--ink);   /* zero blur */
  background: var(--mint);
}

/* the element physically moves into its own shadow */
.btn {
  transition: transform .1s linear, box-shadow .1s linear;
}
.btn:hover {
  transform: translate(3px, 3px);
  box-shadow: 4px 4px 0 var(--ink);
}
.btn:active {
  transform: translate(var(--lift), var(--lift));
  box-shadow: 0 0 0 var(--ink);
}

/* tilt the mock-ups, never the text */
.mock { rotate: 1.6deg; }`,
    },
  },
  {
    id: 'neo-classical',
    name: 'Neo-Classical',
    era: '18th-century revival · web for law & luxury',
    use: 'law · luxury',
    tagline: 'Symmetry, serif and gold',
    desc: 'A centred axis, high-contrast serifs, hairline gold rules and classical proportion. **It signals permanence** — which is precisely what old institutions and old money sell.',
    accent: '#C9A24B',
    Thumb: NeoClassicalThumb,
    Landing: NeoClassicalLanding,
    detail: {
      intro:
        'Neo-classicism borrows the order of Greek and Roman building — symmetry, proportion, restrained ornament — and applies it to a page. Everything balances on a centre line, the type is a serif with real thick-thin contrast, and decoration appears only where the structure invites it. **The message is continuity: we were here before you and we will be here after.**',
      origin:
        'The 1750s European revival of Greco-Roman form, driven by the excavation of Pompeii and by Winckelmann’s writing, and built by Robert Adam and John Soane. Print luxury carried it into the present — fashion houses, university crests, law firm letterheads — and the web inherited it from those, not from the buildings.',
      principles: [
        {
          title: 'Commit to the centre line',
          body: 'Wordmark, headline, rule, call to action — all on one axis. **Half-centred layouts are the most common failure**; a single flush-left block undoes the whole effect.',
        },
        {
          title: 'Use a serif with genuine contrast',
          body: 'A transitional or Didone face — `Playfair Display`, `Cormorant`, `Bodoni`. A low-contrast slab reads as rustic, not classical.',
        },
        {
          title: 'Ornament sparingly and symmetrically',
          body: 'One fleuron above a heading, a `double` rule between sections. Ornament that appears once has authority; ornament that repeats becomes wallpaper.',
        },
        {
          title: 'Proportion over pixels',
          body: 'Wide outer margins, a narrow measure, and headings sized in clean ratios. The classical orders were **ratio systems** — treat the page the same way.',
        },
        {
          title: 'Letterspace the small type',
          body: 'Small caps at `0.2em` tracking for eyebrows, navigation and captions. That one detail carries most of the period feeling.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'High-contrast serif for display, small caps with wide tracking for labels. **Generous leading** — 1.7 or more on body copy.',
        },
        {
          label: 'Colour',
          value: 'Parchment and stone neutrals, near-black ink, and a single muted gold. Never a bright metallic gradient.',
        },
        {
          label: 'Layout',
          value: 'Symmetrical and centred, wide margins, hairline and `double` rules dividing sections into clear registers.',
        },
        {
          label: 'Imagery',
          value: 'Architecture, columns, sculpture, engraving, marble. Photography desaturated and warm.',
        },
        { label: 'Motion', value: 'Almost none. Slow opacity fades, no movement that draws attention to itself.' },
        {
          label: 'Risk',
          value: 'Reads as stuffy, dated, or — with too much ornament — like a wedding invitation.',
        },
      ],
      bestFor: [
        '**Law firms, private banks and family offices**, where age is the selling point.',
        'Universities, libraries, museums and foundations.',
        'Jewellery, perfume and heritage luxury.',
        'Publishers and anything positioned as canon rather than as news.',
      ],
      avoidWhen: [
        'The brand is young, fast, or technical — the codes read as pretence.',
        'The interface is used often. Centred symmetry is beautiful to arrive at and tiring to work in.',
        'Your audience needs to feel invited rather than impressed.',
      ],
      lang: 'css',
      code: `/* Neo-classical: one axis, one serif, one metal. */
:root {
  --ink: #1C1913;
  --paper: #FBF7EE;
  --gold: #B08D4F;
}

body {
  background: var(--paper);
  color: var(--ink);
  text-align: center;                /* the axis, declared once */
  font-family: "Cormorant Garamond", Georgia, serif;
  line-height: 1.72;                 /* classical leading is generous */
}

h1 {
  font-size: clamp(34px, 6.4vw, 90px);
  font-weight: 400;                  /* never bold — contrast comes from the face */
  line-height: 1.08;
}

/* small caps with wide tracking carry the period */
.eyebrow,
nav a {
  font-size: 13px;
  letter-spacing: .22em;
  text-transform: uppercase;
}

/* the classical divider is a real CSS border-style */
.rule { border-top: 3px double var(--gold); }

.cta {
  border: 1px solid var(--gold);
  padding: 16px 40px;
  transition: background .22s ease, color .22s ease;
}
.cta:hover { background: var(--gold); color: var(--paper); }`,
    },
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    era: 'Dribbble, late 2019 · “soft UI”',
    use: 'ui · devices',
    tagline: 'Extruded from the background',
    desc: 'Shapes pushed out of — or pressed into — a single flat colour, using one light shadow and one dark one. **Beautiful, and famously hard to make accessible.**',
    accent: '#8E9AFF',
    Thumb: NeumorphismThumb,
    Landing: NeumorphismLanding,
    detail: {
      intro:
        'Neumorphism makes every control look moulded out of the page itself. There are no borders and no colour changes between an element and its background — only a light shadow on one side and a dark shadow on the other. **The entire style rests on two shadows**, which is also why it fails so often: remove the shadows and there is no interface left.',
      origin:
        'Michal Malewicz named it in December 2019, after a Dribbble concept for a banking app spread widely — a soft reaction to a decade of flat design. It peaked within about a year, then stalled: designers ran the shapes through contrast checkers and discovered that most of them were unusable for low-vision users.',
      principles: [
        {
          title: 'One background colour, everywhere',
          body: 'Elements must be the **same colour as the surface** behind them. The base has to be a mid-tone — pure white and pure black cannot cast both a light and a dark shadow.',
        },
        {
          title: 'Two shadows, always',
          body: 'Light from the top-left, dark from the bottom-right, consistent across every element on the page. **One inconsistent light source destroys the illusion instantly.**',
        },
        {
          title: 'Raised and pressed are your only states',
          body: 'Outer shadows read as raised, `inset` shadows as pressed. That pair is the whole interaction vocabulary — use it for toggles, active tabs and pressed buttons.',
        },
        {
          title: 'Never let the shadow carry the meaning alone',
          body: 'Add a label, a colour, or an icon to every state. A raised card and a pressed card are **indistinguishable** at low vision, on a cheap panel, or in sunlight.',
        },
        {
          title: 'Check the contrast on everything',
          body: 'Text needs 4.5:1 against the base; interactive edges need 3:1. In practice this means a **hybrid** — neumorphic surfaces with a real accent colour and real borders on the controls that matter.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A geometric or rounded sans in medium to bold weights, in an ink dark enough to pass contrast — not the pale grey the style is usually shown with.',
        },
        {
          label: 'Colour',
          value: 'One desaturated mid-tone base (`#E4E9F2` and its neighbours), a lighter tint, a darker shade, and a single saturated accent reserved for state.',
        },
        {
          label: 'Layout',
          value: 'Large radii, generous padding, few elements per screen. Density is the enemy — the shadows need room to be read.',
        },
        {
          label: 'Imagery',
          value: 'Almost none. Icons and simple glyphs, ideally drawn in the same extruded language.',
        },
        {
          label: 'Motion',
          value: 'Soft press transitions — swap the outer shadow for the `inset` one over 150–200ms.',
        },
        {
          label: 'Risk',
          value: '**Accessibility, first and last.** This is the only style on this page that regularly fails `WCAG` by construction rather than by carelessness.',
        },
      ],
      bestFor: [
        '**Hardware and device product pages** — thermostats, speakers, wearables — where the UI should feel physical.',
        'Control-style interfaces: players, calculators, mixers, smart-home panels.',
        'A **hybrid** system: neumorphic surfaces and cards, conventional accessible controls on top.',
        'Portfolio and showcase pieces where craft is the point.',
      ],
      avoidWhen: [
        '**The product has forms, or any accessibility obligation.** Input fields with no visible border are the style’s worst failure.',
        'The interface is text-heavy or data-dense.',
        'You need both light and dark themes — the effect has to be rebuilt from scratch for each and rarely survives the second.',
        'Users are on low-quality displays or outdoors, where subtle shadow differences simply vanish.',
      ],
      lang: 'css',
      code: `/* Neumorphism: one surface colour, two shadows, two states. */
:root {
  --bg: #E4E9F2;          /* must be mid-tone, never #fff or #000 */
  --hi: #FFFFFF;          /* light source: top-left */
  --lo: #C2C8D4;          /* shadow: bottom-right */
  --ink: #333A4D;         /* dark enough to actually pass contrast */
  --accent: #5B6CFF;      /* state is carried by colour, not shadow alone */

  --up: 9px 9px 18px var(--lo), -9px -9px 18px var(--hi);
  --in: inset 7px 7px 14px var(--lo), inset -7px -7px 14px var(--hi);
}

body { background: var(--bg); color: var(--ink); }

.card,
.btn {
  background: var(--bg);        /* same colour as the page — that is the point */
  border-radius: 24px;
  box-shadow: var(--up);
}

.btn { transition: box-shadow .18s ease; }
.btn:active,
.toggle[aria-pressed="true"] { box-shadow: var(--in); }

/* the accessibility floor this style keeps failing:
   never let the shadow be the only signal, and keep a real focus ring */
.toggle[aria-pressed="true"] { color: var(--accent); }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 4px; }`,
    },
  },
  {
    id: 'scrapbook',
    name: 'Scrapbook',
    era: 'Zine culture · digital revival since 2022',
    use: 'blog · lifestyle',
    tagline: 'Made by hand, on purpose',
    desc: 'Torn paper, masking tape, polaroids pinned at the wrong angle and handwriting in the margins. **The one style that looks like a person made it** rather than a design system.',
    accent: '#C0472F',
    Thumb: ScrapbookThumb,
    Landing: ScrapbookLanding,
    detail: {
      intro:
        'Scrapbook design imports the vocabulary of a physical notebook — tape, torn edges, instant photos, pins, ticket stubs, biro annotations — and lays it over an ordinary web page. Everything sits at a slight angle and nothing quite lines up. **The imperfection is the message:** a human assembled this, and they cared enough to stick it down themselves.',
      origin:
        'Its ancestors are punk zines, mail art, and the mid-2000s craft blog. The current revival arrived around 2022 as a counter-move to template culture and, later, to AI-generated polish — when everything can be generated perfectly, evidence of a hand becomes the scarce thing.',
      principles: [
        {
          title: 'Rotate everything, but only slightly',
          body: 'One to five degrees. **Anything past about eight reads as broken**, not hand-placed. Vary the direction so no two neighbours tilt the same way.',
        },
        {
          title: 'Every element gets a fixing',
          body: 'Tape, a pin, a paperclip, a torn edge. If a card floats with a neat drop shadow, it stops being a scrapbook and becomes a website with textures on it.',
        },
        {
          title: 'Two voices of type',
          body: 'A plain serif or sans for the content, **a handwriting face for the annotations** — captions, asides, jokes. Never set body copy in the handwriting.',
        },
        {
          title: 'Paper, not gradient',
          body: 'A warm off-white with grain, or a faint ruled or graph pattern. The background should feel like a surface things were placed *on*.',
        },
        {
          title: 'Keep the underlying layout boring',
          body: 'A plain grid holds it all up. **Strip the tape and rotations away and you should be left with a perfectly ordinary page** — that is what keeps it readable.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A workhorse serif for reading plus a handwriting face (`Caveat`, `Kalam`, `Patrick Hand`) for the marginalia. Mono for stamps and labels.',
        },
        {
          label: 'Colour',
          value: 'Kraft, cream and masking-tape yellow, with one saturated ink — biro blue or a felt-tip red — for annotation.',
        },
        {
          label: 'Layout',
          value: 'Collage over a hidden grid. Overlaps, torn dividers, elements that break out of their column.',
        },
        {
          label: 'Imagery',
          value: 'Polaroid frames, cut-outs, scans, ticket stubs, receipts, maps. Photography looks snapped, not directed.',
        },
        {
          label: 'Motion',
          value: 'Objects straighten and lift slightly on hover — as if you picked them up. Nothing slides.',
        },
        {
          label: 'Risk',
          value: 'Texture files are heavy, and the charm curdles into clutter fast. It also **dates quickly** compared with the neutral styles.',
        },
      ],
      bestFor: [
        '**Personal sites, blogs and newsletters** — the style is a signature.',
        'Clubs, communities and anything with a membership rather than customers.',
        'Food, travel, craft and independent retail.',
        'Event and campaign pages with a warm, informal voice.',
      ],
      avoidWhen: [
        'The brand needs to look institutional, precise or expensive.',
        'The site is a tool people use daily — the visual noise becomes exhausting.',
        'You have long-form content. Handwriting and paper textures wear the eye out over a thousand words.',
      ],
      lang: 'css',
      code: `/* Scrapbook: an ordinary grid, then tape everything down crooked. */
:root {
  --paper: #EFE3CC;
  --card: #FCFAF3;
  --tape: rgba(240,222,150,.72);
  --biro: #C0472F;
}

body {
  background: var(--paper);
  /* graph paper, not a gradient — this should read as a surface */
  background-image:
    linear-gradient(rgba(120,95,60,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120,95,60,.06) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* a polaroid: white border, thick chin, hand-placed angle */
.photo {
  background: var(--card);
  padding: 12px 12px 0;
  rotate: -4deg;
  box-shadow: 0 14px 30px rgba(80,60,35,.26);
  transition: transform .25s ease;
}
.photo:hover { transform: rotate(0deg) scale(1.02); }   /* you picked it up */

/* a strip of masking tape holding it to the page */
.photo::before {
  content: "";
  position: absolute;
  inset: -14px auto auto 50%;
  translate: -50% 0;
  width: 96px; height: 28px;
  background: var(--tape);
  rotate: -6deg;
}

/* a torn edge between sections, cut with a mask */
.torn {
  height: 26px;
  background: var(--card);
  mask-image: repeating-linear-gradient(90deg, #000 0 14px, transparent 14px 18px);
}

.note { font-family: "Caveat", cursive; color: var(--biro); rotate: -1deg; }`,
    },
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    era: 'iOS 7 (2013) · named on the web in 2020',
    use: 'apps · dashboards',
    tagline: 'Frosted panels, real depth',
    desc: 'Translucent panels blurring whatever sits behind them, edged with a bright hairline. **Its one rule: the background must be busy** — frost over a flat colour is just a grey box.',
    accent: '#3AC7FF',
    Thumb: GlassmorphismThumb,
    Landing: GlassmorphismLanding,
    detail: {
      intro:
        'Glassmorphism builds hierarchy out of depth. A panel is translucent, blurs what passes behind it, and catches a highlight along its top edge — so it reads as a physical sheet floating above the page. Section 01 of this lab carries the two-line recipe; **this is what happens when the recipe becomes the entire page**, and the constraints get much stricter.',
      origin:
        'Apple shipped the idea at scale with iOS 7 in 2013 and hardened it in macOS Big Sur and Windows Acrylic. Michal Malewicz gave it the name “glassmorphism” in 2020, the same season he named neumorphism — but this one survived, because unlike its sibling it keeps real contrast between the panel and its content.',
      principles: [
        {
          title: 'Earn the blur with a busy backdrop',
          body: 'Mesh gradients, photography, drifting blobs — something with variation. **Glass over a flat background is a grey rectangle** and every other rule here is wasted.',
        },
        {
          title: 'Blur hard, tint lightly',
          body: '`backdrop-filter: blur(16px–40px)` with a fill around 8–20% white. Too little blur and text behind bleeds through; too much tint and you have lost the transparency entirely.',
        },
        {
          title: 'A hairline edge on every pane',
          body: 'A 1px border at roughly 30% white, plus an `inset 0 1px 0` highlight. That top-edge catch is what makes the surface read as glass rather than as fog.',
        },
        {
          title: 'One or two layers of depth, no more',
          body: 'Glass on glass on glass turns to soup. Establish a background, a panel layer, and at most one floating element above it.',
        },
        {
          title: 'Contrast is measured against the worst case',
          body: 'The backdrop moves, so your text sits on the **lightest** patch it can ever cross. Check white text against the palest part of the gradient, not the average.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A clean sans at medium-to-bold weights. Thin type dies on a moving backdrop — keep body copy at 500 and above.',
        },
        {
          label: 'Colour',
          value: 'Saturated backdrop, near-white panels and text. **Every panel colour is an alpha value**, never a solid hex.',
        },
        {
          label: 'Layout',
          value: 'Floating cards, pill navigation, generous radii (20–40px) and real gaps so the backdrop shows between panes.',
        },
        {
          label: 'Imagery',
          value: 'Mesh gradients, aurora blobs and grain. Photography works if it is soft and low-detail.',
        },
        {
          label: 'Motion',
          value: 'Slow backdrop drift under static panes. The illusion comes from the background moving while the glass stays put.',
        },
        {
          label: 'Risk',
          value: '**Performance.** `backdrop-filter` is expensive — a dozen blurred panes on a scrolling page will drop frames on mid-range hardware.',
        },
      ],
      bestFor: [
        '**App and product landing pages**, especially anything with a dashboard or a player.',
        'Music, sleep, wellness and other “ambient” categories.',
        'Crypto, fintech and AI products that want a premium, futuristic read.',
        'Overlay UI — navigation bars, modals, command palettes — even inside otherwise plain designs.',
      ],
      avoidWhen: [
        'Content is dense or text-heavy. Reading a long article through frosted glass is genuinely tiring.',
        '**Performance budgets are tight**, or a meaningful share of users are on low-end devices.',
        'The brand has no colourful imagery to sit behind the panes, and no appetite for inventing one.',
      ],
      lang: 'css',
      code: `/* Glassmorphism: the backdrop is not decoration, it is the dependency. */
.page {
  background: #160B36;                 /* base */
  isolation: isolate;
}
.blob {                                /* the busy layer the glass frosts */
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  mix-blend-mode: screen;
  animation: float 28s ease-in-out infinite;
}

.pane {
  background: linear-gradient(135deg,
    rgba(255,255,255,.22),
    rgba(255,255,255,.06));            /* alpha, never a solid */
  border: 1px solid rgba(255,255,255,.34);
  border-radius: 28px;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow:
    0 30px 70px rgba(8,4,40,.4),
    inset 0 1px 0 rgba(255,255,255,.5); /* the top-edge catch */
}

/* the backdrop moves, the glass does not — that is the whole illusion */
@keyframes float { 50% { transform: translate(40px,-50px) scale(1.12); } }

@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }`,
    },
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    era: '2021 · 3D render culture',
    use: 'kids · consumer apps',
    tagline: 'Soft, puffy, squeezable',
    desc: 'Fat rounded shapes in pastel that look pressed out of modelling clay — two inner shadows for the pinch, one long outer shadow for the drop. **Friendly to the point of being disarming.**',
    accent: '#FF9E7A',
    Thumb: ClaymorphismThumb,
    Landing: ClaymorphismLanding,
    detail: {
      intro:
        'Claymorphism is what happens when **Neumorphism** grows up and gets a personality. It keeps the soft, moulded feel but adds real colour, real contrast and a proper drop shadow — so shapes look like they are *sitting on* the page rather than dissolving into it. The result is warm, tactile and completely unintimidating. Section 01 carries the snippet; **this is the language built out to a whole page.**',
      origin:
        'It emerged around 2021 out of 3D render culture — Blender and Cinema 4D clay-material illustrations flooding Dribbble — combined with the pastel Big Sur icon palette. Michal Malewicz named this one too. Where neumorphism failed on contrast, claymorphism deliberately fixed it: colour returns, and the outer shadow separates the shape from the surface.',
      principles: [
        {
          title: 'Two inners and one outer',
          body: 'A light `inset` from the top-left, a coloured `inset` from the bottom-right, and a **large, soft, offset drop shadow**. The drop is the difference between clay and neumorphism.',
        },
        {
          title: 'Radius bigger than you think',
          body: '24–40px on cards, fully round on buttons and icons. Clay has no sharp corners because you cannot pinch one into it.',
        },
        {
          title: 'Pastel fills with real ink',
          body: 'Soft backgrounds, but text in a **saturated dark** — a deep violet or brown, not grey. This is where the style earns the accessibility neumorphism lost.',
        },
        {
          title: 'Shapes should look squeezed',
          body: 'Blobby border-radii (`42% 58% 55% 45%`), slight rotations, uneven sizes. Perfect circles and rectangles read as plastic, not clay.',
        },
        {
          title: 'Press, do not glow',
          body: 'On interaction the element moves a few pixels and the drop shadow shortens — as if pushed into the surface. No glows, no colour flashes.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A rounded or soft geometric sans in heavy weights — `Nunito`, `Poppins`, `Bricolage Grotesque`. Generous letter sizes; nothing thin.',
        },
        {
          label: 'Colour',
          value: 'Pastel lilac, peach, mint and butter over a soft gradient ground, with **one dark ink** carrying all the text.',
        },
        {
          label: 'Layout',
          value: 'Big soft cards with lots of padding, few per row. Space between elements so each one keeps its shadow.',
        },
        {
          label: 'Imagery',
          value: '3D clay renders, blobs, chunky icons, emoji. Flat line icons look wrong against the modelled surfaces.',
        },
        { label: 'Motion', value: 'Springy but short — a lift on hover, a press on active. 150–250ms.' },
        {
          label: 'Risk',
          value: 'Reads as childish. It can undercut a serious product instantly, and 3D render assets are heavy.',
        },
      ],
      bestFor: [
        '**Products for children and families** — learning, savings, health, chores.',
        'Consumer apps that need to feel approachable: habit trackers, wellness, budgeting.',
        'Onboarding, empty states and error screens inside otherwise plain interfaces.',
        'Brands with a mascot, or any product competing on friendliness.',
      ],
      avoidWhen: [
        'The audience is professional or the product is expensive — clay reads as toy-like.',
        'Information density matters. The padding and radii the style needs cost enormous space.',
        'Finance, legal, medical or security contexts where playfulness undermines trust.',
      ],
      lang: 'css',
      code: `/* Claymorphism: two inner shadows for the pinch, one outer for the drop. */
:root {
  --ink: #3F2E63;       /* saturated, not grey — this is the a11y fix */
  --lilac: #B49BFF;
  --peach: #FF9E7A;
}

.clay {
  border-radius: 32px;
  background: var(--peach);
  box-shadow:
    inset 8px 8px 16px rgba(255,255,255,.70),    /* light pinch, top-left */
    inset -8px -10px 18px rgba(90,60,150,.24),   /* coloured pinch, bottom-right */
    0 22px 38px -11px rgba(90,60,150,.42);       /* the drop that lifts it off */
}

/* squeezed, not stamped — asymmetric radii read as handmade */
.blob { border-radius: 42% 58% 55% 45% / 50% 44% 56% 50%; }

.clay-btn {
  transition: transform .18s ease;
}
.clay-btn:hover  { transform: translateY(-5px); }
.clay-btn:active { transform: translateY(2px); }   /* pressed into the surface */`,
    },
  },
  {
    id: 'bento-grid',
    name: 'Bento Grid',
    era: 'Apple keynote slides, 2022 onward',
    use: 'saas · features',
    tagline: 'One idea per tile',
    desc: 'A modular grid of tiles at different sizes, each holding exactly one idea. **The dominant way to show a feature set since 2023** — and the easiest layout to fill with nothing.',
    accent: '#9A9AAA',
    Thumb: BentoThumb,
    Landing: BentoLanding,
    detail: {
      intro:
        'A bento grid replaces the old three-column feature row with tiles of deliberately unequal size. The size *is* the hierarchy: a big tile means an important idea, a small one means a supporting fact. It scans in any order, which makes it perfect for people who never read a page top to bottom. Section 01 has the grid snippet; **the hard part was never the CSS** — it is having enough real things to put in the boxes.',
      origin:
        'Named after the Japanese bento box, where a single tray is divided into compartments of different sizes. Apple made it the default for keynote and product-page feature summaries from around 2022, and by 2023 it had spread across every SaaS marketing site, portfolio and dashboard on the web.',
      principles: [
        {
          title: 'One idea per tile, no exceptions',
          body: 'A tile has a single claim and, ideally, a single visual proving it. **Two ideas in one tile means you needed two tiles** — or the second idea was not worth keeping.',
        },
        {
          title: 'Size means importance',
          body: 'Spans encode hierarchy. If every tile is the same size you have built a card grid and thrown away the only advantage bento has.',
        },
        {
          title: 'Fill tiles with evidence, not decoration',
          body: 'A mini interface, a real number, an actual screenshot. The style fails when tiles are padded out with stock icons and a line of adjectives.',
        },
        {
          title: 'Keep the seams consistent',
          body: 'One gap value, one radius, one border treatment across every tile. **The irregularity is in the spans and nowhere else** — that is what stops it looking like a broken layout.',
        },
        {
          title: 'Reflow, do not shrink',
          body: 'On narrow screens tiles become full width in reading order. Scaling a four-column grid down produces unreadable postage stamps.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A neutral sans, small mono kickers on each tile, and headings sized down inside tiles so they never compete with the page title.',
        },
        {
          label: 'Colour',
          value: 'A near-black or off-white ground with tiles one step off it, separated by a hairline border. Colour appears **inside** tiles, not as tile fills.',
        },
        {
          label: 'Layout',
          value: 'Four to twelve columns, explicit `grid-column` / `grid-row` spans, one consistent gap. Usually one hero tile at 2×2.',
        },
        {
          label: 'Imagery',
          value: 'Cropped UI, charts, product shots — each bleeding to its tile edge. Every tile is its own small composition.',
        },
        {
          label: 'Motion',
          value: 'Restrained: a border or background lift on hover. Some tiles animate their contents on scroll into view.',
        },
        {
          label: 'Risk',
          value: '**Empty calories.** Bento makes a thin feature set look structured, and reviewers notice. It is also now extremely common.',
        },
      ],
      bestFor: [
        '**SaaS feature sections** — the format it was popularised for.',
        'Product and hardware pages summarising specs and capabilities.',
        'Portfolios and case-study indexes with work of varying weight.',
        'Dashboards and reports, where the tiles are genuinely different data.',
      ],
      avoidWhen: [
        'You have fewer than about five real things to say. A bento with padding in half the tiles is worse than a plain list.',
        'The content is sequential — a process, a tutorial, an argument. Bento has no reading order.',
        '**Differentiation matters.** By 2026 this reads as the house style of the entire software industry.',
      ],
      lang: 'css',
      code: `/* Bento: fixed columns, tiles claiming spans, one consistent seam. */
.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;                 /* one gap value everywhere */
}

.tile {
  background: #17171F;
  border: 1px solid rgba(255,255,255,.09);
  border-radius: 28px;       /* one radius everywhere */
  padding: 30px;
  display: flex;
  flex-direction: column;
}

/* the spans are the hierarchy — the only irregularity allowed */
.tile.hero { grid-column: span 2; grid-row: span 2; }
.tile.wide { grid-column: span 2; }
.tile.tall { grid-row: span 2; }

/* reflow to full width; never scale a 4-column grid down */
@media (max-width: 720px) {
  .bento { grid-template-columns: 1fr; }
  .tile, .tile.hero, .tile.wide, .tile.tall { grid-column: span 1; grid-row: span 1; }
}`,
    },
  },
];

/** Lookup used by the detail and full-screen routes. */
export function findDesign(id: string) {
  return designs.find((d) => d.id === id);
}
