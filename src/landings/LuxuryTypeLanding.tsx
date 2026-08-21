/** Sample landing page — Luxury Typography. Scoped under `.lp-lux`. */
import { A } from './anchors';

export function LuxuryTypeLanding() {
  return (
    <div className="lp lp-lux">
      <header className="lpt-nav">
        <span className="lpt-brand">Verdant</span>
        <nav>
          <A href="#collection">Collection</A>
          <A href="#house">The House</A>
          <A href="#stockists">Stockists</A>
        </nav>
      </header>

      <section className="lpt-hero">
        <p className="lpt-season">Spring Summer 2026</p>
        <h1>
          <span className="l1">Quiet</span>
          <span className="l2">Cloth</span>
        </h1>
        <div className="lpt-meta">
          <span>Sixteen pieces</span>
          <span>Shown in Arles, 14 March</span>
        </div>
      </section>

      <div className="lpt-plate" aria-hidden="true">
        <span className="lpt-img a" />
        <span className="lpt-img b" />
      </div>

      <section className="lpt-statement">
        <p>
          Nothing in this collection is <em>new</em>. Everything in it is better —
          the same eleven shapes we have made since 1994, cut again in cloth that
          took two years to find.
        </p>
      </section>

      <section className="lpt-collection" id="collection">
        <article className="lpt-piece">
          <span className="lpt-no">01</span>
          <span className="lpt-img c" aria-hidden="true" />
          <h3>The Long Coat</h3>
          <p>Undyed wool, Yorkshire · £1,890</p>
        </article>
        <article className="lpt-piece">
          <span className="lpt-no">02</span>
          <span className="lpt-img d" aria-hidden="true" />
          <h3>Wide Trouser</h3>
          <p>Washed linen, Normandy · £640</p>
        </article>
        <article className="lpt-piece">
          <span className="lpt-no">03</span>
          <span className="lpt-img e" aria-hidden="true" />
          <h3>The Shirt</h3>
          <p>Irish linen, mother-of-pearl · £420</p>
        </article>
      </section>

      <section className="lpt-house" id="house">
        <div className="lpt-house-l">
          <p className="lpt-label">The House</p>
        </div>
        <div className="lpt-house-r">
          <p>
            Founded in Antwerp, 1994. Two collections a year, no more. Every piece is
            cut within forty kilometres of the mill that made its cloth, and every
            mill is named on the label.
          </p>
          <A className="lpt-link" href="#stockists">
            Find a stockist
          </A>
        </div>
      </section>

      <footer className="lpt-foot" id="stockists">
        <span className="lpt-word">Verdant</span>
        <div className="lpt-foot-cols">
          <span>Antwerp · Paris · Kyoto</span>
          <span>atelier@verdant.be</span>
          <span>MMXXVI</span>
        </div>
      </footer>
    </div>
  );
}
