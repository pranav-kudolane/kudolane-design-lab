import { Fragment, type ReactNode } from 'react';

/**
 * A deliberately small CSS/JS highlighter.
 *
 * It exists so snippets can live in the data files as plain strings — the
 * clipboard gets exactly what you typed, and nobody hand-writes <span> tags.
 * Anything it doesn't recognise simply stays the default code colour, so a
 * miss is invisible rather than wrong.
 */

/** maps to the .c1–.c4 palette classes already defined in cards.css */
const CLASS: Record<string, string> = {
  comment: 'c4',
  selector: 'c4',
  str: 'c2',
  fn: 'c2',
  atrule: 'c1',
  prop: 'c1',
  hex: 'c3',
  num: 'c3',
};

const TOKENS = new RegExp(
  [
    String.raw`(?<comment>\/\*[\s\S]*?\*\/|\/\/[^\n]*)`,
    String.raw`(?<str>"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|\`(?:[^\`\\]|\\.)*\`)`,
    String.raw`(?<atrule>@[A-Za-z-]+)`,
    String.raw`(?<selector>(?:^|(?<=\n))[ \t]*[.#]?[A-Za-z][\w-]*(?:::?[\w-]+)?(?:[ \t]+[^\n{]*?)?(?=[ \t]*\{))`,
    String.raw`(?<prop>[a-z-]{2,}(?=[ \t]*:))`,
    String.raw`(?<fn>[A-Za-z_$][\w$-]*(?=\())`,
    String.raw`(?<hex>#[0-9a-fA-F]{3,8}\b)`,
    String.raw`(?<num>[-+]?(?:\d*\.\d+|\d+)(?:px|deg|ms|s|%|fr|em|rem|vw|vh)?\b)`,
  ].join('|'),
  'g',
);

export function highlight(code: string): ReactNode {
  const out: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const m of code.matchAll(TOKENS)) {
    const kind = Object.keys(m.groups ?? {}).find((k) => m.groups?.[k] !== undefined);
    if (!kind) continue;
    if (m.index > cursor) out.push(code.slice(cursor, m.index));
    out.push(
      <span className={CLASS[kind]} key={key++}>
        {m[0]}
      </span>,
    );
    cursor = m.index + m[0].length;
  }
  if (cursor < code.length) out.push(code.slice(cursor));

  return <Fragment>{out}</Fragment>;
}
