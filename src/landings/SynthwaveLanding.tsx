/** Sample landing page — Synthwave. Scoped under `.lp-synth`. */
import { A } from './anchors';

export function SynthwaveLanding() {
  return (
    <div className="lp lp-synth">
      {/* the two fixed devices of the style: a banded sun, and a grid that
          recedes to a vanishing point on the horizon */}
      <div className="lps2-sky" aria-hidden="true">
        <span className="lps2-sun" />
        <span className="lps2-stars" />
        <span className="lps2-mtn" />
        <span className="lps2-horizon" />
        <span className="lps2-floor" />
        <span className="lps2-vhs" />
      </div>

      <header className="lps2-nav">
        <span className="lps2-brand">NIGHT DRIVE</span>
        <nav>
          <A href="#shows">SHOWS</A>
          <A href="#tapes">TAPES</A>
        </nav>
        <A className="lps2-btn sm" href="#listen">
          LISTEN LIVE
        </A>
      </header>

      <section className="lps2-hero">
        <p className="lps2-eyebrow">24 hours · no adverts · since 2014</p>
        <h1 className="lps2-chrome">NIGHT DRIVE FM</h1>
        <p className="lps2-lede">
          Synthwave, outrun and italo, played end to end by people who own the
          records. Best at 2am, on a motorway, going nowhere in particular.
        </p>
        <div className="lps2-ctas">
          <A className="lps2-btn" href="#listen">
            ▶ LISTEN LIVE
          </A>
          <A className="lps2-btn ghost" href="#shows">
            tonight&apos;s schedule
          </A>
        </div>

        <div className="lps2-now">
          <span className="lps2-now-l">ON AIR</span>
          <span className="lps2-now-t">
            <b>Miracle Mile</b>
            <i>Cassette Coast · 1986</i>
          </span>
          <span className="lps2-eq" aria-hidden="true">
            <i /> <i /> <i /> <i /> <i />
          </span>
        </div>
      </section>

      <section className="lps2-shows" id="shows">
        <h2 className="lps2-chrome">TONIGHT</h2>
        <div className="lps2-grid">
          <article className="lps2-card">
            <span className="lps2-time">22:00</span>
            <h3>Neon Corridor</h3>
            <p>Two hours of slow outrun for the long way home.</p>
          </article>
          <article className="lps2-card">
            <span className="lps2-time">00:00</span>
            <h3>Chrome Hours</h3>
            <p>Italo, arpeggios and one unbroken hour of nothing but bass.</p>
          </article>
          <article className="lps2-card">
            <span className="lps2-time">02:00</span>
            <h3>The Long Dark</h3>
            <p>Ambient synth until sunrise. No presenter. No talking at all.</p>
          </article>
        </div>
      </section>

      <section className="lps2-tapes" id="tapes">
        <div className="lps2-tape-copy">
          <h2 className="lps2-chrome">TAPES</h2>
          <p>
            Four compilations a year, dubbed to real cassette in a garage in
            Rotterdam. Ships worldwide. Sells out most times.
          </p>
          <A className="lps2-btn" href="#listen">
            BROWSE THE RACK
          </A>
        </div>
        <div className="lps2-rack" aria-hidden="true">
          <span className="lps2-tape t1" />
          <span className="lps2-tape t2" />
          <span className="lps2-tape t3" />
        </div>
      </section>

      <footer className="lps2-foot" id="listen">
        <h2 className="lps2-chrome">DRIVE SAFE</h2>
        <p>NIGHT DRIVE FM · BROADCASTING FROM NOWHERE · ALWAYS ON</p>
      </footer>
    </div>
  );
}
