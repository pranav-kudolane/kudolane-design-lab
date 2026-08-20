import type { ChecklistGroup } from '../types';

export const checklist: ChecklistGroup[] = [
  {
    id: 'color',
    icon: '🎨',
    title: 'Color & Contrast',
    items: [
      'Body text hits **4.5:1** contrast, large text **3:1** (WCAG AA). Check every glass/gradient overlay.',
      'Never signal meaning by **color alone** — add icons, labels or underlines (errors, links, status).',
      "Test your palette in a **color-blind simulator**; ~8% of men can't distinguish red/green.",
    ],
  },
  {
    id: 'keyboard',
    icon: '⌨️',
    title: 'Keyboard & Focus',
    items: [
      'Every interactive element is **reachable by Tab** and usable without a mouse.',
      'Keep a **visible focus ring** — style `:focus-visible`, never `outline:none` alone.',
      'Logical **tab order** that follows the visual layout; add a “skip to content” link.',
    ],
  },
  {
    id: 'structure',
    icon: '🏗️',
    title: 'Structure & Semantics',
    items: [
      'Use real tags — `<button>`, `<nav>`, `<main>` — not `<div onclick>`.',
      "One **H1** per page; headings nested in order (don't skip H2→H4).",
      'Every image has meaningful **alt text** (or `alt=""` if purely decorative).',
    ],
  },
  {
    id: 'motion',
    icon: '🎬',
    title: 'Motion & Media',
    items: [
      'Honor `prefers-reduced-motion` — kill big animations for users who need calm.',
      'No pure **autoplay audio**; give controls. Captions/transcripts for video.',
      'Avoid content that **flashes >3×/sec** (seizure risk).',
    ],
  },
  {
    id: 'forms',
    icon: '📝',
    title: 'Forms & Touch',
    items: [
      "Every input has a real `<label>` — placeholders aren't labels.",
      'Tap targets **≥ 44×44px** with breathing room between them.',
      'Clear, specific **error messages** tied to the field, announced to screen readers.',
    ],
  },
  {
    id: 'verify',
    icon: '🔍',
    title: 'Verify It',
    items: [
      'Run **Lighthouse** (Chrome DevTools) & the **axe** extension on every page.',
      'Actually **tab through** the page and try a screen reader (VoiceOver / NVDA) once.',
      'Zoom to **200%** — layout must not break or clip content.',
    ],
  },
];
