/** Sample landing page — Cyberpunk. Scoped under `.lp-cyber`. */
import { A } from './anchors';

export function CyberpunkLanding() {
  return (
    <div className="lp lp-cyber">
      <div className="lpx2-city" aria-hidden="true">
        <span className="lpx2-glow g1" />
        <span className="lpx2-glow g2" />
        <span className="lpx2-glow g3" />
        <span className="lpx2-rain" />
        <span className="lpx2-scan" />
      </div>

      <span className="lpx2-vertical" aria-hidden="true">
        神経 · SECTOR 9 · 神経
      </span>

      <header className="lpx2-nav">
        <span className="lpx2-brand" data-text="NEXA//CLINIC">
          NEXA//CLINIC
        </span>
        <nav>
          <A href="#ware">WETWARE</A>
          <A href="#finance">FINANCE</A>
        </nav>
        <A className="lpx2-btn sm" href="#book">
          BOOK A SLOT
        </A>
      </header>

      <section className="lpx2-hero">
        <div className="lpx2-hero-copy">
          <span className="lpx2-tag">◤ LICENCED · SECTOR 9 · TIER-3 ◢</span>
          <h1 className="lpx2-glitch" data-text="UPGRADE YOUR HANDS">
            UPGRADE YOUR HANDS
          </h1>
          <p className="lpx2-lede">
            Twelve-hour fitting. Nine-year warranty. Financing from ¤89 a month with
            approved neural credit. You will not miss the originals.
          </p>
          <div className="lpx2-ctas">
            <A className="lpx2-btn" href="#book">
              BOOK A FITTING
            </A>
            <A className="lpx2-btn ghost" href="#finance">
              check eligibility
            </A>
          </div>
        </div>

        <div className="lpx2-spec" aria-hidden="true">
          <div className="lpx2-spec-head">
            <span>MODEL</span>
            <b>KIROV-7</b>
          </div>
          <dl>
            <div>
              <dt>GRIP</dt>
              <dd>412 kgf</dd>
            </div>
            <div>
              <dt>LATENCY</dt>
              <dd>4.1 ms</dd>
            </div>
            <div>
              <dt>HAPTICS</dt>
              <dd>full</dd>
            </div>
            <div>
              <dt>WARRANTY</dt>
              <dd>9 yr</dd>
            </div>
          </dl>
          <span className="lpx2-bar">
            <i />
          </span>
          <span className="lpx2-spec-foot">CALIBRATION 78% · HOLD STILL</span>
        </div>
      </section>

      <div className="lpx2-ticker" aria-hidden="true">
        <div className="lpx2-track">
          <span>◆ NO CREDIT CHECK ◆ SAME-DAY FITTING ◆ SECTOR 9 ONLY ◆ TERMS APPLY ◆</span>
          <span>◆ NO CREDIT CHECK ◆ SAME-DAY FITTING ◆ SECTOR 9 ONLY ◆ TERMS APPLY ◆</span>
        </div>
      </div>

      <section className="lpx2-ware" id="ware">
        <article className="lpx2-card c1">
          <span className="lpx2-no">01</span>
          <h3>OPTICS</h3>
          <p>Low-light, 40× zoom, and an overlay you can actually switch off.</p>
          <span className="lpx2-price">from ¤4,200</span>
        </article>
        <article className="lpx2-card c2">
          <span className="lpx2-no">02</span>
          <h3>HANDS</h3>
          <p>The Kirov-7. Four hundred kilos of grip and a handshake nobody forgets.</p>
          <span className="lpx2-price">from ¤7,800</span>
        </article>
        <article className="lpx2-card c3">
          <span className="lpx2-no">03</span>
          <h3>CORTEX</h3>
          <p>Sleep in ninety minutes. Read in eleven languages. Dream in none.</p>
          <span className="lpx2-price">from ¤19,400</span>
        </article>
      </section>

      <section className="lpx2-fine" id="finance">
        <h2>¤89 / MONTH</h2>
        <p>
          Representative 34.9% APR. Missed payments may result in temporary limb
          suspension. Nexa Clinic is a licenced Tier-3 provider operating under
          Sector 9 municipal charter.
        </p>
      </section>

      <footer className="lpx2-foot" id="book">
        <A className="lpx2-btn big" href="#book">
          BOOK A FITTING →
        </A>
        <p>NEXA//CLINIC · LEVEL 44, KOWLOON STACK · OPEN 24H</p>
      </footer>
    </div>
  );
}
