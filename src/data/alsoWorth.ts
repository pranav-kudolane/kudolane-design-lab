import type { AlsoWorth } from '../types';

/** The strip under the effects grid — one-liners, no demo needed. */
export const alsoWorth: AlsoWorth[] = [
  {
    id: 'parallax',
    title: 'Parallax',
    body: 'Layers move at different scroll speeds. Now doable with `animation-timeline`.',
  },
  {
    id: 'view-transitions',
    title: 'View Transitions API',
    body: 'Smooth morphs between pages/states. `document.startViewTransition()`.',
  },
  {
    id: 'container-queries',
    title: 'Container Queries',
    body: 'Components respond to their **own** width, not the viewport. `@container`.',
  },
  {
    id: 'custom-cursor',
    title: 'Custom Cursor',
    body: 'Replace or trail the pointer with a glowing dot for a bespoke feel.',
  },
  {
    id: 'text-scramble',
    title: 'Text Scramble / Split',
    body: 'Reveal headlines letter-by-letter (GSAP SplitText or CSS).',
  },
  {
    id: 'scroll-snap',
    title: 'Scroll Snap',
    body: 'Full-screen section snapping. Pure CSS `scroll-snap-type`.',
  },
  {
    id: 'sticky-stack',
    title: 'Sticky Stacking Cards',
    body: 'Cards that stack & scale as you scroll. Big on landing pages.',
  },
  {
    id: 'gooey',
    title: 'Gooey / SVG Filters',
    body: 'Merge shapes into liquid blobs with `feGaussianBlur`.',
  },
];
