/** Sample landing page — Swiss / International Typographic Style. Scoped under `.lp-swiss`. */
import { A } from './anchors';

export function SwissLanding() {
  return (
    <div className="lp lp-swiss">
      <header className="lps-nav">
        <span className="lps-brand">Neue Halle</span>
        <nav>
          <A href="#programme">Programme</A>
          <A href="#visit">Visit</A>
          <A href="#about">About</A>
        </nav>
        <span className="lps-lang">DE / EN</span>
      </header>

      <section className="lps-hero">
        <div className="lps-hero-type">
          <p className="lps-kicker">Exhibition 04 — 12 Sep to 30 Nov 2026</p>
          <h1>
            Grid,
            <br />
            Red,
            <br />
            Repeat.
          </h1>
        </div>
        <div className="lps-hero-side">
          <div className="lps-mark" aria-hidden="true">
            <span className="d1" />
            <span className="d2" />
          </div>
          <p>
            Two hundred posters from the Basel and Zürich schools, 1948 to 1974.
            Shown flat, shown large, shown without apology.
          </p>
          <A className="lps-cta" href="#visit">
            Tickets — CHF 18
          </A>
        </div>
      </section>

      <div className="lps-rule" />

      <section className="lps-facts" id="programme">
        <div className="lps-fact">
          <span className="lps-num">01</span>
          <h3>Josef Müller-Brockmann</h3>
          <p>Forty-one concert posters. The grid as a moral position, not a convenience.</p>
        </div>
        <div className="lps-fact">
          <span className="lps-num">02</span>
          <h3>Armin Hofmann</h3>
          <p>Black, white, and the exact amount of red a page can survive.</p>
        </div>
        <div className="lps-fact">
          <span className="lps-num">03</span>
          <h3>Emil Ruder</h3>
          <p>Typography as rhythm. Counters, spacing, and the space you leave empty.</p>
        </div>
        <div className="lps-fact">
          <span className="lps-num">04</span>
          <h3>The Basel Room</h3>
          <p>Student work from the Kunstgewerbeschule, most of it never printed.</p>
        </div>
      </section>

      <section className="lps-visit" id="visit">
        <div className="lps-col">
          <h4>Hours</h4>
          <p>
            Tue — Sun, 10:00 to 18:00
            <br />
            Thursday until 21:00
            <br />
            Closed Mondays
          </p>
        </div>
        <div className="lps-col">
          <h4>Address</h4>
          <p>
            Steinenberg 7
            <br />
            4051 Basel
            <br />
            Switzerland
          </p>
        </div>
        <div className="lps-col">
          <h4>Entry</h4>
          <p>
            Full CHF 18
            <br />
            Reduced CHF 12
            <br />
            Under 16 free
          </p>
        </div>
      </section>

      <footer className="lps-foot" id="about">
        <span>Neue Halle Basel</span>
        <span>+41 61 000 00 00</span>
        <span>2026</span>
      </footer>
    </div>
  );
}
