/** Sample landing page — Graffiti. Scoped under `.lp-graff`. */
import { A } from './anchors';

export function GraffitiLanding() {
  return (
    <div className="lp lp-graff">
      <div className="lpg2-wall" aria-hidden="true">
        <span className="lpg2-grime" />
        <span className="lpg2-buff" />
      </div>

      <header className="lpg2-nav">
        <span className="lpg2-brand">WALLS UP</span>
        <nav>
          <A href="#lineup">LINE-UP</A>
          <A href="#map">THE MAP</A>
        </nav>
        <A className="lpg2-btn sm" href="#tickets">
          TICKETS
        </A>
      </header>

      <section className="lpg2-hero">
        <span className="lpg2-stencil" aria-hidden="true">
          3 DAYS · 40 WALLS · ONE CITY
        </span>
        <h1 className="lpg2-throw">
          <span className="l1">WALLS</span>
          <span className="l2">UP</span>
        </h1>
        <span className="lpg2-tag">— paint it before they buff it</span>
        <p className="lpg2-lede">
          Forty legal walls across the northern quarter, forty writers, three days,
          and a bucket of caps at the door. Bring your own blackbook.
        </p>
        <div className="lpg2-ctas">
          <A className="lpg2-btn" href="#tickets">
            GET A WRISTBAND
          </A>
          <A className="lpg2-btn ghost" href="#map">
            see the map
          </A>
        </div>
        <span className="lpg2-drip d1" aria-hidden="true" />
        <span className="lpg2-drip d2" aria-hidden="true" />
        <span className="lpg2-drip d3" aria-hidden="true" />
      </section>

      <div className="lpg2-strip" aria-hidden="true">
        <div className="lpg2-track">
          <span>★ FRI 12 ★ SAT 13 ★ SUN 14 ★ FREE ENTRY BEFORE NOON ★</span>
          <span>★ FRI 12 ★ SAT 13 ★ SUN 14 ★ FREE ENTRY BEFORE NOON ★</span>
        </div>
      </div>

      <section className="lpg2-lineup" id="lineup">
        <h2 className="lpg2-throw sm">
          <span className="l1">LINE-UP</span>
        </h2>
        <div className="lpg2-grid">
          <article className="lpg2-slap s1">
            <span className="lpg2-crew">CREW · MCR</span>
            <h3>SNARE</h3>
            <p>Twelve metres of wildstyle on the canal wall. Bring a wide lens.</p>
          </article>
          <article className="lpg2-slap s2">
            <span className="lpg2-crew">CREW · BER</span>
            <h3>ODA</h3>
            <p>Stencil portraits, four layers, cut on site while you watch.</p>
          </article>
          <article className="lpg2-slap s3">
            <span className="lpg2-crew">CREW · LDN</span>
            <h3>HALFPINT</h3>
            <p>Characters and fat caps only. No outlines. Nobody knows how.</p>
          </article>
        </div>
      </section>

      <section className="lpg2-map" id="map">
        <div className="lpg2-map-copy">
          <h2 className="lpg2-throw sm">
            <span className="l1">THE MAP</span>
          </h2>
          <p>
            Every wall is pinned, permissioned and paid for. Paint anything not on
            the map and it is on you, not on us.
          </p>
          <ul>
            <li>40 legal walls, all within a mile</li>
            <li>Caps and paint at cost from the marquee</li>
            <li>Ladders and cherry pickers, first come</li>
            <li>Buffed clean the following Tuesday</li>
          </ul>
        </div>
        <div className="lpg2-pinboard" aria-hidden="true">
          <span className="lpg2-pin p1" />
          <span className="lpg2-pin p2" />
          <span className="lpg2-pin p3" />
          <span className="lpg2-pin p4" />
          <span className="lpg2-pin p5" />
        </div>
      </section>

      <footer className="lpg2-foot" id="tickets">
        <h2 className="lpg2-throw">
          <span className="l1">GET UP</span>
        </h2>
        <A className="lpg2-btn big" href="#tickets">
          WRISTBAND — £18
        </A>
        <p>WALLS UP · NORTHERN QUARTER · 12—14 SEPTEMBER</p>
      </footer>
    </div>
  );
}
