/** Sample landing page — Victorian. Scoped under `.lp-vict`. */
import { A } from './anchors';

/** An engraved corner flourish, repeated at each corner of a frame. */
function Corner({ at }: { at: string }) {
  return (
    <svg className={`lpj-corner ${at}`} viewBox="0 0 48 48" aria-hidden="true">
      <path
        d="M2 46 V14 Q2 2 14 2 H46"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 46 V16 Q8 8 16 8 H46"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="16" cy="16" r="2.6" fill="currentColor" />
      <path
        d="M16 30 Q26 30 26 20 Q26 14 20 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
    </svg>
  );
}

export function VictorianLanding() {
  return (
    <div className="lp lp-vict">
      <header className="lpj-nav">
        <span className="lpj-est">Established 1868</span>
        <span className="lpj-brand">
          Holliwell <i>&amp;</i> Daughter
          <small>Apothecary &amp; Botanical Tonics</small>
        </span>
        <span className="lpj-warrant">By Appointment</span>
      </header>

      <div className="lpj-rule triple" aria-hidden="true" />

      <section className="lpj-hero">
        <div className="lpj-frame">
          <Corner at="tl" />
          <Corner at="tr" />
          <Corner at="bl" />
          <Corner at="br" />
          <span className="lpj-orn">❦</span>
          <p className="lpj-kicker">Compounded upon these premises</p>
          <h1>
            Remedies of
            <br />
            Uncommon Virtue
          </h1>
          <p className="lpj-lede">
            Sixteen preparations, each pressed, steeped and bottled by hand in the
            Bermondsey dispensary, precisely as they were in the year of our founding.
          </p>
          <A className="lpj-cta" href="#order">
            Consult the Catalogue
          </A>
          <span className="lpj-orn low">⁂</span>
        </div>
      </section>

      <section className="lpj-wares" id="wares">
        <h2>
          <span className="lpj-flank" aria-hidden="true">
            ❧
          </span>
          The Preparations
          <span className="lpj-flank" aria-hidden="true">
            ❧
          </span>
        </h2>
        <div className="lpj-grid">
          <article className="lpj-label">
            <span className="lpj-no">No. I</span>
            <h3>Restorative Elixir</h3>
            <p className="lpj-lat">Tincture of gentian, angelica &amp; bitter orange</p>
            <div className="lpj-hair" aria-hidden="true" />
            <p>
              Taken morning and night against low spirits, fatigue of the mind, and
              the general disagreeableness of February.
            </p>
            <span className="lpj-price">Three shillings</span>
          </article>
          <article className="lpj-label">
            <span className="lpj-no">No. VII</span>
            <h3>Balm of Quiet Hours</h3>
            <p className="lpj-lat">Lavender, valerian &amp; hop flower</p>
            <div className="lpj-hair" aria-hidden="true" />
            <p>
              A single spoonful before retiring. Not to be taken by those operating
              looms, carriages or heavy machinery.
            </p>
            <span className="lpj-price">Two shillings, sixpence</span>
          </article>
          <article className="lpj-label">
            <span className="lpj-no">No. XI</span>
            <h3>Winter Pastilles</h3>
            <p className="lpj-lat">Horehound, honey &amp; sweet fennel</p>
            <div className="lpj-hair" aria-hidden="true" />
            <p>
              For the throat in fog and frost. Sold in a tin of forty, which the
              purchaser is encouraged to return for refilling.
            </p>
            <span className="lpj-price">One shilling</span>
          </article>
        </div>
      </section>

      <section className="lpj-testimony">
        <span className="lpj-orn">✥</span>
        <p>
          “I have taken the Elixir these eleven years and have not once been
          disagreeable at breakfast, which my wife holds to be miraculous.”
        </p>
        <cite>— Mr. E. Pargeter, of Southwark</cite>
      </section>

      <section className="lpj-dispensary">
        <div className="lpj-col">
          <h4>The Dispensary</h4>
          <p>
            41 Snowsfields
            <br />
            Bermondsey, London
          </p>
        </div>
        <div className="lpj-col">
          <h4>Hours of Business</h4>
          <p>
            Monday to Saturday
            <br />
            Nine until seven
          </p>
        </div>
        <div className="lpj-col">
          <h4>Correspondence</h4>
          <p>
            Orders by post
            <br />
            returned within the week
          </p>
        </div>
      </section>

      <footer className="lpj-foot" id="order">
        <div className="lpj-rule triple" aria-hidden="true" />
        <span className="lpj-brand small">Holliwell &amp; Daughter</span>
        <p>Purveyors of botanical preparations · London · MDCCCLXVIII</p>
      </footer>
    </div>
  );
}
