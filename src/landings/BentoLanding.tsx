/** Sample landing page — Bento Grid. Scoped under `.lp-bento`. */
import { A } from './anchors';

export function BentoLanding() {
  return (
    <div className="lp lp-bento">
      <header className="lpo-nav">
        <span className="lpo-brand">Orbit</span>
        <nav>
          <A href="#grid">Features</A>
          <A href="#price">Pricing</A>
        </nav>
        <A className="lpo-btn sm" href="#price">
          Get started
        </A>
      </header>

      <section className="lpo-hero">
        <h1>Everything your team keeps losing, in one place.</h1>
        <p>Docs, tasks, calls and decisions. One workspace, no tab graveyard.</p>
      </section>

      <section className="lpo-grid" id="grid">
        {/* every tile carries exactly one idea — that is the whole discipline */}
        <article className="lpo-tile feature">
          <span className="lpo-kicker">Search</span>
          <h3>Find it in one keystroke</h3>
          <p>
            One index across documents, messages, files and call transcripts. Results
            in under 40ms, even at ten thousand people.
          </p>
          <div className="lpo-search" aria-hidden="true">
            <span className="lpo-input">q3 pricing decision</span>
            <span className="lpo-hit">
              <b>Pricing — final call</b>
              <i>Doc · Priya · 2d</i>
            </span>
            <span className="lpo-hit">
              <b>Q3 planning</b>
              <i>Call · 41min</i>
            </span>
          </div>
        </article>

        <article className="lpo-tile tall">
          <span className="lpo-kicker">Calls</span>
          <h3>Notes that write themselves</h3>
          <p>Every call summarised into decisions and owners, attached to the project.</p>
          <div className="lpo-notes" aria-hidden="true">
            <span className="lpo-line">
              <i className="dot" /> Ship pricing page — <b>Tom</b>
            </span>
            <span className="lpo-line">
              <i className="dot" /> Cut the free tier — <b>Priya</b>
            </span>
            <span className="lpo-line">
              <i className="dot" /> Revisit in Q4 — <b>Sam</b>
            </span>
          </div>
        </article>

        <article className="lpo-tile stat">
          <b>40ms</b>
          <span>median search</span>
        </article>

        <article className="lpo-tile stat alt">
          <b>11k</b>
          <span>teams on Orbit</span>
        </article>

        <article className="lpo-tile wide">
          <span className="lpo-kicker">Integrations</span>
          <h3>It already speaks to your stack</h3>
          <div className="lpo-logos" aria-hidden="true">
            <span /> <span /> <span /> <span /> <span /> <span />
          </div>
        </article>

        <article className="lpo-tile security">
          <span className="lpo-shield" aria-hidden="true">
            🔒
          </span>
          <h3>SOC 2, SSO, and your own keys</h3>
          <p>Enterprise controls without the enterprise sales call.</p>
        </article>

        <article className="lpo-tile quote">
          <p className="lpo-said">
            “We deleted four other tools the week we moved across. Nobody has asked
            for any of them back.”
          </p>
          <span className="lpo-by">
            <i className="lpo-av" aria-hidden="true" />
            Priya Raman — Head of Ops, Kettle &amp; Co
          </span>
        </article>
      </section>

      <section className="lpo-cta" id="price">
        <div className="lpo-tile promo">
          <h2>Start free. Pay when the team sticks.</h2>
          <p>£8 per person per month after the first ten seats.</p>
          <A className="lpo-btn" href="#price">
            Create a workspace →
          </A>
        </div>
      </section>

      <footer className="lpo-foot">
        <span>Orbit</span>
        <span>hello@orbit.work</span>
      </footer>
    </div>
  );
}
