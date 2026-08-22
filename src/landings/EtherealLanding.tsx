/** Sample landing page — Ethereal. Scoped under `.lp-ether`. */
import { A } from './anchors';

export function EtherealLanding() {
  return (
    <div className="lp lp-ether">
      {/* light, not objects: every shape here is blurred past its own edge */}
      <div className="lpw-air" aria-hidden="true">
        <span className="lpw-orb o1" />
        <span className="lpw-orb o2" />
        <span className="lpw-orb o3" />
        <span className="lpw-orb o4" />
      </div>

      <header className="lpw-nav">
        <span className="lpw-brand">Lumen</span>
        <nav>
          <A href="#ritual">The Ritual</A>
          <A href="#made">How it&apos;s made</A>
          <A href="#shop">Shop</A>
        </nav>
      </header>

      <section className="lpw-hero">
        <p className="lpw-eyebrow">Two steps · morning and night</p>
        <h1>
          Skin, but
          <em> softer</em>
        </h1>
        <p className="lpw-lede">
          A cleanser and an oil. That is the whole range, and it will stay the whole
          range. Six weeks to a skin barrier that stops arguing with you.
        </p>
        <A className="lpw-cta" href="#shop">
          Begin the ritual
        </A>
      </section>

      <div className="lpw-plates" aria-hidden="true">
        <span className="lpw-plate p1" />
        <span className="lpw-plate p2" />
        <span className="lpw-plate p3" />
      </div>

      <section className="lpw-steps" id="ritual">
        <article className="lpw-step">
          <span className="lpw-no">i</span>
          <h3>Cleanse</h3>
          <p>
            A milk, not a foam. It lifts the day off without stripping anything that
            was doing useful work.
          </p>
        </article>
        <article className="lpw-step">
          <span className="lpw-no">ii</span>
          <h3>Oil</h3>
          <p>
            Nine drops, pressed in rather than rubbed. Squalane, camellia and a little
            evening primrose.
          </p>
        </article>
        <article className="lpw-step">
          <span className="lpw-no">iii</span>
          <h3>Wait</h3>
          <p>
            Six weeks. Skin turns over roughly every twenty-eight days, so anything
            faster than that is somebody selling you something.
          </p>
        </article>
      </section>

      <section className="lpw-quiet" id="made">
        <p>
          Made in small batches in Dorset. Nothing in either bottle exists to make the
          product feel more expensive than it is.
        </p>
      </section>

      <footer className="lpw-foot" id="shop">
        <h2>Lumen</h2>
        <div className="lpw-foot-row">
          <span>The Two-Step — £58</span>
          <span>Free returns, ninety days</span>
          <span>hello@lumen.care</span>
        </div>
      </footer>
    </div>
  );
}
