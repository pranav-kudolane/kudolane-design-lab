/** Sample landing page — Y2K Aesthetic. Scoped under `.lp-y2k`. */
import { A } from './anchors';

export function Y2kLanding() {
  return (
    <div className="lp lp-y2k">
      <div className="lpv-holo" aria-hidden="true" />
      <span className="lpv-star a" aria-hidden="true">
        ✦
      </span>
      <span className="lpv-star b" aria-hidden="true">
        ✧
      </span>
      <span className="lpv-star c" aria-hidden="true">
        ✦
      </span>

      <header className="lpv-nav">
        <span className="lpv-brand">BLUEBERRY 2000</span>
        <nav>
          <A href="#specs">SPECS</A>
          <A href="#colours">COLOURS</A>
        </nav>
        <A className="lpv-btn sm" href="#order">
          ORDER NOW
        </A>
      </header>

      <section className="lpv-hero">
        <div className="lpv-hero-copy">
          <span className="lpv-badge">★ NEW FOR 2000 ★</span>
          <h1 className="lpv-chrome">MP3 IS THE FUTURE</h1>
          <p>
            One thousand songs. No tape, no skipping, no rewinding. Fits in the palm
            of your hand and comes in five translucent colours.
          </p>
          <div className="lpv-ctas">
            <A className="lpv-btn" href="#order">
              ENTER SITE →
            </A>
            <A className="lpv-btn ghost" href="#specs">
              tech specs
            </A>
          </div>
        </div>

        <div className="lpv-product" aria-hidden="true">
          <span className="lpv-device">
            <i className="screen" />
            <i className="wheel" />
            <i className="gloss" />
          </span>
          <span className="lpv-flare" />
        </div>
      </section>

      <div className="lpv-marquee" aria-hidden="true">
        <div className="lpv-track">
          <span>★ 1000 SONGS ★ 10 HOUR BATTERY ★ FIREWIRE ★ NO MOVING PARTS ★</span>
          <span>★ 1000 SONGS ★ 10 HOUR BATTERY ★ FIREWIRE ★ NO MOVING PARTS ★</span>
        </div>
      </div>

      <section className="lpv-specs" id="specs">
        <article className="lpv-card">
          <span className="lpv-ico">💿</span>
          <h3>1,000 SONGS</h3>
          <p>5 gigabytes. That is roughly eighty-three albums, in your pocket, at once.</p>
        </article>
        <article className="lpv-card">
          <span className="lpv-ico">⚡</span>
          <h3>10 HOURS</h3>
          <p>Charges over FireWire while it syncs. Both at the same time. Genuinely.</p>
        </article>
        <article className="lpv-card">
          <span className="lpv-ico">💾</span>
          <h3>NO SKIPPING</h3>
          <p>No disc, no laser, no jumping on the bus. Solid state, solid sound.</p>
        </article>
      </section>

      <section className="lpv-colours" id="colours">
        <h2 className="lpv-chrome">FIVE FLAVOURS</h2>
        <div className="lpv-swatches">
          <span className="lpv-sw s1">
            <b>BLUEBERRY</b>
          </span>
          <span className="lpv-sw s2">
            <b>TANGERINE</b>
          </span>
          <span className="lpv-sw s3">
            <b>LIME</b>
          </span>
          <span className="lpv-sw s4">
            <b>GRAPE</b>
          </span>
          <span className="lpv-sw s5">
            <b>STRAWBERRY</b>
          </span>
        </div>
      </section>

      <footer className="lpv-foot" id="order">
        <A className="lpv-btn big" href="#order">
          ORDER YOURS — $399
        </A>
        <p className="lpv-counter">
          <span>YOU ARE VISITOR</span>
          <b>00142857</b>
        </p>
        <p className="lpv-fine">
          BLUEBERRY 2000 ⋅ BEST VIEWED AT 800×600 ⋅ © MM
        </p>
      </footer>
    </div>
  );
}
