import type { CSSProperties } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { RichText } from '../components/RichText';
import { findDesign } from '../data/designs';

/** Shown when someone lands on a slug that no longer exists. */
function NotFound({ id }: { id: string }) {
  return (
    <main className="wrap dd-missing">
      <h1>No style called “{id}”</h1>
      <p>It may have been renamed. The full list is back on the styles grid.</p>
      <a className="dd-back" href="#designs">
        <span aria-hidden="true">←</span> All design styles
      </a>
    </main>
  );
}

export function DesignDetail({ id }: { id: string }) {
  const design = findDesign(id);

  if (!design) return <NotFound id={id} />;

  const { name, era, tagline, accent, detail, Landing } = design;
  const { intro, origin, principles, traits, bestFor, avoidWhen, code, lang } = detail;

  return (
    <main className="dd" style={{ '--ds-accent': accent } as CSSProperties}>
      <div className="wrap">
        <a className="dd-back" href="#designs">
          <span aria-hidden="true">←</span> All design styles
        </a>

        <header className="dd-head">
          <div className="dd-era">{era}</div>
          <h1>{name}</h1>
          <p className="dd-tagline">{tagline}</p>
          <p className="dd-intro">
            <RichText text={intro} />
          </p>
        </header>

        <section className="dd-block">
          <h2>Where it comes from</h2>
          <p className="dd-prose">
            <RichText text={origin} />
          </p>
        </section>

        <section className="dd-block">
          <h2>Principles</h2>
          <ol className="dd-principles">
            {principles.map((p, i) => (
              <li key={p.title}>
                <span className="dd-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>
                    <RichText text={p.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="dd-block">
          <h2>At a glance</h2>
          <dl className="dd-traits">
            {traits.map((t) => (
              <div className="dd-trait" key={t.label}>
                <dt>{t.label}</dt>
                <dd>
                  <RichText text={t.value} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="dd-block dd-fit">
          <div className="dd-fit-col good">
            <h2>Reach for it when</h2>
            <ul>
              {bestFor.map((item, i) => (
                <li key={i}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="dd-fit-col bad">
            <h2>Avoid it when</h2>
            <ul>
              {avoidWhen.map((item, i) => (
                <li key={i}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="dd-block">
          <h2>The CSS that makes it</h2>
          <div className="dd-code">
            <CodeBlock code={code} lang={lang} toastMessage={`${name} CSS copied`} />
          </div>
        </section>

        <section className="dd-block">
          <h2>A landing page in this style</h2>
          <p className="dd-prose">
            Everything above, applied. The preview is live — links, hovers and motion all work.
          </p>

          <div className="dd-frame">
            <div className="dd-chrome">
              <span className="dd-dots" aria-hidden="true">
                <i /> <i /> <i />
              </span>
              <span className="dd-url">{name.toLowerCase().replace(/\s+/g, '')}.example</span>
              <a className="dd-open" href={`#/design/${id}/live`}>
                Open full screen <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="dd-viewport">
              <Landing />
            </div>
          </div>
        </section>

        <a className="dd-back bottom" href="#designs">
          <span aria-hidden="true">←</span> All design styles
        </a>
      </div>
    </main>
  );
}
