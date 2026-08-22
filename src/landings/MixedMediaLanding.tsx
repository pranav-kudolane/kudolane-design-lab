/**
 * Sample landing page — Mixed Media. Scoped under `.lp-mixed`.
 *
 * Several media colliding on one surface: halftone photography, flat vector
 * blocks, drawn line, torn paper, and type used as an object. Scrapbook is the
 * paper-only subset of this, pretending to be a keepsake; this is art-directed
 * and makes no such claim.
 */
import { A } from './anchors';

/** A drawn line, deliberately in a different medium to everything near it. */
function Scrawl({ className }: { className?: string }) {
  return (
    <svg className={`lpm2-scrawl ${className ?? ''}`} viewBox="0 0 220 60" aria-hidden="true">
      <path
        d="M4 44 C 40 8, 70 52, 106 26 S 172 6, 214 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M198 20 L214 34 L196 44" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MixedMediaLanding() {
  return (
    <div className="lp lp-mixed">
      <header className="lpm2-nav">
        <span className="lpm2-brand">
          CUT<span className="slash">/</span>PASTE
        </span>
        <nav>
          <A href="#work">Work</A>
          <A href="#how">How</A>
          <A href="#talk">Talk to us</A>
        </nav>
      </header>

      <section className="lpm2-hero">
        <span className="lpm2-block b1" aria-hidden="true" />
        <span className="lpm2-photo p1" aria-hidden="true" />
        <span className="lpm2-torn t1" aria-hidden="true" />

        <div className="lpm2-hero-copy">
          <p className="lpm2-kicker">A studio · Glasgow · since 2016</p>
          <h1>
            <span className="w1">Brands</span>
            <span className="w2">that don&apos;t</span>
            <span className="w3">match</span>
          </h1>
          <Scrawl className="under" />
          <p className="lpm2-lede">
            We build identities out of things that should not sit together — a
            photograph, a scribble, a slab of colour — and then we make them sit
            together anyway.
          </p>
          <A className="lpm2-cta" href="#talk">
            Start something
          </A>
        </div>

        <span className="lpm2-halftone" aria-hidden="true" />
        <span className="lpm2-stamp" aria-hidden="true">
          NO TEMPLATES
        </span>
      </section>

      <section className="lpm2-work" id="work">
        <h2>
          Selected
          <span className="lpm2-inline-block" aria-hidden="true" />
          work
        </h2>
        <div className="lpm2-grid">
          <article className="lpm2-case c1">
            <span className="lpm2-media photo" aria-hidden="true" />
            <span className="lpm2-media swatch" aria-hidden="true" />
            <h3>Ferment</h3>
            <p>Identity for a brewery that refuses to name anything sensibly.</p>
            <span className="lpm2-meta">Identity · Packaging</span>
          </article>
          <article className="lpm2-case c2">
            <span className="lpm2-media photo alt" aria-hidden="true" />
            <span className="lpm2-media swatch alt" aria-hidden="true" />
            <h3>Ninth Wave</h3>
            <p>A record label sleeve system where no two sleeves share a grid.</p>
            <span className="lpm2-meta">Art direction</span>
          </article>
          <article className="lpm2-case c3">
            <span className="lpm2-media photo alt2" aria-hidden="true" />
            <span className="lpm2-media swatch alt2" aria-hidden="true" />
            <h3>Common Ground</h3>
            <p>Wayfinding for a park built on top of a demolished shopping centre.</p>
            <span className="lpm2-meta">Environmental</span>
          </article>
        </div>
      </section>

      <section className="lpm2-how" id="how">
        <div className="lpm2-how-copy">
          <h2>Four media, one page</h2>
          <p>
            Every project gets a photograph, a drawn mark, a flat colour and a piece
            of real material. If one of them is missing, the thing looks like
            everything else.
          </p>
          <ol>
            <li>
              <b>Photograph</b> — something real, badly cropped on purpose
            </li>
            <li>
              <b>Mark</b> — drawn by hand, never traced back to smooth
            </li>
            <li>
              <b>Block</b> — one flat colour doing structural work
            </li>
            <li>
              <b>Material</b> — torn, folded, photocopied, scanned
            </li>
          </ol>
        </div>
        <div className="lpm2-collage" aria-hidden="true">
          <span className="lpm2-layer l1" />
          <span className="lpm2-layer l2" />
          <span className="lpm2-layer l3" />
          <Scrawl className="over" />
          <span className="lpm2-layer l4" />
        </div>
      </section>

      <footer className="lpm2-foot" id="talk">
        <span className="lpm2-block b2" aria-hidden="true" />
        <h2>Say hello.</h2>
        <p>hello@cutpaste.studio · 0141 000 0000 · Glasgow G1</p>
      </footer>
    </div>
  );
}
