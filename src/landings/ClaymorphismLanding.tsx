/** Sample landing page — Claymorphism. Scoped under `.lp-clay`. */
import { A } from './anchors';

export function ClaymorphismLanding() {
  return (
    <div className="lp lp-clay">
      <header className="lpy-nav">
        <span className="lpy-brand">
          <i className="lpy-logo" aria-hidden="true" />
          Pip
        </span>
        <nav>
          <A href="#how">How it works</A>
          <A href="#grown">For grown-ups</A>
        </nav>
        <A className="lpy-btn sm" href="#get">
          Get Pip
        </A>
      </header>

      <section className="lpy-hero">
        <div className="lpy-hero-copy">
          <span className="lpy-pill">Ages 6 to 14</span>
          <h1>Pocket money that teaches something.</h1>
          <p>
            A card, an app and a jar. Kids set a goal, watch it fill up, and learn
            what waiting for something actually feels like.
          </p>
          <div className="lpy-ctas">
            <A className="lpy-btn" href="#get">
              Get Pip — £2/month
            </A>
            <A className="lpy-btn ghost" href="#how">
              See how it works
            </A>
          </div>
        </div>

        <div className="lpy-scene" aria-hidden="true">
          <span className="lpy-blob big" />
          <span className="lpy-coin c1" />
          <span className="lpy-coin c2" />
          <div className="lpy-jar">
            <span className="lpy-jar-fill" />
            <b>£42</b>
            <small>of £60 — a skateboard</small>
          </div>
        </div>
      </section>

      <section className="lpy-steps" id="how">
        <article className="lpy-card c1">
          <span className="lpy-ico">🎯</span>
          <h3>Pick a goal</h3>
          <p>A skateboard, a game, a trip. They choose it, which is the whole point.</p>
        </article>
        <article className="lpy-card c2">
          <span className="lpy-ico">🫙</span>
          <h3>Fill the jar</h3>
          <p>Pocket money, chores and birthdays all drop into the same jar.</p>
        </article>
        <article className="lpy-card c3">
          <span className="lpy-ico">🎉</span>
          <h3>Spend it properly</h3>
          <p>When the jar is full the card unlocks. Not a moment before.</p>
        </article>
      </section>

      <section className="lpy-grown" id="grown">
        <div className="lpy-panel">
          <h2>Grown-ups keep the controls.</h2>
          <ul>
            <li>Set spending limits per shop and per week</li>
            <li>Approve or decline anything over a fiver</li>
            <li>Freeze the card from your phone in one tap</li>
            <li>Every transaction, explained in plain English</li>
          </ul>
        </div>
      </section>

      <footer className="lpy-foot" id="get">
        <h2>Start the first jar today.</h2>
        <A className="lpy-btn" href="#get">
          Get Pip — £2/month
        </A>
        <p>No card fees · Cancel any time · FCA-regulated partner bank</p>
      </footer>
    </div>
  );
}
