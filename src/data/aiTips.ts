import type { AiTip } from '../types';

/** Numbering is derived from array order, so reordering renumbers the cards. */
export const aiTips: AiTip[] = [
  {
    id: 'design-system-first',
    title: 'Feed it a design system first',
    body: 'Hand over your **tokens up front** — the exact hex palette, fonts, spacing scale, radius. AI defaults to generic looks; pinned tokens make every component consistent and on-brand.',
  },
  {
    id: 'slices',
    title: 'Build in slices, not one shot',
    body: 'Ask for **one component at a time** — nav, then hero, then cards. Small scopes mean fewer bugs, easier review, and you can course-correct before it compounds.',
  },
  {
    id: 'screenshots',
    title: 'Iterate with screenshots',
    body: 'Paste a screenshot and say **“this spacing is off, tighten it.”** Visual feedback beats paragraphs of description — a picture fixes in one turn what words take five to.',
  },
  {
    id: 'delegate',
    title: 'Delegate the boring 80%',
    body: 'Boilerplate, responsive breakpoints, **ARIA labels, alt text, form validation**, dummy content, README. Let AI grind the tedium; you spend your time on taste and logic.',
  },
  {
    id: 'a11y-auditor',
    title: 'Make it your a11y auditor',
    body: "Paste a component and ask it to **flag contrast, missing labels, and keyboard traps.** A fast second pass that catches what you'd miss at 2am before a deadline.",
  },
  {
    id: 'be-specific',
    title: 'Be specific or get generic',
    body: '“Make it modern” → mush. **“Glassmorphic cards, 20px blur, indigo→pink gradient, Bricolage headings”** → exactly what you pictured. Name effects, sizes, and references.',
  },
  {
    id: 'commit-first',
    title: 'Commit before big changes',
    body: 'Use **Git checkpoints** so an AI refactor that goes sideways is one `git reset` away. Freedom to experiment without fear of losing working code.',
  },
  {
    id: 'read-before-ship',
    title: 'Always read before you ship',
    body: "AI can hallucinate APIs and subtly break logic. **Understand every line** you hand a client — you're the one supporting it. Test the real thing, don't trust the demo.",
  },
];
