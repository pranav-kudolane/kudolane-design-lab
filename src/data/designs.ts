import {
  BentoThumb,
  BohemianThumb,
  BrutalismThumb,
  ClaymorphismThumb,
  DarkModeThumb,
  EditorialThumb,
  EtherealThumb,
  GlassmorphismThumb,
  LuxuryTypeThumb,
  MaximalismThumb,
  MinimalismThumb,
  NeoBrutalismThumb,
  NeoClassicalThumb,
  NeumorphismThumb,
  PixelArtThumb,
  ScrapbookThumb,
  SketchThumb,
  SurrealismThumb,
  SwissThumb,
  Y2kThumb,
} from '../components/designThumbs';
import { BentoLanding } from '../landings/BentoLanding';
import { BohemianLanding } from '../landings/BohemianLanding';
import { BrutalismLanding } from '../landings/BrutalismLanding';
import { ClaymorphismLanding } from '../landings/ClaymorphismLanding';
import { DarkModeLanding } from '../landings/DarkModeLanding';
import { EditorialLanding } from '../landings/EditorialLanding';
import { EtherealLanding } from '../landings/EtherealLanding';
import { GlassmorphismLanding } from '../landings/GlassmorphismLanding';
import { LuxuryTypeLanding } from '../landings/LuxuryTypeLanding';
import { MaximalismLanding } from '../landings/MaximalismLanding';
import { MinimalismLanding } from '../landings/MinimalismLanding';
import { NeoBrutalismLanding } from '../landings/NeoBrutalismLanding';
import { NeoClassicalLanding } from '../landings/NeoClassicalLanding';
import { NeumorphismLanding } from '../landings/NeumorphismLanding';
import { PixelArtLanding } from '../landings/PixelArtLanding';
import { ScrapbookLanding } from '../landings/ScrapbookLanding';
import { SketchLanding } from '../landings/SketchLanding';
import { SurrealismLanding } from '../landings/SurrealismLanding';
import { SwissLanding } from '../landings/SwissLanding';
import { Y2kLanding } from '../landings/Y2kLanding';
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
  {
    id: 'pixel-art',
    name: 'Pixel Art',
    era: '8-bit hardware, 1983 · a choice since 1995',
    use: 'games · indie',
    tagline: 'Every pixel placed by hand',
    desc: 'Chunky sprites, a locked palette, hard edges and stepped animation. Once a hardware limit, now a signature — **it says a person drew this, one square at a time.**',
    accent: '#7CF56B',
    Thumb: PixelArtThumb,
    Landing: PixelArtLanding,
    detail: {
      intro:
        'Pixel art works on a grid where the pixel is the smallest unit you are allowed to use. No anti-aliasing, no gradients, no half-measures — a diagonal is a staircase and you decide where each step falls. On the web the discipline is mostly about **refusing the browser’s help**: turning off smoothing, snapping every measurement to your pixel size, and stepping animation instead of easing it.',
      origin:
        'It began as a constraint. The NES gave you 25 colours on screen and 8×8 tiles, and artists learned to imply everything else. Once hardware stopped caring, the look survived as a deliberate choice — Cave Story, Celeste, Stardew Valley — and spread outward into music, fashion and profile-picture culture.',
      principles: [
        {
          title: 'Decide your pixel, then never break it',
          body: 'Pick a scale — 3×, 4× — and make **every** size, offset and border a multiple of it. One 5px value in a 4px world is instantly visible and looks like a bug.',
        },
        {
          title: 'Turn the smoothing off',
          body: '`image-rendering: pixelated` on every raster, and `shape-rendering: crispEdges` on SVG. Without them the browser blurs your art back into mush at any non-integer scale.',
        },
        {
          title: 'Lock the palette',
          body: 'Eight to sixteen colours for the whole site. Shading is a **second colour**, never opacity — a 50% overlay produces values that are not in your palette.',
        },
        {
          title: 'Step the motion',
          body: '`animation-timing-function: steps(2)`, not `ease`. Smooth interpolation between two sprite positions is the single fastest way to break the illusion.',
        },
        {
          title: 'Do not set body copy in a pixel font',
          body: 'Pixel faces are for headings, buttons and labels. **Paragraphs get a real typeface** — usually a mono — or nobody reads them.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A bitmap face (`Press Start 2P`, `Silkscreen`, `Pixelify`) for display only, at multiples of its native size. Mono or a plain sans for body.',
        },
        {
          label: 'Colour',
          value: 'A small locked palette, usually dark ground with two or three bright accents. **No gradients and no alpha shading.**',
        },
        {
          label: 'Layout',
          value: 'Chunky stepped borders (four offset `box-shadow`s, no blur), tile-based spacing, hard-edged panels that read as UI windows.',
        },
        {
          label: 'Imagery',
          value: 'Sprites — drawn as tiny SVGs or PNGs and scaled up by integers. Dithering instead of gradients; scanlines for CRT flavour.',
        },
        {
          label: 'Motion',
          value: 'Two- or three-frame stepped loops. Bobs, blinks and flickers, never a tween.',
        },
        {
          label: 'Risk',
          value: 'Legibility and scale. Bitmap type fails on odd zoom levels, and the whole style locks you into a narrow set of associations.',
        },
      ],
      bestFor: [
        '**Indie games** — the audience reads the style as a promise about the product.',
        'Developer tools, terminals and anything with a deliberately retro-technical voice.',
        'Music, merch and event brands aimed at people who grew up on consoles.',
        '404 pages, loading states and easter eggs inside otherwise plain sites.',
      ],
      avoidWhen: [
        'The product must feel current or premium — pixel art reads as nostalgia, always.',
        'The site is text-heavy or has real forms to fill in.',
        'Accessibility matters and you cannot escape the bitmap face for interface text.',
      ],
      lang: 'css',
      code: `/* Pixel art: pick a pixel, snap everything to it, refuse smoothing. */
:root {
  --px: 4px;                 /* the unit — every value is a multiple */
  --deep: #0B0B14;
  --green: #7CF56B;
}

.sprite,
img { image-rendering: pixelated; }        /* never interpolate */
svg { shape-rendering: crispEdges; }

/* a chunky stepped frame: four offsets, zero blur, notched corners */
.panel {
  box-shadow:
    0 calc(var(--px) * -3) 0 var(--deep),
    0 calc(var(--px) *  3) 0 var(--deep),
    calc(var(--px) * -3) 0 0 var(--deep),
    calc(var(--px) *  3) 0 0 var(--deep);
}

/* stepped, never eased — interpolation kills the illusion */
.idle { animation: bob 1.6s steps(2) infinite; }
@keyframes bob { 50% { transform: translateY(calc(var(--px) * -4)); } }

/* shading is a second palette colour, never opacity */
.shadow { background: #2E9E45; }           /* not rgba(0,0,0,.4) */`,
    },
  },
  {
    id: 'conceptual-sketch',
    name: 'Conceptual Sketch',
    era: 'Studio culture · Balsamiq 2008, Excalidraw 2020',
    use: 'agency · process',
    tagline: 'Thinking, left visible',
    desc: 'Wobbly hand-drawn boxes, pencil annotations, dashed leader lines and arrows in the margin. **Deliberately unfinished** — it invites an opinion instead of asking for approval.',
    accent: '#E0623C',
    Thumb: SketchThumb,
    Landing: SketchLanding,
    detail: {
      intro:
        'Sketch design makes the working-out visible. Boxes wobble, lines are drawn rather than ruled, and arrows point at things with handwriting attached. The point is psychological: **a polished mockup asks “do you approve?”, a sketch asks “what do you think?”** — and people answer the second question far more honestly.',
      origin:
        'It comes out of studio and consulting practice — whiteboards, napkins, and the wireframe. Balsamiq made the deliberately-crude wireframe a product in 2008 on exactly this insight, and Excalidraw took the aesthetic to the whole industry from 2020. Where scrapbook borrows from a notebook of *memories*, this borrows from a notebook of *arguments*.',
      principles: [
        {
          title: 'Draw the box, do not rule it',
          body: 'The classic trick is a plain solid border with wildly uneven corner radii — `border-radius: 230px 16px 210px 18px / 18px 200px 16px 230px`. **One value, and a rectangle stops looking machine-made.**',
        },
        {
          title: 'Annotate in the margin',
          body: 'Handwritten notes with arrows pointing at the thing they discuss. Marginalia is what separates a sketch from a low-fidelity mockup — it carries the *reasoning*, not the layout.',
        },
        {
          title: 'Grey out what is not the point',
          body: 'Placeholder text becomes hatched blocks and dashed boxes. Detail signals importance, so anything rendered in full **claims to be decided**.',
        },
        {
          title: 'One ink for the pencil, one for the pen',
          body: 'A blue-grey graphite for structure, a single bright mark colour — red or orange — for annotation, corrections and emphasis. Never more.',
        },
        {
          title: 'Vary the wobble',
          body: 'Reuse the same corner radii on every box and the eye spots the repeat instantly. Keep two or three variants and alternate them across siblings.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A plain sans for content plus a handwriting face (`Caveat`, `Architects Daughter`) for annotation only. Mono for labels and numbering.',
        },
        {
          label: 'Colour',
          value: 'Off-white paper, graphite ink, one mark colour. Faint grid or ruled lines in the background.',
        },
        {
          label: 'Layout',
          value: 'Wireframe boxes, dashed placeholders, hatched fills, arrows connecting steps. Flow diagrams instead of feature rows.',
        },
        {
          label: 'Imagery',
          value: 'Almost none — diagrams, wireframes and scribbles stand in for it. Real photography breaks the fiction immediately.',
        },
        {
          label: 'Motion',
          value: 'Small rotations and lifts on hover, as if a card were being nudged across a table.',
        },
        {
          label: 'Risk',
          value: 'It can read as genuinely unfinished, and clients occasionally ask when the real design is arriving.',
        },
      ],
      bestFor: [
        '**Agencies, studios and consultancies** selling a way of working rather than a deliverable.',
        'Courses, workshops and anything about process or craft.',
        'Documentation, changelogs and roadmaps — where “provisional” is honest.',
        'Internal tools and early-stage products that want feedback rather than applause.',
      ],
      avoidWhen: [
        'The audience is buying polish — luxury, finance, anything where “rough” means “cheap”.',
        'The product is finished and confident. Sketch styling on a mature product reads as affectation.',
        'You need photography or real product shots to sell — they cannot coexist with the fiction.',
      ],
      lang: 'css',
      code: `/* Sketch: one border-radius value is the entire hand-drawn effect. */
:root {
  --ink: #2E3A4E;         /* graphite */
  --pencil: #9AA7BA;      /* structure, not decided */
  --mark: #E0623C;        /* the pen — annotation and correction only */

  --rough:  230px 16px 210px 18px / 18px 200px 16px 230px;
  --rough2: 16px 220px 18px 200px / 190px 18px 220px 16px;
}

.box {
  border: 3px solid var(--ink);
  border-radius: var(--rough);      /* alternate with --rough2 on siblings */
  background: #fff;
}

/* placeholders are hatched, because they are not decisions yet */
.placeholder {
  border: 2px dashed var(--pencil);
  border-radius: var(--rough2);
  background: repeating-linear-gradient(135deg,
    rgba(154,167,186,.16) 0 6px, transparent 6px 18px);
}

/* the annotation carries the reasoning — always in the pen colour */
.note {
  font-family: "Caveat", cursive;
  color: var(--mark);
  rotate: -3deg;
}

/* an underline that was drawn, not ruled */
.marked { border-bottom: 4px solid var(--mark); border-radius: 0 0 60% 40%; }`,
    },
  },
  {
    id: 'luxury-typography',
    name: 'Luxury Typography',
    era: 'Fashion print · the web since the 2010s',
    use: 'fashion · beauty',
    tagline: 'The type is the image',
    desc: 'One enormous high-contrast serif, letterspaced capitals at the size of a whisper, and more empty space than a client will be comfortable with. **Restraint priced as confidence.**',
    accent: '#C9BFAC',
    Thumb: LuxuryTypeThumb,
    Landing: LuxuryTypeLanding,
    detail: {
      intro:
        'Luxury typography sells by refusing to sell. There is no gradient, no shadow, no ornament and often no photograph above the fold — just a word set very large in a serif with dramatic thick-thin contrast, and a label set very small in letterspaced capitals. **The gap between those two sizes is the entire design**, and it reads as expensive because it looks like the brand does not need your attention.',
      origin:
        'It comes from fashion print — the Didone faces of the 18th century as reinterpreted by Vogue, Harper’s Bazaar and the house books of Saint Laurent, Celine and Jil Sander. The web version arrived once browsers could set large type well, and it is now the default register for fashion, beauty, jewellery and spirits.',
      principles: [
        {
          title: 'Two sizes, very far apart',
          body: 'A display size in the hundreds of pixels and a label size around 10–12px. **Nothing in between.** Mid-sized type is what makes a page look commercial.',
        },
        {
          title: 'A serif with real contrast',
          body: 'Didone or high-contrast transitional — `Playfair Display`, `Bodoni Moda`, `Canela`. The thin strokes are the luxury; a low-contrast serif reads as institutional instead.',
        },
        {
          title: 'Letterspace the small, tighten the large',
          body: 'Labels and navigation at `0.2–0.3em` tracking, uppercase. Display type at negative tracking. The two treatments **belong to different worlds** on purpose.',
        },
        {
          title: 'Asymmetry over symmetry',
          body: 'Centring reads ceremonial — that is Neo-Classical territory. Luxury sets type flush left, then pushes one line to the right edge, and lets the imbalance sit there.',
        },
        {
          title: 'Let the page be mostly empty',
          body: 'Margins of 8–12% and huge vertical gaps. **Whitespace is the most expensive thing on the page**, and every element you add spends some of it.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'One high-contrast serif for display, one neutral sans for the small print. Italics used as a *voice*, not for emphasis.',
        },
        {
          label: 'Colour',
          value: 'Bone, cream, ivory or true black — two values, no third. **Colour, if any, comes only from photography.**',
        },
        {
          label: 'Layout',
          value: 'Flush-left with deliberate imbalance, enormous margins, hairline rules dividing registers. Editorial plates rather than cards.',
        },
        {
          label: 'Imagery',
          value: 'Few images, large, desaturated, always full-bleed or precisely aligned to the type. No rounded corners.',
        },
        {
          label: 'Motion',
          value: 'Slow fades and gentle reveals — 600ms and up. Anything fast reads as a sale.',
        },
        {
          label: 'Risk',
          value: 'It communicates very little. If a visitor needs to know a price, a size or a delivery date, this style actively obstructs them.',
        },
      ],
      bestFor: [
        '**Fashion, beauty, jewellery and fragrance** — the register the whole category shares.',
        'Hotels, restaurants and interiors at the top of the market.',
        'Photographers, galleries and creative directors.',
        'Brand and campaign pages where information lives one click deeper.',
      ],
      avoidWhen: [
        'The site has to convert directly — e-commerce with real SKUs needs mid-sized, scannable type.',
        'The audience is broad or in a hurry.',
        'Your typeface budget is a free grotesque. **This style is the typeface**; without a good serif there is nothing left of it.',
      ],
      lang: 'css',
      code: `/* Luxury: two type sizes, very far apart, and a great deal of nothing. */
:root {
  --ink: #14100C;
  --paper: #F3EFE7;      /* never pure white */
  --serif: "Playfair Display", "Bodoni Moda", Georgia, serif;
}

/* the display size — the only image on the page */
h1 {
  font-family: var(--serif);
  font-weight: 400;                  /* never bold; the face has the contrast */
  font-size: clamp(48px, 16vw, 230px);
  line-height: .82;
  letter-spacing: -.03em;            /* tighten the large */
}
h1 .second { font-style: italic; justify-self: end; }   /* deliberate imbalance */

/* the label size — nothing exists between these two */
.label, nav a {
  font-size: 11px;
  letter-spacing: .28em;             /* letterspace the small */
  text-transform: uppercase;
}

section { padding-block: 10vw; }     /* the whitespace is the product */
body { background: var(--paper); color: var(--ink); }

a { transition: opacity .4s ease; }  /* slow — fast reads as a sale */`,
    },
  },
  {
    id: 'editorial',
    name: 'Editorial Design',
    era: 'Magazine craft · web longform since 2012',
    use: 'magazine · longform',
    tagline: 'Built for reading',
    desc: 'Drop caps, real columns, standfirsts, bylines, pull quotes and captions that carry their own weight. **The only style on this page designed around a reader, not a visitor.**',
    accent: '#C0392B',
    Thumb: EditorialThumb,
    Landing: EditorialLanding,
    detail: {
      intro:
        'Editorial design is the set of conventions magazines worked out for holding attention across three thousand words. Every element has a job and a name — kicker, headline, standfirst, byline, drop cap, pull quote, caption, folio — and the hierarchy between them is what lets a reader enter anywhere and still know where they are. **Its sample page here is an article, not a landing page**, because that is the only honest way to show it.',
      origin:
        'Centuries of print practice, compressed by the mid-century magazine — Harper’s Bazaar under Brodovitch, Twen under Fleckhaus, The Face under Brody. The web spent fifteen years ignoring all of it, then rediscovered it in 2012 with the New York Times’ *Snow Fall* and the longform wave that followed.',
      principles: [
        {
          title: 'Respect the measure',
          body: '**60 to 75 characters a line.** Wider and the eye loses its place returning; narrower and the rag becomes distracting. This single number does more for readability than any other decision.',
        },
        {
          title: 'Use the full furniture',
          body: 'Kicker, headline, standfirst, byline, drop cap, pull quote, caption. Each answers a different question, and a page that skips them makes the reader do the sorting.',
        },
        {
          title: 'Pull quotes interrupt, they do not repeat',
          body: 'A pull quote is an **entry point for someone skimming** — set it large, break it across the column, and pick a line that earns the interruption.',
        },
        {
          title: 'Captions are read more than body copy',
          body: 'After the headline, the caption is the most-read text on a page. Write it as a sentence with information in it, never as a label.',
        },
        {
          title: 'Two families, clearly divided',
          body: 'A serif for reading and a sans for apparatus — decks, bylines, captions, categories. **The division tells the reader which text is the article** and which is scaffolding.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'High-contrast serif for headlines, a readable serif or sans for body at 18–21px, and a small sans for apparatus. Real `text-wrap: balance` on headings.',
        },
        {
          label: 'Colour',
          value: 'Paper white or cream, near-black ink, one accent for kickers, drop caps and rules. Colour is **navigation**, not decoration.',
        },
        {
          label: 'Layout',
          value: 'Asymmetric grid, rules dividing registers, images breaking the column, generous vertical rhythm. `columns` for genuinely multi-column passages.',
        },
        {
          label: 'Imagery',
          value: 'Documentary photography, always captioned. Sizes vary deliberately — full-bleed, half-column, inline — to pace the read.',
        },
        {
          label: 'Motion',
          value: 'Almost none in the article body. Progress indicators and image reveals at most.',
        },
        {
          label: 'Risk',
          value: 'Multi-column text is **hostile on a phone** — a column that requires vertical scrolling to reach its own second column is unreadable, so it must collapse to one.',
        },
      ],
      bestFor: [
        '**Magazines, newspapers and longform journalism** — the native use.',
        'Company blogs, essays, research write-ups and annual reports.',
        'Documentation and knowledge bases that people actually read through.',
        'Case studies, where the structure carries a narrative rather than a feature list.',
      ],
      avoidWhen: [
        'The content is short. Editorial furniture on a 200-word page looks like a costume.',
        'The page is an interface — dashboards and apps need scanning, not reading.',
        'Nobody is writing real copy. **The style is a frame for good writing** and exposes bad writing mercilessly.',
      ],
      lang: 'css',
      code: `/* Editorial: measure first, then the furniture. */
:root {
  --ink: #16130F;
  --paper: #FFFDF9;
  --accent: #C0392B;
  --serif: "Playfair Display", Georgia, serif;
}

.article p {
  max-width: 34em;          /* ~66 characters — the whole ballgame */
  font-size: 19px;
  line-height: 1.62;
  margin-bottom: 1.6em;
}

h1 {
  font-family: var(--serif);
  font-size: clamp(30px, 5.4vw, 76px);
  line-height: 1.04;
  text-wrap: balance;       /* what a subeditor used to do by hand */
  max-width: 20ch;
}

/* the drop cap: float it, and kill the line-height so it sits on the baseline */
.article p:first-of-type::first-letter {
  float: left;
  font-family: var(--serif);
  font-size: 4.2em;
  line-height: .82;
  padding: .06em .1em 0 0;
  color: var(--accent);
}

/* an entry point for the skimmer — it interrupts, it does not repeat */
.pull {
  border-block: 2px solid var(--ink);
  padding-block: 1.4em;
  font-family: var(--serif);
  font-size: clamp(18px, 2.2vw, 30px);
  break-inside: avoid-column;
}

/* real columns — and they MUST collapse, or the phone read is broken */
.body { columns: 2; column-gap: 3.5rem; }
@media (max-width: 720px) { .body { columns: 1; } }`,
    },
  },
  {
    id: 'y2k',
    name: 'Y2K Aesthetic',
    era: 'c. 1998–2004 · revived from 2020',
    use: 'fashion · music',
    tagline: 'Chrome, bubbles and optimism',
    desc: 'Liquid chrome type, holographic gradients, translucent plastic and star sparkles. **The last time the future looked like a good idea** — and the whole look is built from gradients.',
    accent: '#5BE7FF',
    Thumb: Y2kThumb,
    Landing: Y2kLanding,
    detail: {
      intro:
        'Y2K is the visual language of the millennium boom: chrome lettering, iridescent gradients, bubble buttons and hardware you could see through. It reads as **techno-optimism** — the belief, briefly universal, that everything was about to get shinier. Where maximalism piles up density, Y2K piles up *shine*, and almost all of it is gradients doing work.',
      origin:
        'The window between the iMac G3 in 1998 and roughly 2004 — Apple’s Aqua interface, Windows XP’s Luna theme, chrome logos on flip phones, frosted plastic on everything. It came back around 2020 through fashion, TikTok and album art, carried by people mostly too young to have used any of it the first time.',
      principles: [
        {
          title: 'Chrome is one hard gradient stop',
          body: 'A light-to-dark ramp with an **abrupt flip at 50%** — white, pale blue, then a sudden dark blue, then white again. That single hard edge is what the eye reads as polished metal.',
        },
        {
          title: 'Everything is translucent plastic',
          body: 'Semi-transparent fills with a bright `inset` highlight along the top and a darker one at the bottom. The iMac rule: you should feel you could see the components inside.',
        },
        {
          title: 'Bubble, not rectangle',
          body: 'Full pill radii on buttons, blobby asymmetric radii on shapes. Nothing in this period had a sharp corner if it could avoid one.',
        },
        {
          title: 'Add sparkle, literally',
          body: 'Star glyphs, lens flares, glows. **Placed at the edges of the composition**, never over text, and always twinkling slightly.',
        },
        {
          title: 'Keep the web-1.0 furniture',
          body: 'Marquees, visitor counters, “ENTER SITE”, best-viewed-at notices. The jokes are load-bearing — they are what stops it reading as generic gradient design.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'Heavy, wide grotesques with chrome or gradient fills and a dark outline (`-webkit-text-stroke`). Squared techno faces for accents.',
        },
        {
          label: 'Colour',
          value: 'Electric blue, silver, hot pink, lime and lilac over deep navy. **Iridescent rather than flat** — nearly every fill is a gradient.',
        },
        {
          label: 'Layout',
          value: 'Centre-weighted, glossy panels, marquee strips, floating product shots with lens flare.',
        },
        {
          label: 'Imagery',
          value: 'Translucent hardware, bubbles, chrome objects, star fields, low-res webcam and early-digital photography.',
        },
        {
          label: 'Motion',
          value: 'Twinkles, slow hovers, marquees. Cheerful and slightly gaudy — restraint is off-brand.',
        },
        {
          label: 'Risk',
          value: 'Contrast. White text on iridescent gradients fails constantly, and the style dates a brand to a very specific joke.',
        },
      ],
      bestFor: [
        '**Fashion, streetwear and music** aimed at people who find the era funny and beautiful at once.',
        'Product launches and drops that want to feel like an event.',
        'Nightlife, festivals and club nights.',
        'Anniversary, retrospective and archive microsites.',
      ],
      avoidWhen: [
        'The brand needs to be taken literally seriously — Y2K always carries a wink.',
        'Accessibility is non-negotiable. Gradient-on-gradient text is very hard to get past `4.5:1`.',
        'The audience has no relationship with the period, in which case it just reads as busy.',
      ],
      lang: 'css',
      code: `/* Y2K: chrome, gel and glass are all just gradients. */
:root {
  /* the hard flip at 50% is what reads as polished metal */
  --chrome: linear-gradient(180deg,
    #FFFFFF 0%, #C6DAEE 40%, #5F86B4 50%, #F0F7FF 62%, #FFFFFF 100%);
}

h1 {
  background: var(--chrome);
  -webkit-background-clip: text;
          background-clip: text;
  color: transparent;
  -webkit-text-stroke: 2px #0B1E3D;      /* the outline sells it */
  filter: drop-shadow(0 4px 5px rgba(4,20,50,.55));
}

/* the aqua/gel button: an inset white highlight does all the work */
.btn {
  border-radius: 999px;
  background: linear-gradient(180deg, #8AF0FF 0%, #2C9BD6 52%, #1B6FA8 100%);
  box-shadow:
    inset 0  8px 12px rgba(255,255,255,.85),
    inset 0 -5px  8px rgba(4,40,80,.5),
    0 14px 24px rgba(4,20,50,.5);
}

/* translucent plastic — you should feel you could see inside it */
.device {
  background: linear-gradient(155deg,
    rgba(255,255,255,.92), rgba(150,215,255,.6) 42%, rgba(60,130,220,.8));
  box-shadow:
    inset 0  20px 30px rgba(255,255,255,.9),
    inset 0 -20px 30px rgba(10,50,110,.5);
}`,
    },
  },
  {
    id: 'ethereal',
    name: 'Ethereal',
    era: 'Wellness & beauty · web since ~2019',
    use: 'wellness · beauty',
    tagline: 'Light, with nothing solid in it',
    desc: 'Pale gradients, blurred orbs of colour, weightless serif type and a great deal of air. **Nothing on the page has an edge** — the whole effect is atmosphere rather than objects.',
    accent: '#CDC6FF',
    Thumb: EtherealThumb,
    Landing: EtherealLanding,
    detail: {
      intro:
        'Ethereal design builds a mood out of light. Colour arrives as soft blurred fields rather than filled shapes, type is set light and large with generous leading, and there are almost no borders, cards or hard edges anywhere. It is close kin to **Glassmorphism** but the opposite instinct: glass frames content in defined panes, and ethereal dissolves every frame it can.',
      origin:
        'It grew out of wellness, skincare and meditation branding in the late 2010s, when those categories moved away from clinical white-and-blue toward something closer to a colour field painting. Technically it was unlocked by cheap large-radius `filter: blur()` and mesh gradients, and it has been the default register for calm ever since.',
      principles: [
        {
          title: 'Blur past the edge',
          body: 'Every coloured shape gets a blur radius **larger than its own softness needs** — 80–200px. If you can see where a shape ends, it is not ethereal yet.',
        },
        {
          title: 'Keep values close together',
          body: 'Pale on pale. The palette should sit within a narrow lightness band so nothing snaps forward — with **one exception for text**, which still has to pass contrast.',
        },
        {
          title: 'Let type float',
          body: 'A light-weight serif at large sizes with `line-height` around 1.6–1.8. Airy leading is what stops large type feeling heavy.',
        },
        {
          title: 'Space is the composition',
          body: 'Half the page should be empty. Sections are separated by distance rather than by rules, cards or background changes.',
        },
        {
          title: 'Move slowly or not at all',
          body: '30–45 second breathing loops on the colour fields. Anything you can actually perceive moving breaks the calm instantly.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A light serif for display, a quiet sans for body, letterspaced small caps for labels. **Nothing bold anywhere.**',
        },
        {
          label: 'Colour',
          value: 'Blush, lilac, pale aqua and cream in a narrow lightness range. Ink is a soft near-black violet, never true black.',
        },
        {
          label: 'Layout',
          value: 'Centred, wide margins, arch-topped image plates, no cards and no visible dividers.',
        },
        {
          label: 'Imagery',
          value: 'Overexposed, hazy, soft-focus. Skin, water, silk, light through fabric — texture rather than subject.',
        },
        {
          label: 'Motion',
          value: 'Very slow scale-and-drift on the blurred fields; long 500–800ms transitions on everything else.',
        },
        {
          label: 'Risk',
          value: '**Contrast, and vagueness.** Pale-on-pale text fails accessibility easily, and the style can look lovely while saying nothing.',
        },
      ],
      bestFor: [
        '**Beauty, skincare and fragrance** — the register the category now expects.',
        'Wellness, meditation, sleep, therapy and retreat brands.',
        'Fertility, maternity and health services that need to feel gentle rather than clinical.',
        'Artists, photographers and musicians working in ambient territory.',
      ],
      avoidWhen: [
        'The product is technical, urgent, or bought under pressure.',
        'You have a lot of information to deliver — the style has almost no capacity for density.',
        'Contrast cannot be guaranteed. **Text over a moving gradient is the hardest accessibility problem here.**',
      ],
      lang: 'css',
      code: `/* Ethereal: colour as light, never as a filled shape. */
:root {
  --ink: #4A4159;         /* soft near-black — never #000 */
  --deep: #332C42;
}

body {
  background: linear-gradient(168deg, #FDF6F8 0%, #F6F1FB 38%, #F0F6FB 68%);
  color: var(--ink);
  line-height: 1.8;       /* airy leading is half the effect */
}

/* the blur is larger than the shape needs — that is the point */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  opacity: .7;
  animation: breathe 34s ease-in-out infinite;
}

h1 {
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 400;                    /* nothing bold anywhere */
  font-size: clamp(34px, 7.4vw, 102px);
  line-height: 1.06;
}

/* slow enough that you never catch it moving */
@keyframes breathe { 50% { transform: translate(30px,-40px) scale(1.14); } }

@media (prefers-reduced-motion: reduce) { .orb { animation: none; } }`,
    },
  },
  {
    id: 'bohemian',
    name: 'Bohemian',
    era: '1970s revival · web since ~2018',
    use: 'hospitality · craft',
    tagline: 'Earth, arches and handwork',
    desc: 'Terracotta and sage, arch-topped shapes, hand-drawn line art and warm organic curves. **A palette and a shape language** rather than a layout system.',
    accent: '#C4703F',
    Thumb: BohemianThumb,
    Landing: BohemianLanding,
    detail: {
      intro:
        'Bohemian design borrows from craft and landscape: clay, linen, plaster, wood, dried grass. Its signature is the **arch** — image plates, cards and buttons all take a rounded top — combined with an earth palette and drawn line art in place of photography. Where Scrapbook is a collage technique, this is a material palette; the layout underneath is usually quite conventional.',
      origin:
        'A direct 1970s revival, filtered through the 2010s interiors world — Moroccan riads, Californian desert houses, ceramics studios and the whole Airbnb-and-Instagram aesthetic of about 2018 onward. Its immediate ancestors are print and interiors rather than any web movement.',
      principles: [
        {
          title: 'Arch everything',
          body: 'Image plates get a semicircular top: `border-radius: 50% 50% 12px 12px / 34% 34% 12px 12px`. **Repeat that shape at three scales** and the page is instantly coherent.',
        },
        {
          title: 'Pull the palette from materials',
          body: 'Terracotta, ochre, sage, clay, oat. Every colour should be nameable as a *thing* — if it sounds like a hex code, it is the wrong one.',
        },
        {
          title: 'Draw, do not photograph',
          body: 'Line-art suns, leaves and hands carry the personality. A single drawn element does more for the style than three photographs.',
        },
        {
          title: 'Texture over gradient',
          body: 'Weave, grain, plaster and linen — built from repeating gradients or noise. **Smooth gradients read as tech**, which is the wrong century.',
        },
        {
          title: 'Warm the type',
          body: 'A softer grotesque or a warm serif, generous line-height, and italic for the phrase that carries the feeling. Nothing geometric or cold.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A warm grotesque or humanist serif, medium weights, `line-height` around 1.7. Letterspaced uppercase for small labels.',
        },
        {
          label: 'Colour',
          value: 'Oat and cream ground; terracotta, clay, sage, ochre and olive. **No pure white and no pure black.**',
        },
        {
          label: 'Layout',
          value: 'Arch-topped plates, generous gutters, asymmetric two-column blocks. Conventional grid under an organic surface.',
        },
        {
          label: 'Imagery',
          value: 'Line drawings, ceramics, textiles, plants, sunlight on plaster. Photography is warm and slightly overexposed.',
        },
        {
          label: 'Motion',
          value: 'Slow and few — a rotating sun, a gentle lift. The style implies unhurriedness.',
        },
        {
          label: 'Risk',
          value: 'It is now heavily associated with one narrow slice of hospitality, and reads as generic if the palette is the only idea.',
        },
      ],
      bestFor: [
        '**Hospitality** — retreats, guesthouses, restaurants and wine bars.',
        'Ceramics, textiles, and makers selling handwork.',
        'Yoga, herbalism, and small wellness brands that want warmth rather than clinical calm.',
        'Food producers, markets and slow-travel brands.',
      ],
      avoidWhen: [
        'The product is technical or financial — earth tones actively undercut precision.',
        'You need high contrast and dense information.',
        'Your competitors all already use it, which in hospitality is close to all of them.',
      ],
      lang: 'css',
      code: `/* Bohemian: an arch, an earth palette, and a drawn line. */
:root {
  --paper: #F6EDE1;      /* oat — never #fff */
  --ink: #4A382A;        /* warm brown — never #000 */
  --terra: #C4703F;
  --sage: #8C9A76;
  --ochre: #D9B26A;
}

/* the shape language: one radius, reused at three scales */
.arch {
  border-radius: 50% 50% 12px 12px / 34% 34% 12px 12px;
  background: linear-gradient(170deg, #D98E5F, #A85C33);
  aspect-ratio: 3 / 4.4;
}

/* texture from crossed gradients, not from an image file */
.weave {
  background:
    repeating-linear-gradient( 45deg, rgba(196,112,63,.5) 0 12px, transparent 12px 24px),
    repeating-linear-gradient(-45deg, rgba(140,154,118,.5) 0 12px, transparent 12px 24px),
    #EFE0CE;
}

body {
  background: var(--paper);
  color: var(--ink);
  line-height: 1.72;                    /* unhurried */
}

.cta { background: var(--terra); border-radius: 999px; color: #FFF6EC; }
em    { font-style: italic; color: var(--terra); }   /* the warm phrase */`,
    },
  },
  {
    id: 'dark-mode-ui',
    name: 'Dark Mode UI',
    era: 'Terminals, then everywhere from 2019',
    use: 'apps · dashboards',
    tagline: 'Elevation without shadow',
    desc: 'Not “a dark background” — a system where **lighter surfaces mean closer**, accents are desaturated, and neither the page nor the text ever reaches pure black or white.',
    accent: '#8AA0FF',
    Thumb: DarkModeThumb,
    Landing: DarkModeLanding,
    detail: {
      intro:
        'Dark mode is the only entry on this page that is a **systems problem rather than a look**. In light interfaces, depth comes from shadows — but in the dark a shadow has nothing to fall on, so elevation has to be carried by surface lightness instead: each layer closer to the viewer is a slightly lighter grey. Get that one idea right and the rest is contrast discipline.',
      origin:
        'It starts with terminals and code editors, where it never went away. It became a mainstream expectation between 2018 and 2020 when iOS, Android and macOS all shipped system-level dark modes within about a year, which turned it from a preference into something every design system had to answer for.',
      principles: [
        {
          title: 'Elevation is surface lightness',
          body: 'Define a ramp — base, `01`, `02`, `03` — each a few percent lighter. **A card is not “base plus a shadow”, it is the next surface up.** Shadows may add depth, but they can never carry it alone.',
        },
        {
          title: 'Never pure black, never pure white',
          body: 'A `#000` ground with `#FFF` text vibrates, smears in motion, and is exhausting to read. Use a dark grey around `#0C0D10` and an off-white around `#E4E5EA`.',
        },
        {
          title: 'Desaturate every accent',
          body: 'Colours that look right on white **glow and bleed on black**. Take saturation down and lightness up — a light-mode `#3B5BDB` becomes something nearer `#8AA0FF`.',
        },
        {
          title: 'Invert the weight, not just the colour',
          body: 'Light text on dark appears heavier than dark on light. Drop body weight a step, and be more generous with letter-spacing on small type.',
        },
        {
          title: 'Dim imagery, do not just place it',
          body: 'Photographs and illustrations built for light backgrounds glare. Reduce brightness slightly, or give white-heavy images a subtle overlay.',
        },
      ],
      traits: [
        {
          label: 'Typography',
          value: 'A neutral sans at slightly lighter weights than the light theme. Off-white ink at `#E4E5EA`; secondary text no dimmer than about `#9599A6`.',
        },
        {
          label: 'Colour',
          value: 'A four-step grey elevation ramp, one desaturated accent, and semantic colours (ok / warn / bad) **also desaturated** to match.',
        },
        {
          label: 'Layout',
          value: 'Hairline borders at ~8% white to separate surfaces of similar value. Panels, sidebars and popovers each sit at their own elevation.',
        },
        {
          label: 'Imagery',
          value: 'Dimmed, or chosen dark to begin with. Charts and data viz need their own dark palette, not the light one inverted.',
        },
        {
          label: 'Motion',
          value: 'Standard. State changes are carried by surface lightness shifting, not by shadow growing.',
        },
        {
          label: 'Risk',
          value: 'Halation — light text on very dark grounds smears for readers with astigmatism. **Pure black is the main culprit**, which is why it is banned above.',
        },
      ],
      bestFor: [
        '**Developer tools, terminals, editors and consoles** — the native habitat.',
        'Dashboards, analytics and monitoring, where charts glow against a dark ground.',
        'Media and creative apps where the interface should recede behind the content.',
        'Any product used for long sessions, or at night.',
      ],
      avoidWhen: [
        'It is your *only* theme and the audience is general — **most people still prefer light for reading**, and many find dark harder.',
        'The content is long-form text. Dark mode is worse, not better, for sustained reading.',
        'You cannot maintain two themes properly. A half-built dark mode is worse than none.',
      ],
      lang: 'css',
      code: `/* Dark mode: the elevation ramp is the design system. */
:root {
  --e0: #0C0D10;   /* base    — never #000, it halates */
  --e1: #141519;   /* 01: chrome, sidebars */
  --e2: #1B1D22;   /* 02: cards, panels */
  --e3: #24262D;   /* 03: popovers, menus */

  --ink:  #E4E5EA; /* never #FFF */
  --soft: #9599A6;
  --line: rgba(255,255,255,.08);

  --accent: #8AA0FF;  /* the light-mode #3B5BDB, desaturated and lifted */
}

body { background: var(--e0); color: var(--ink); }

/* a card is the next surface up — not the base plus a shadow */
.card    { background: var(--e2); border: 1px solid var(--line); }
.popover { background: var(--e3); border: 1px solid rgba(255,255,255,.14); }

/* light text on dark looks heavier — take a weight step off */
body   { font-weight: 400; }
.dark  { font-weight: 350; }

/* dim imagery built for light backgrounds, or it glares */
img { filter: brightness(.92); }

@media (prefers-color-scheme: light) {
  /* the ramp inverts; the accent goes back to saturated */
  :root { --e0:#FFFFFF; --e1:#F7F7F9; --e2:#FFFFFF; --e3:#FFFFFF;
          --ink:#16181D; --soft:#5C6270; --accent:#3B5BDB;
          --line:rgba(0,0,0,.1); }
}`,
    },
  },
];

/** Lookup used by the detail and full-screen routes. */
export function findDesign(id: string) {
  return designs.find((d) => d.id === id);
}
