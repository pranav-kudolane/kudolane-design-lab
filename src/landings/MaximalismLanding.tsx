/** Sample landing page — Maximalism. Scoped under `.lp-max`. */
import { A } from './anchors';

export function MaximalismLanding() {
  return (
    <div className="lp lp-max">
      <div className="lpx-noise" aria-hidden="true" />
      <span className="lpx-blob b1" aria-hidden="true" />
      <span className="lpx-blob b2" aria-hidden="true" />
      <span className="lpx-blob b3" aria-hidden="true" />

      <header className="lpx-nav">
        <span className="lpx-brand">SUNDAE★RIOT</span>
        <nav>
          <A href="#flavours">FLAVOURS</A>
          <A href="#tour">TOUR</A>
          <A href="#shop">SHOP!!</A>
        </nav>
      </header>

      <section className="lpx-hero">
        <span className="lpx-sticker s1">NEW DROP</span>
        <span className="lpx-sticker s2">100% LOUD</span>
        <h1>
          <span className="l1">SUNDAE</span>
          <span className="l2">RIOT</span>
        </h1>
        <p className="lpx-lede">
          Ice cream for people who <em>cannot</em> sit still. Nine flavours, one
          absolutely unhinged tour bus.
        </p>
        <div className="lpx-ctas">
          <A className="lpx-btn" href="#shop">
            EAT NOW →
          </A>
          <A className="lpx-btn ghost" href="#tour">
            find the bus
          </A>
        </div>
      </section>

      <div className="lpx-marquee" aria-hidden="true">
        <div className="lpx-track">
          <span>PISTACHIO PANIC ★ MANGO SCREAM ★ COCOA CHAOS ★ BERRY BLAST ★</span>
          <span>PISTACHIO PANIC ★ MANGO SCREAM ★ COCOA CHAOS ★ BERRY BLAST ★</span>
        </div>
      </div>

      <section className="lpx-flavours" id="flavours">
        <article className="lpx-card c1">
          <span className="lpx-emoji">🍄</span>
          <h3>PISTACHIO PANIC</h3>
          <p>Green. Salty. Slightly threatening. Our best seller three years running.</p>
        </article>
        <article className="lpx-card c2">
          <span className="lpx-emoji">🔥</span>
          <h3>MANGO SCREAM</h3>
          <p>Chilli, lime, alphonso. It is a lot. That is the point of it.</p>
        </article>
        <article className="lpx-card c3">
          <span className="lpx-emoji">🪩</span>
          <h3>COCOA CHAOS</h3>
          <p>Three chocolates, one brownie, zero restraint whatsoever.</p>
        </article>
      </section>

      <footer className="lpx-foot" id="shop">
        <h2>GET SOME.</h2>
        <p>SUNDAE RIOT ★ EST. 2019 ★ MADE TOO LOUD IN LISBON</p>
      </footer>
    </div>
  );
}
