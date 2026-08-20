/** Sample landing page — Brutalism / Neubrutalism. Scoped under `.lp-brut`. */
import { A } from './anchors';

export function BrutalismLanding() {
  return (
    <div className="lp lp-brut">
      <header className="lpb-nav">
        <span className="lpb-brand">HEAVY&nbsp;INDUSTRY</span>
        <nav>
          <A href="#work">WORK</A>
          <A href="#prices">PRICES</A>
          <A href="#hire">HIRE US</A>
        </nav>
      </header>

      <div className="lpb-ticker">
        BOOKING FOR Q4 — 2 SLOTS LEFT — NO RETAINERS — NO MEETINGS BEFORE 11AM
      </div>

      <section className="lpb-hero">
        <h1>
          WE BUILD
          <br />
          WEBSITES
          <br />
          <mark>THAT LOAD.</mark>
        </h1>
        <div className="lpb-hero-side">
          <p>
            Three engineers. No project managers. Your site ships in six weeks or
            you stop paying us. That is the entire pitch.
          </p>
          <A className="lpb-btn" href="#hire">
            START A PROJECT
          </A>
          <A className="lpb-link" href="#work">
            or look at the work first →
          </A>
        </div>
      </section>

      <section className="lpb-stats">
        <div>
          <b>0.9s</b>
          <span>MEDIAN LCP</span>
        </div>
        <div>
          <b>41</b>
          <span>SITES SHIPPED</span>
        </div>
        <div>
          <b>6wk</b>
          <span>AVERAGE BUILD</span>
        </div>
        <div>
          <b>100</b>
          <span>LIGHTHOUSE A11Y</span>
        </div>
      </section>

      <section className="lpb-work" id="work">
        <article className="lpb-card">
          <span className="lpb-tag">E-COMMERCE</span>
          <h3>KETTLE &amp; CO</h3>
          <p>Storefront rebuild. Went from 4.1s to 0.8s. Revenue up 22% in one quarter.</p>
        </article>
        <article className="lpb-card alt">
          <span className="lpb-tag">SAAS</span>
          <h3>PIPEWORK</h3>
          <p>Marketing site, docs and a pricing page that finally makes sense to read.</p>
        </article>
        <article className="lpb-card">
          <span className="lpb-tag">NON-PROFIT</span>
          <h3>RIVERKEEP</h3>
          <p>Donation flow rewritten. Three fields instead of eleven. Conversions doubled.</p>
        </article>
      </section>

      <section className="lpb-cta" id="prices">
        <h2>ONE PRICE. £24,000.</h2>
        <p>Design, build, launch. Extras are quoted separately and honestly.</p>
        <A className="lpb-btn big" href="#hire">
          EMAIL US →
        </A>
      </section>

      <footer className="lpb-foot" id="hire">
        <span>HEAVY INDUSTRY LTD</span>
        <span>HELLO@HEAVY.INDUSTRIES</span>
        <span>MANCHESTER, UK</span>
      </footer>
    </div>
  );
}
