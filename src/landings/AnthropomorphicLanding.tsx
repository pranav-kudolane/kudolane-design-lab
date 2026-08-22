/** Sample landing page — Anthropomorphic. Scoped under `.lp-anthro`. */
import { A } from './anchors';

type Mood = 'calm' | 'watching' | 'alert';

/**
 * The mascot is the data. Capy's face is driven by the same status the page is
 * reporting — which is the whole argument for the style: a character that never
 * reacts is a sticker, not a character.
 */
function Capy({ mood, className }: { mood: Mood; className?: string }) {
  return (
    <svg
      className={`lpa-capy ${className ?? ''}`}
      data-mood={mood}
      viewBox="0 0 120 112"
      role="img"
      aria-label={`Capy looking ${mood}`}
    >
      <ellipse className="ear" cx="26" cy="26" rx="11" ry="10" />
      <ellipse className="ear" cx="94" cy="26" rx="11" ry="10" />
      <ellipse className="head" cx="60" cy="58" rx="46" ry="40" />
      <ellipse className="muzzle" cx="60" cy="76" rx="26" ry="18" />
      <ellipse className="nostril" cx="52" cy="70" rx="2.6" ry="2" />
      <ellipse className="nostril" cx="68" cy="70" rx="2.6" ry="2" />

      {mood === 'calm' ? (
        <>
          <path className="eye-line" d="M32 46 q9 -8 18 0" />
          <path className="eye-line" d="M70 46 q9 -8 18 0" />
          <path className="mouth" d="M50 84 q10 7 20 0" />
        </>
      ) : (
        <>
          <circle className="eye" cx="41" cy="46" r="8" />
          <circle className="eye" cx="79" cy="46" r="8" />
          <circle className="pupil" cx={mood === 'alert' ? 41 : 44} cy="47" r="3.6" />
          <circle className="pupil" cx={mood === 'alert' ? 79 : 82} cy="47" r="3.6" />
          {mood === 'alert' && (
            <>
              <path className="brow" d="M31 33 l17 6" />
              <path className="brow" d="M89 33 l-17 6" />
              <ellipse className="mouth-o" cx="60" cy="85" rx="6" ry="7" />
            </>
          )}
          {mood === 'watching' && <path className="mouth" d="M52 84 q8 4 16 0" />}
        </>
      )}
    </svg>
  );
}

export function AnthropomorphicLanding() {
  return (
    <div className="lp lp-anthro">
      <header className="lpa-nav">
        <span className="lpa-brand">
          <Capy mood="calm" className="tiny" />
          Capy
        </span>
        <nav>
          <A href="#moods">How it works</A>
          <A href="#status">Status pages</A>
        </nav>
        <A className="lpa-btn sm" href="#start">
          Start free
        </A>
      </header>

      <section className="lpa-hero">
        <div className="lpa-hero-copy">
          <span className="lpa-pill">Uptime monitoring · 30s checks</span>
          <h1>
            Your status page,
            <br />
            with a face.
          </h1>
          <p>
            Capy watches your endpoints and pulls the appropriate expression. One
            glance across the office and everybody already knows.
          </p>
          <div className="lpa-ctas">
            <A className="lpa-btn" href="#start">
              Start free
            </A>
            <A className="lpa-btn ghost" href="#moods">
              Meet Capy
            </A>
          </div>
        </div>

        <div className="lpa-stage">
          <span className="lpa-shadow" aria-hidden="true" />
          <Capy mood="calm" className="big" />
          <span className="lpa-speech">everything is fine</span>
        </div>
      </section>

      <section className="lpa-moods" id="moods">
        <h2>Three faces, that&apos;s the whole product</h2>
        <div className="lpa-grid">
          <article className="lpa-card c1">
            <Capy mood="calm" className="med" />
            <h3>Calm</h3>
            <p>Everything responding under 400ms. Capy is having a lovely time.</p>
            <span className="lpa-chip ok">all systems normal</span>
          </article>
          <article className="lpa-card c2">
            <Capy mood="watching" className="med" />
            <h3>Watching</h3>
            <p>Something is slower than usual. Not broken. Being kept an eye on.</p>
            <span className="lpa-chip warn">degraded · 1 service</span>
          </article>
          <article className="lpa-card c3">
            <Capy mood="alert" className="med" />
            <h3>Alert</h3>
            <p>An endpoint is down. Capy has already texted whoever is on call.</p>
            <span className="lpa-chip bad">outage · api.yoursite</span>
          </article>
        </div>
      </section>

      <section className="lpa-status" id="status">
        <div className="lpa-panel">
          <div className="lpa-panel-head">
            <Capy mood="calm" className="tiny" />
            <b>status.yoursite.com</b>
            <span>updated 14s ago</span>
          </div>
          <ul>
            <li>
              <i className="lpa-dot ok" aria-hidden="true" />
              Web app<b>99.99%</b>
            </li>
            <li>
              <i className="lpa-dot ok" aria-hidden="true" />
              API<b>99.97%</b>
            </li>
            <li>
              <i className="lpa-dot warn" aria-hidden="true" />
              Image CDN<b>99.51%</b>
            </li>
            <li>
              <i className="lpa-dot ok" aria-hidden="true" />
              Webhooks<b>100%</b>
            </li>
          </ul>
        </div>
      </section>

      <footer className="lpa-foot" id="start">
        <Capy mood="calm" className="med wave" />
        <h2>Give your uptime a personality.</h2>
        <A className="lpa-btn" href="#start">
          Start free — 10 monitors
        </A>
        <p>No card needed · Capy is included at every tier</p>
      </footer>
    </div>
  );
}
