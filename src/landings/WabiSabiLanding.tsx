/**
 * Sample landing page — Wabi Sabi. Scoped under `.lp-wabi`.
 *
 * Minimalism removes until the page is perfect. This leaves the flaw in: the
 * grid is off-centre on purpose, the vessel is not symmetrical, and the crack
 * is repaired in gold rather than hidden.
 */
import { A } from './anchors';

export function WabiSabiLanding() {
  return (
    <div className="lp lp-wabi">
      <header className="lpw2-nav">
        <span className="lpw2-brand">瀬戸 · Seto</span>
        <nav>
          <A href="#kiln">The kiln</A>
          <A href="#pieces">Pieces</A>
          <A href="#wait">Waiting list</A>
        </nav>
      </header>

      <section className="lpw2-hero">
        <div className="lpw2-hero-copy">
          <p className="lpw2-kicker">Hand-thrown teaware · four firings a year</p>
          <h1>
            Nothing here
            <br />
            is quite even
          </h1>
          <p className="lpw2-lede">
            One kiln, one potter, and a wood firing that decides most of it. Every
            piece leaves with the marks of how it was made, because removing them
            would take the last interesting thing away.
          </p>
          <A className="lpw2-cta" href="#wait">
            Join the waiting list
          </A>
        </div>

        {/* the vessel: irregular radii, an off-centre glaze pool, one gold seam */}
        <div className="lpw2-vessel-wrap" aria-hidden="true">
          <span className="lpw2-vessel">
            <i className="glaze" />
            <i className="seam" />
          </span>
          <span className="lpw2-shadow" />
        </div>
      </section>

      <section className="lpw2-kiln" id="kiln">
        <p className="lpw2-ma">
          The kiln is opened four times a year. Roughly a third of what comes out is
          kept.
        </p>
      </section>

      <section className="lpw2-pieces" id="pieces">
        <article className="lpw2-piece a">
          <span className="lpw2-form f1" aria-hidden="true" />
          <h3>Yunomi</h3>
          <p>Tea cup, no handle. Ash glaze, thrown thin, always slightly oval.</p>
          <span className="lpw2-note">£46 · fired March</span>
        </article>
        <article className="lpw2-piece b">
          <span className="lpw2-form f2" aria-hidden="true" />
          <h3>Chawan</h3>
          <p>
            Tea bowl. The foot is cut by hand, which is why no two sit at the same
            angle on a table.
          </p>
          <span className="lpw2-note">£120 · fired March</span>
        </article>
        <article className="lpw2-piece c">
          <span className="lpw2-form f3" aria-hidden="true" />
          <h3>Kintsugi repair</h3>
          <p>
            Send us something broken. It comes back mended in urushi and gold, along
            the line it chose to break on.
          </p>
          <span className="lpw2-note">from £180 · six weeks</span>
        </article>
      </section>

      <section className="lpw2-quiet">
        <p>
          “The crack is not the failure of the bowl. It is the part of the bowl that
          has a history.”
        </p>
      </section>

      <footer className="lpw2-foot" id="wait">
        <span className="lpw2-mark" aria-hidden="true" />
        <p className="lpw2-fine">
          Seto · a workshop in Todmorden · seto@seto.studio
          <br />
          The list is long and we are not sorry about it.
        </p>
      </footer>
    </div>
  );
}
