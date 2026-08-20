/** Sample landing page — Scrapbook. Scoped under `.lp-scrap`. */
import { A } from './anchors';

export function ScrapbookLanding() {
  return (
    <div className="lp lp-scrap">
      <header className="lpk-nav">
        <span className="lpk-brand">
          Wayfare
          <i className="lpk-tape" aria-hidden="true" />
        </span>
        <nav>
          <A href="#walks">The Walks</A>
          <A href="#kit">Kit List</A>
          <A href="#join">Join Us</A>
        </nav>
      </header>

      <section className="lpk-hero">
        <div className="lpk-hero-copy">
          <p className="lpk-eyebrow">A walking club · est. 2018 · Peak District</p>
          <h1>
            We walk on
            <span className="lpk-hand"> Sundays,</span>
            <br />
            rain included.
          </h1>
          <p className="lpk-lede">
            Forty of us, one flask each, no strava. Twelve miles if the weather holds
            and six if it doesn&apos;t. Everybody is welcome and nobody is fast.
          </p>
          <A className="lpk-cta" href="#join">
            Come on the next one
          </A>
          <span className="lpk-doodle" aria-hidden="true">
            ↘
          </span>
        </div>

        <div className="lpk-stack">
          <figure className="lpk-photo p1">
            <i className="lpk-tape corner" aria-hidden="true" />
            <span className="lpk-img i1" />
            <figcaption>Kinder Scout — the cold one</figcaption>
          </figure>
          <figure className="lpk-photo p2">
            <i className="lpk-tape corner" aria-hidden="true" />
            <span className="lpk-img i2" />
            <figcaption>Mam Tor, 6am</figcaption>
          </figure>
        </div>
      </section>

      <div className="lpk-torn" aria-hidden="true" />

      <section className="lpk-walks" id="walks">
        <h2 className="lpk-hand big">Recent walks</h2>
        <div className="lpk-cards">
          <article className="lpk-card c1">
            <span className="lpk-pin" aria-hidden="true" />
            <span className="lpk-img i3" />
            <h3>Stanage Edge</h3>
            <p>9 miles · gritstone · one very determined sheep</p>
            <span className="lpk-note">“Best flask conditions all year.” — Dai</span>
          </article>
          <article className="lpk-card c2">
            <span className="lpk-pin" aria-hidden="true" />
            <span className="lpk-img i4" />
            <h3>Dovedale</h3>
            <p>7 miles · stepping stones · two wet boots</p>
            <span className="lpk-note">“I fell in. Worth it.” — Priya</span>
          </article>
          <article className="lpk-card c3">
            <span className="lpk-pin" aria-hidden="true" />
            <span className="lpk-img i5" />
            <h3>Win Hill</h3>
            <p>11 miles · big views · questionable navigation</p>
            <span className="lpk-note">“We were never lost.” — Tom, lost</span>
          </article>
        </div>
      </section>

      <section className="lpk-ticket" id="kit">
        <div className="lpk-stub">
          <span className="lpk-stub-l">
            <b>KIT LIST</b>
            <small>bring these six things</small>
          </span>
          <ul>
            <li>Boots you have already broken in</li>
            <li>Waterproof, actual one</li>
            <li>Flask — non-negotiable</li>
            <li>Paper map for the section without signal</li>
            <li>Something to share at the top</li>
            <li>Spare socks, trust us</li>
          </ul>
        </div>
      </section>

      <footer className="lpk-foot" id="join">
        <h2 className="lpk-hand big">See you Sunday.</h2>
        <p>hello@wayfare.club · we meet at the Hope car park, 8:15am, every week</p>
      </footer>
    </div>
  );
}
