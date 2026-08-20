import {
  BrutalismThumb,
  MaximalismThumb,
  MinimalismThumb,
  NeoBrutalismThumb,
  NeoClassicalThumb,
  NeumorphismThumb,
  SurrealismThumb,
  SwissThumb,
} from '../components/designThumbs';
import { BrutalismLanding } from '../landings/BrutalismLanding';
import { MaximalismLanding } from '../landings/MaximalismLanding';
import { MinimalismLanding } from '../landings/MinimalismLanding';
import { NeoBrutalismLanding } from '../landings/NeoBrutalismLanding';
import { NeoClassicalLanding } from '../landings/NeoClassicalLanding';
import { NeumorphismLanding } from '../landings/NeumorphismLanding';
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
];

/** Lookup used by the detail and full-screen routes. */
export function findDesign(id: string) {
  return designs.find((d) => d.id === id);
}
