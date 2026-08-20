import { useTilt } from '../hooks/useTilt';
import { effects } from '../data/effects';
import { palettes } from '../data/palettes';
import { designs } from '../data/designs';

export function Hero() {
  const { containerRef, targetRef } = useTilt<HTMLDivElement, HTMLDivElement>({ maxDeg: 7 });

  const chips = [
    `${effects.length} live effects`,
    `${palettes.length} premium palettes`,
    `${designs.length} design styles`,
    'a11y checklist',
    'AI workflow',
  ];

  return (
    <header className="hero" id="top">
      <div className="aurora" aria-hidden="true">
        <span className="b1" />
        <span className="b2" />
        <span className="b3" />
      </div>
      <div className="hero-inner" ref={containerRef}>
        <div className="eyebrow">A working toolkit for client-ready sites</div>
        <div className="glass-card" ref={targetRef}>
          <h1>
            Ship websites that make clients say <span className="grad">“wow.”</span>
          </h1>
          <p className="lede">
            Every modern effect running live, premium palettes sorted by industry, an accessibility
            checklist, and an AI build workflow — all copy-and-paste ready.
          </p>
          <div className="hero-tags">
            {chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
