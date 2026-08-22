/**
 * Sample landing page — CyberCore. Scoped under `.lp-core`.
 *
 * Deliberately a marketing page wearing HUD costume, not a working console.
 * That is the line between this and Dark Mode UI: one borrows the language of
 * an instrument for effect, the other has to actually be usable.
 */
import { A } from './anchors';

/** A wireframe globe: latitude rings squashed by scaleY, longitude by scaleX. */
function Globe() {
  return (
    <svg className="lpf-globe" viewBox="0 0 200 200" aria-hidden="true">
      <circle cx="100" cy="100" r="88" className="rim" />
      <circle cx="100" cy="100" r="88" className="rim faint" />
      {[18, 40, 62, 80].map((ry) => (
        <ellipse key={`lat${ry}`} cx="100" cy="100" rx="88" ry={ry} className="wire" />
      ))}
      {[18, 40, 62, 80].map((rx) => (
        <ellipse key={`lon${rx}`} cx="100" cy="100" rx={rx} ry="88" className="wire" />
      ))}
      <line x1="12" y1="100" x2="188" y2="100" className="wire bright" />
      <circle cx="146" cy="58" r="4" className="node" />
      <circle cx="62" cy="132" r="4" className="node" />
      <circle cx="118" cy="158" r="3" className="node" />
    </svg>
  );
}

export function CyberCoreLanding() {
  return (
    <div className="lp lp-core">
      <div className="lpf-hud" aria-hidden="true">
        <span className="lpf-grid" />
        <span className="lpf-scan" />
        <span className="lpf-bracket tl" />
        <span className="lpf-bracket tr" />
        <span className="lpf-bracket bl" />
        <span className="lpf-bracket br" />
      </div>

      <header className="lpf-nav">
        <span className="lpf-brand">HELIX//</span>
        <nav>
          <A href="#mesh">MESH</A>
          <A href="#spec">SPEC</A>
          <A href="#access">ACCESS</A>
        </nav>
        <span className="lpf-status">
          <i className="lpf-led" />
          LINK OK
        </span>
      </header>

      <section className="lpf-hero">
        <div className="lpf-hero-copy">
          <pre className="lpf-boot" aria-hidden="true">
            {`> init helix.mesh
> handshake ......... OK
> nodes ............. 1,284
> latency ........... 41ms
> ready`}
          </pre>
          <h1>
            AN OPEN
            <br />
            SATELLITE MESH
          </h1>
          <p>
            One thousand two hundred and eighty-four nodes in low orbit, and a
            protocol anybody can implement. No licence, no gatekeeper, no downlink
            fee.
          </p>
          <div className="lpf-ctas">
            <A className="lpf-btn" href="#access">
              REQUEST ACCESS
            </A>
            <A className="lpf-btn ghost" href="#spec">
              read the spec
            </A>
          </div>
        </div>

        <div className="lpf-viz">
          <Globe />
          <span className="lpf-viz-label tl">ORBIT // LEO 550km</span>
          <span className="lpf-viz-label br">SWEEP 00:41:22</span>
        </div>
      </section>

      <div className="lpf-telemetry" id="mesh">
        <span>
          <b>1,284</b>NODES
        </span>
        <span>
          <b>41ms</b>MEDIAN
        </span>
        <span>
          <b>99.98%</b>REACH
        </span>
        <span>
          <b>0¤</b>DOWNLINK
        </span>
      </div>

      <section className="lpf-panels" id="spec">
        <article className="lpf-panel">
          <span className="lpf-idx">[01]</span>
          <h3>OPEN PROTOCOL</h3>
          <p>
            The full spec is 94 pages and published. Implement it in anything that
            can hold a clock and a radio.
          </p>
        </article>
        <article className="lpf-panel">
          <span className="lpf-idx">[02]</span>
          <h3>NO GATEKEEPER</h3>
          <p>
            Node operators are peers. There is no central authority to petition and
            none to be shut down.
          </p>
        </article>
        <article className="lpf-panel wide">
          <span className="lpf-idx">[03]</span>
          <h3>THROUGHPUT / 24H</h3>
          <div className="lpf-bars" aria-hidden="true">
            {[42, 58, 51, 66, 74, 61, 88, 79, 94, 71, 63, 55, 48, 60, 72, 85].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="lpf-axis" aria-hidden="true">
            00:00 ———————————————— 24:00
          </span>
        </article>
      </section>

      <section className="lpf-access" id="access">
        <span className="lpf-prompt" aria-hidden="true">
          $
        </span>
        <h2>REQUEST ACCESS</h2>
        <p>Operators are onboarded in batches of fifty. Current queue: 3 weeks.</p>
        <A className="lpf-btn big" href="#access">
          JOIN THE QUEUE →
        </A>
      </section>

      <footer className="lpf-foot">
        <span>HELIX//OPEN MESH</span>
        <span>SPEC v4.1</span>
        <span>CC BY-SA 4.0</span>
      </footer>
    </div>
  );
}
