/** Sample landing page — Glassmorphism. Scoped under `.lp-glass`. */
import { A } from './anchors';

export function GlassmorphismLanding() {
  return (
    <div className="lp lp-glass">
      {/* glass needs something busy behind it or there is nothing to frost */}
      <div className="lpg-bg" aria-hidden="true">
        <span className="lpg-blob b1" />
        <span className="lpg-blob b2" />
        <span className="lpg-blob b3" />
        <span className="lpg-blob b4" />
        <span className="lpg-grain" />
      </div>

      <header className="lpg-nav">
        <span className="lpg-brand">
          <i className="lpg-mark" aria-hidden="true" />
          Aura
        </span>
        <nav>
          <A href="#sounds">Sounds</A>
          <A href="#plans">Plans</A>
        </nav>
        <A className="lpg-btn sm" href="#plans">
          Try free
        </A>
      </header>

      <section className="lpg-hero">
        <span className="lpg-pill">Now with offline mixes</span>
        <h1>Sleep, focus, repeat.</h1>
        <p className="lpg-lede">
          Two hundred layered soundscapes, tuned by an actual sound engineer rather
          than an algorithm. Twelve minutes to fall asleep, on average.
        </p>
        <div className="lpg-ctas">
          <A className="lpg-btn" href="#plans">
            Start listening
          </A>
          <A className="lpg-btn ghost" href="#sounds">
            Hear a sample
          </A>
        </div>

        <div className="lpg-player">
          <span className="lpg-cover" aria-hidden="true" />
          <div className="lpg-track">
            <b>Rain on a tin roof</b>
            <span>Deep sleep · 8 hours</span>
            <div className="lpg-bar" aria-hidden="true">
              <i />
            </div>
          </div>
          <span className="lpg-play" aria-hidden="true">
            ▶
          </span>
        </div>
      </section>

      <section className="lpg-cards" id="sounds">
        <article className="lpg-card">
          <span className="lpg-ico">🌧</span>
          <h3>Weather</h3>
          <p>Eleven kinds of rain, recorded in eleven actual places.</p>
        </article>
        <article className="lpg-card">
          <span className="lpg-ico">🌊</span>
          <h3>Water</h3>
          <p>Shorelines, rivers and one very specific Icelandic waterfall.</p>
        </article>
        <article className="lpg-card">
          <span className="lpg-ico">🎹</span>
          <h3>Tones</h3>
          <p>Generative piano that never repeats and never resolves.</p>
        </article>
      </section>

      <section className="lpg-plans" id="plans">
        <div className="lpg-plan">
          <span className="lpg-tag">Aura Plus</span>
          <h2>
            £4<small>/month</small>
          </h2>
          <ul>
            <li>Every soundscape, offline</li>
            <li>Custom layered mixes</li>
            <li>Sleep timer and alarms</li>
            <li>Two devices at once</li>
          </ul>
          <A className="lpg-btn" href="#plans">
            Start 30 days free
          </A>
        </div>
      </section>

      <footer className="lpg-foot">
        <span>Aura</span>
        <span>hello@aura.fm</span>
      </footer>
    </div>
  );
}
