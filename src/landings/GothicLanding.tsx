/** Sample landing page — Gothic. Scoped under `.lp-goth`. */
import { useId } from 'react';
import { A } from './anchors';

/** A traceried lancet window. The pointed arch is the whole style in one shape. */
function Lancet({ className }: { className?: string }) {
  // the window is rendered more than once, so the clip needs a unique id
  const clip = useId();
  return (
    <svg className={`lph-lancet ${className ?? ''}`} viewBox="0 0 120 260" aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <path d="M60 4 C 100 44, 116 78, 116 120 V252 H4 V120 C4 78, 20 44, 60 4 Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect x="0" y="0" width="120" height="260" className="glass-a" />
        <rect x="0" y="60" width="120" height="70" className="glass-b" />
        <rect x="0" y="150" width="120" height="60" className="glass-c" />
        <circle cx="60" cy="108" r="26" className="glass-d" />
        {/* leading */}
        <g className="lead">
          <line x1="60" y1="0" x2="60" y2="260" />
          <line x1="0" y1="60" x2="120" y2="60" />
          <line x1="0" y1="130" x2="120" y2="130" />
          <line x1="0" y1="196" x2="120" y2="196" />
          <line x1="30" y1="0" x2="30" y2="260" />
          <line x1="90" y1="0" x2="90" y2="260" />
        </g>
      </g>
      <path
        d="M60 4 C 100 44, 116 78, 116 120 V252 H4 V120 C4 78, 20 44, 60 4 Z"
        className="stone"
      />
      <path d="M60 40 C 88 70, 98 92, 98 120" className="mullion" />
      <path d="M60 40 C 32 70, 22 92, 22 120" className="mullion" />
    </svg>
  );
}

export function GothicLanding() {
  return (
    <div className="lp lp-goth">
      <header className="lph-nav">
        <span className="lph-brand">St. Augustine&apos;s</span>
        <nav>
          <A href="#programme">Programme</A>
          <A href="#hall">The Hall</A>
          <A href="#visit">Visit</A>
        </nav>
      </header>

      <div className="lph-rule" aria-hidden="true" />

      <section className="lph-hero">
        <Lancet className="side left" />
        <div className="lph-hero-copy">
          <p className="lph-kicker">Deconsecrated 1974 · Reopened as a hall 1998</p>
          <h1>
            Music beneath
            <br />
            a stone roof
          </h1>
          <p className="lph-lede">
            Fourteenth-century nave, nine-second reverb, four hundred seats and no
            amplification of any kind. What you hear is the building doing it.
          </p>
          <A className="lph-cta" href="#programme">
            See the programme
          </A>
        </div>
        <Lancet className="side right" />
      </section>

      <section className="lph-programme" id="programme">
        <h2>
          <span className="lph-drop">A</span>utumn Programme
        </h2>
        <ul className="lph-list">
          <li>
            <span className="lph-date">
              <b>04</b>
              <i>Oct</i>
            </span>
            <span className="lph-what">
              <b>Tallis · Spem in alium</b>
              <i>Forty voices, one per part, sung from the galleries</i>
            </span>
            <span className="lph-price">£24</span>
          </li>
          <li>
            <span className="lph-date">
              <b>18</b>
              <i>Oct</i>
            </span>
            <span className="lph-what">
              <b>Hildegard of Bingen · by candlelight</b>
              <i>Plainchant, no electric light in the building after seven</i>
            </span>
            <span className="lph-price">£19</span>
          </li>
          <li>
            <span className="lph-date">
              <b>09</b>
              <i>Nov</i>
            </span>
            <span className="lph-what">
              <b>Górecki · Symphony No. 3</b>
              <i>Chamber reduction, with the Ossian Quartet</i>
            </span>
            <span className="lph-price">£28</span>
          </li>
          <li>
            <span className="lph-date">
              <b>21</b>
              <i>Dec</i>
            </span>
            <span className="lph-what">
              <b>The Longest Night</b>
              <i>Doors at eleven, first note at midnight, out by three</i>
            </span>
            <span className="lph-price">£32</span>
          </li>
        </ul>
      </section>

      <section className="lph-hall" id="hall">
        <div className="lph-arcade" aria-hidden="true">
          <span className="lph-pier" />
          <span className="lph-pier" />
          <span className="lph-pier" />
          <span className="lph-pier" />
          <span className="lph-pier" />
        </div>
        <p className="lph-verse">
          “The stone was cut for singing before anybody thought to sit down in it.”
        </p>
      </section>

      <footer className="lph-foot" id="visit">
        <div className="lph-cols">
          <div>
            <h4>Where</h4>
            <p>
              Fossgate, York
              <br />
              YO1 9TA
            </p>
          </div>
          <div>
            <h4>Doors</h4>
            <p>
              One hour before
              <br />
              each performance
            </p>
          </div>
          <div>
            <h4>Access</h4>
            <p>
              Level entry, west door
              <br />
              Induction loop throughout
            </p>
          </div>
        </div>
        <span className="lph-brand small">St. Augustine&apos;s</span>
      </footer>
    </div>
  );
}
