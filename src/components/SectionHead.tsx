import type { ReactNode } from 'react';

interface Props {
  /** the mono uppercase line, e.g. "01 — Modern CSS · Morphs · 3D" */
  kicker: string;
  title: ReactNode;
  children: ReactNode;
}

export function SectionHead({ kicker, title, children }: Props) {
  return (
    <div className="sec-head">
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
