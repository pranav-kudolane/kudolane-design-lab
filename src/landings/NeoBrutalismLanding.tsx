/** Sample landing page — Neo-Brutalism. Scoped under `.lp-neob`. */
import { A } from './anchors';

export function NeoBrutalismLanding() {
  return (
    <div className="lp lp-neob">
      <header className="lpn-nav">
        <span className="lpn-brand">
          <i className="lpn-dot" aria-hidden="true" />
          Tally
        </span>
        <nav>
          <A href="#how">How it works</A>
          <A href="#price">Pricing</A>
        </nav>
        <A className="lpn-btn sm" href="#price">
          Start free
        </A>
      </header>

      <section className="lpn-hero">
        <div className="lpn-hero-copy">
          <span className="lpn-badge">Built for freelancers</span>
          <h1>Get paid without the awkward email.</h1>
          <p>
            Send an invoice in eleven seconds. Tally chases the late ones for you,
            politely, so you never have to write “just following up” again.
          </p>
          <div className="lpn-ctas">
            <A className="lpn-btn" href="#price">
              Start free →
            </A>
            <A className="lpn-btn ghost" href="#how">
              See how it works
            </A>
          </div>
          <span className="lpn-fine">No card needed · 14-day trial · Cancel in two clicks</span>
        </div>

        <div className="lpn-mock" aria-hidden="true">
          <div className="lpn-mock-bar">
            <span>INVOICE #0412</span>
            <b className="lpn-paid">PAID</b>
          </div>
          <div className="lpn-row">
            <span>Brand identity</span>
            <b>£2,400</b>
          </div>
          <div className="lpn-row">
            <span>Website build</span>
            <b>£5,100</b>
          </div>
          <div className="lpn-row">
            <span>Late fee (sorry)</span>
            <b>£120</b>
          </div>
          <div className="lpn-total">
            <span>TOTAL</span>
            <b>£7,620</b>
          </div>
          <span className="lpn-stamp">SENT ✦</span>
        </div>
      </section>

      <section className="lpn-features" id="how">
        <article className="lpn-card c1">
          <span className="lpn-ico">⚡</span>
          <h3>Eleven seconds</h3>
          <p>Pick a client, pick a line item, hit send. The template remembers everything else.</p>
        </article>
        <article className="lpn-card c2">
          <span className="lpn-ico">🤖</span>
          <h3>It chases for you</h3>
          <p>Three reminders, increasingly firm, all written by someone who is not you.</p>
        </article>
        <article className="lpn-card c3">
          <span className="lpn-ico">📊</span>
          <h3>Tax, pre-sorted</h3>
          <p>Every invoice lands in the right category. Your accountant will be suspicious.</p>
        </article>
      </section>

      <section className="lpn-price" id="price">
        <div className="lpn-plan">
          <span className="lpn-tag">EVERYTHING PLAN</span>
          <h2>
            £9<small>/month</small>
          </h2>
          <ul>
            <li>Unlimited invoices &amp; clients</li>
            <li>Automatic payment chasing</li>
            <li>Tax categories and exports</li>
            <li>A human answers support in a day</li>
          </ul>
          <A className="lpn-btn" href="#price">
            Start free →
          </A>
        </div>
      </section>

      <footer className="lpn-foot">
        <span>Tally © 2026</span>
        <span>hello@tally.app</span>
      </footer>
    </div>
  );
}
