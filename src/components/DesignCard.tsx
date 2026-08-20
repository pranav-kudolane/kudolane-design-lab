import type { CSSProperties } from 'react';
import type { DesignStyle } from '../types';
import { RichText } from './RichText';

/** One card in the styles grid. Read more routes to `#/design/<id>`. */
export function DesignCard({ design }: { design: DesignStyle }) {
  const { id, name, use, tagline, desc, accent, Thumb } = design;

  return (
    <article
      className="ds-card"
      id={id}
      style={{ '--ds-accent': accent } as CSSProperties}
    >
      <div className="ds-shot">
        <Thumb />
      </div>

      <div className="ds-body">
        <div className="ds-top">
          <h3 className="ds-name">
            {name}
            <small>{tagline}</small>
          </h3>
          <span className="ds-use">{use}</span>
        </div>

        <p className="ds-desc">
          <RichText text={desc} />
        </p>

        <a className="ds-more" href={`#/design/${id}`}>
          Read more
          <span aria-hidden="true">→</span>
          <i className="sr-only"> about {name}</i>
        </a>
      </div>
    </article>
  );
}
