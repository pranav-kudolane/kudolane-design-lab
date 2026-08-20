import type { ComponentType } from 'react';

/**
 * Rich text used across the data files.
 * Supports three inline markers, all optional:
 *   **bold**   -> <b>
 *   *italic*   -> <i>
 *   `code`     -> <code class="rt-code">
 */
export type Rich = string;

export type CodeLang = 'css' | 'js';

export interface Effect {
  /** stable slug — used as the React key and as an anchor target */
  id: string;
  name: string;
  /** short context label shown top-right of the card, e.g. "UI · cards" */
  use: string;
  /** one or two sentences; supports Rich markers */
  desc: Rich;
  /** the snippet the Copy button puts on the clipboard */
  code: string;
  lang: CodeLang;
  /** live demo rendered inside the card; owns its own `.demo` element */
  Demo: ComponentType;
}

export interface Palette {
  id: string;
  icon: string;
  title: string;
  /** small uppercase line under the title */
  subtitle: string;
  /** 5 hex values, ordered dark -> light in most palettes */
  colors: string[];
  /** why this palette reads premium for the domain; supports Rich markers */
  why: Rich;
}

export interface ChecklistGroup {
  id: string;
  icon: string;
  title: string;
  items: Rich[];
}

export interface AiTip {
  id: string;
  title: string;
  body: Rich;
}

export interface AlsoWorth {
  id: string;
  title: string;
  body: Rich;
}

/* ---------- DESIGN STYLES ---------- */

/** A labelled fact row in the detail view, e.g. "Typography — one family, two weights". */
export interface DesignTrait {
  label: string;
  value: Rich;
}

/** A named rule of the style, expanded in the detail view. */
export interface DesignPrinciple {
  title: string;
  body: Rich;
}

export interface DesignStyle {
  /** stable slug — also the hash route: #/design/<id> */
  id: string;
  name: string;
  /** period the style belongs to, shown as a mono line */
  era: string;
  /** short context label shown top-right of the card, e.g. "SaaS · portfolio" */
  use: string;
  /** one line under the title on the card */
  tagline: string;
  /** two sentences on the card; supports Rich markers */
  desc: Rich;
  /** hex used for the card's accent rail, badge and detail header */
  accent: string;
  /** miniature fake website drawn in CSS — the card thumbnail */
  Thumb: ComponentType;
  /** the full sample landing page written in this style */
  Landing: ComponentType;
  detail: DesignDetail;
}

export interface DesignDetail {
  /** opening paragraph of the detail view */
  intro: Rich;
  /** where the style came from and why it stuck */
  origin: Rich;
  principles: DesignPrinciple[];
  /** typography / colour / layout / motion at a glance */
  traits: DesignTrait[];
  /** project types this style flatters */
  bestFor: Rich[];
  /** project types it actively hurts */
  avoidWhen: Rich[];
  /** representative snippet, copyable */
  code: string;
  lang: CodeLang;
}
