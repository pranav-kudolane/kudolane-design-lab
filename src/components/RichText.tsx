import { Fragment, type ReactNode } from 'react';
import type { Rich } from '../types';

/**
 * The three inline markers the data files use. Bold is listed first so that
 * `**text**` is never mistaken for an empty italic wrapping a bold.
 */
const INLINE = /\*\*([\s\S]+?)\*\*|\*([^*\n]+?)\*|`([^`]+)`/g;

export function RichText({ text }: { text: Rich }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const m of text.matchAll(INLINE)) {
    const at = m.index;
    if (at > cursor) nodes.push(text.slice(cursor, at));
    if (m[1] !== undefined) {
      nodes.push(<b key={key++}>{m[1]}</b>);
    } else if (m[2] !== undefined) {
      nodes.push(<i key={key++}>{m[2]}</i>);
    } else {
      nodes.push(
        <code className="rt-code" key={key++}>
          {m[3]}
        </code>,
      );
    }
    cursor = at + m[0].length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <Fragment>{nodes}</Fragment>;
}
