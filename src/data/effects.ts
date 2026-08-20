import type { Effect } from '../types';
import {
  AuroraDemo,
  BentoDemo,
  BlobDemo,
  ClayDemo,
  GlassDemo,
  GradientTextDemo,
  MarqueeDemo,
  NeuDemo,
  NoiseDemo,
  ScrollDemo,
  SpotlightDemo,
  TiltDemo,
} from '../components/demos';

/**
 * Ordered most-used first — the rank badge is just the array index + 1,
 * so reordering this list reorders the page. To add an effect: write a demo
 * component in components/demos.tsx, then drop an entry in here.
 */
export const effects: Effect[] = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    use: 'UI · cards',
    desc: 'Frosted, translucent panels that float over color. The default premium look for nav bars, cards & modals. **Needs a busy background behind it.**',
    lang: 'css',
    Demo: GlassDemo,
    code: `.glass {
  background: rgba(255,255,255,.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 18px;
}`,
  },
  {
    id: 'aurora',
    name: 'Aurora / Mesh Gradient',
    use: 'hero · bg',
    desc: 'Soft, drifting blobs of color blurred into a living background. The go-to hero backdrop for SaaS & premium brands. **Blur + blend-mode does the magic.**',
    lang: 'css',
    Demo: AuroraDemo,
    code: `.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  mix-blend-mode: screen;
  animation: float 18s ease-in-out infinite;
}`,
  },
  {
    id: 'tilt-3d',
    name: '3D Tilt Card',
    use: 'products',
    desc: 'Card rotates toward the cursor on a real 3D plane. Huge for product shots & feature cards. **Uses `perspective` + JS mouse tracking.**',
    lang: 'js',
    Demo: TiltDemo,
    code: `.card {
  transform-style: preserve-3d;
  transition: transform .1s;
}
// JS: on mousemove →
el.style.transform =
  \`rotateX(\${ry}deg) rotateY(\${rx}deg)\`;`,
  },
  {
    id: 'scroll-driven',
    name: 'Scroll-Driven Animation',
    use: 'storytelling',
    desc: 'Animations tied to scroll position — no JS libraries needed anymore. Reveals, progress bars, parallax. **Native `animation-timeline`.**',
    lang: 'css',
    Demo: ScrollDemo,
    code: `.reveal {
  animation: fadeUp linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
/* add a JS fallback for Safari */`,
  },
  {
    id: 'gradient-text',
    name: 'Animated Gradient Text',
    use: 'headlines',
    desc: 'Flowing multi-color type for headlines & logos. Instant premium signal on any hero. **Clip the gradient to the text.**',
    lang: 'css',
    Demo: GradientTextDemo,
    code: `.grad-text {
  background: linear-gradient(100deg,#7C6BFF,#FF6FB5,#FFB84D);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  color: transparent;
  animation: slide 6s linear infinite;
}`,
  },
  {
    id: 'bento',
    name: 'Bento Grid',
    use: 'layout',
    desc: 'Apple-style asymmetric tiles of varying sizes. The dominant layout for feature sections & dashboards. **Grid spans do all the work.**',
    lang: 'css',
    Demo: BentoDemo,
    code: `.bento {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 16px;
}
.bento .big  { grid-row: span 2; }
.bento .wide { grid-column: span 2; }`,
  },
  {
    id: 'spotlight-button',
    name: 'Spotlight Button',
    use: 'CTAs',
    desc: 'A soft glow that tracks the cursor across the button. Micro-interactions like this lift perceived quality fast. **Follow the pointer with JS.**',
    lang: 'js',
    Demo: SpotlightDemo,
    code: `// track pointer inside the button
btn.onmousemove = e => {
  const r = btn.getBoundingClientRect();
  glow.style.left = e.clientX - r.left + 'px';
  glow.style.top  = e.clientY - r.top  + 'px';
};`,
  },
  {
    id: 'blob-morph',
    name: 'Blob Morph',
    use: 'accents',
    desc: 'An organic shape that slowly morphs between forms. Great as a container for images or a floating accent. **Animate `border-radius`.**',
    lang: 'css',
    Demo: BlobDemo,
    code: `@keyframes morph {
  0%,100% { border-radius: 42% 58% 63% 37% / 47% 40% 60% 53%; }
  50%     { border-radius: 66% 34% 40% 60% / 58% 66% 34% 42%; }
}
.blob { animation: morph 8s ease-in-out infinite; }`,
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    use: 'use with care',
    desc: 'Soft, extruded shapes using dual shadows. Elegant but **risky for contrast/accessibility** — best for accents, not core buttons.',
    lang: 'css',
    Demo: NeuDemo,
    code: `.neu {
  background: #1a1826;
  border-radius: 20px;
  box-shadow: 6px 6px 14px #0c0b14,
             -6px -6px 14px #282438;
}`,
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    use: 'playful',
    desc: 'Puffy, 3D “clay” with inner + outer shadows. Friendly & fun — perfect for kids, apps, and playful brands. **Inset shadows sell the depth.**',
    lang: 'css',
    Demo: ClayDemo,
    code: `.clay {
  border-radius: 26px;
  box-shadow:
    inset 6px 6px 12px rgba(255,255,255,.35),
    inset -6px -6px 14px rgba(0,0,0,.35),
    0 16px 30px -10px rgba(0,0,0,.5);
}`,
  },
  {
    id: 'marquee',
    name: 'Infinite Marquee',
    use: 'logos · social',
    desc: 'Endless horizontal scroll for logo walls, tickers, testimonials. **Duplicate the content and translate -50%.** Add an edge fade mask.',
    lang: 'css',
    Demo: MarqueeDemo,
    code: `@keyframes scrollx { to { transform: translateX(-50%); } }
.row {
  width: max-content;
  animation: scrollx 20s linear infinite;
}
/* duplicate items inside .row for seamless loop */`,
  },
  {
    id: 'grain',
    name: 'Grain / Noise Texture',
    use: 'texture',
    desc: 'A faint SVG noise layer that makes flat gradients feel tactile & expensive. **One data-URI, blended over everything.**',
    lang: 'css',
    Demo: NoiseDemo,
    code: `body::before {
  content: "";
  position: fixed; inset: 0;
  opacity: .04;
  mix-blend-mode: overlay;
  background: url("data:image/svg+xml,...feTurbulence...");
}`,
  },
];
