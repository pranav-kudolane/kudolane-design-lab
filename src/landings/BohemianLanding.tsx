/** Sample landing page — Bohemian. Scoped under `.lp-boho`. */
import { A } from './anchors';

/** Hand-drawn sun. Line art does the work a photograph would in other styles. */
function Sun() {
  return (
    <svg className="lpr-sun" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <line
            key={i}
            x1={60 + Math.cos(a) * 36}
            y1={60 + Math.sin(a) * 36}
            x2={60 + Math.cos(a) * 50}
            y2={60 + Math.sin(a) * 50}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function BohemianLanding() {
  return (
    <div className="lp lp-boho">
      <header className="lpr-nav">
        <span className="lpr-brand">Casa Verde</span>
        <nav>
          <A href="#rooms">Rooms</A>
          <A href="#table">The Table</A>
          <A href="#stay">Stay</A>
        </nav>
      </header>

      <section className="lpr-hero">
        <div className="lpr-hero-copy">
          <Sun />
          <p className="lpr-eyebrow">Las Alpujarras · Andalusia</p>
          <h1>
            A slow house on a
            <em> warm hill</em>
          </h1>
          <p className="lpr-lede">
            Six rooms, one long table, and a courtyard that has been shaded by the same
            fig tree since 1890. No televisions. The wifi works, but only just.
          </p>
          <A className="lpr-cta" href="#stay">
            Check availability
          </A>
        </div>

        {/* arch-topped plates are the shape language of the whole style */}
        <div className="lpr-arches" aria-hidden="true">
          <span className="lpr-arch a1" />
          <span className="lpr-arch a2" />
        </div>
      </section>

      <section className="lpr-rooms" id="rooms">
        <h2>Six rooms, no two alike</h2>
        <div className="lpr-grid">
          <article className="lpr-room">
            <span className="lpr-arch small r1" aria-hidden="true" />
            <h3>Higuera</h3>
            <p>Ground floor, opens onto the fig courtyard. Lime-washed walls, cool all day.</p>
            <span className="lpr-price">from €140</span>
          </article>
          <article className="lpr-room">
            <span className="lpr-arch small r2" aria-hidden="true" />
            <h3>Alta</h3>
            <p>Top of the house. A terrace, a hammock, and the whole valley below it.</p>
            <span className="lpr-price">from €185</span>
          </article>
          <article className="lpr-room">
            <span className="lpr-arch small r3" aria-hidden="true" />
            <h3>Taller</h3>
            <p>The old pottery workshop. Kiln still in the corner, bed where the wheel was.</p>
            <span className="lpr-price">from €160</span>
          </article>
        </div>
      </section>

      <section className="lpr-table" id="table">
        <div className="lpr-table-copy">
          <h2>One table, eight o&apos;clock</h2>
          <p>
            Dinner is whatever came up the hill that morning, cooked by Rosa, eaten by
            everybody together. You will be sat next to a stranger. This is on purpose
            and it is the best part.
          </p>
          <ul>
            <li>Bread from the village oven, daily</li>
            <li>Oil from the grove below the house</li>
            <li>Wine from four kilometres away</li>
            <li>Nobody eats alone unless they ask to</li>
          </ul>
        </div>
        <span className="lpr-weave" aria-hidden="true" />
      </section>

      <footer className="lpr-foot" id="stay">
        <h2>Come for a week</h2>
        <p>Casa Verde · Cáñar, Granada · hola@casaverde.es</p>
      </footer>
    </div>
  );
}
