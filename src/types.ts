import type { ComponentType } from 'react';

/**
 * Rich text used across the data files.
 * Supports two inline markers, both optional:
 *   **bold**   -> <b>
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
