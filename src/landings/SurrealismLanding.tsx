/** Sample landing page — Surrealism. Scoped under `.lp-surr`. */
import { A } from './anchors';

export function SurrealismLanding() {
  return (
    <div className="lp lp-surr">
      <div className="lpu-sky" aria-hidden="true">
        <span className="lpu-sun" />
        <span className="lpu-cloud c1" />
        <span className="lpu-cloud c2" />
        <span className="lpu-cloud c3" />
        <span className="lpu-door" />
        <span className="lpu-stair" />
        <span className="lpu-bottle">
          <i className="cap" />
          <i className="body" />
        </span>
        <span className="lpu-eye">
          <i />
        </span>
      </div>

      <header className="lpu-nav">
        <span className="lpu-brand">Nocturne</span>
        <nav>
          <A href="#notes">The Notes</A>
          <A href="#story">The Story</A>
          <A href="#buy">Acquire</A>
        </nav>
      </header>

      <section className="lpu-hero">
        <p className="lpu-eyebrow">Eau de parfum · 50ml</p>
        <h1>
          A perfume for <span className="lpu-tilt">the hour</span> that does not
          exist.
        </h1>
        <p className="lpu-lede">
          Bottled somewhere between 3 and 4 in the morning. Wear it and people will
          ask where you have been. You will not have an answer.
        </p>
        <A className="lpu-cta" href="#buy">
          Acquire a bottle — £180
        </A>
      </section>

      <section className="lpu-notes" id="notes">
        <article className="lpu-note">
          <span className="lpu-glyph g1" aria-hidden="true" />
          <h3>Top — Cold Air</h3>
          <p>Bergamot, wet stone, and the smell of a window left open in November.</p>
        </article>
        <article className="lpu-note">
          <span className="lpu-glyph g2" aria-hidden="true" />
          <h3>Heart — Somewhere Else</h3>
          <p>Iris, fig leaf, and one note our perfumer refuses to name in writing.</p>
        </article>
        <article className="lpu-note">
          <span className="lpu-glyph g3" aria-hidden="true" />
          <h3>Base — The Long Way Home</h3>
          <p>Vetiver, ambergris, warm cedar. It stays on a scarf for nine days.</p>
        </article>
      </section>

      <section className="lpu-quote" id="story">
        <p>
          “We were not trying to make a perfume. We were trying to make a door, and
          this is what came through it.”
        </p>
        <cite>Ines Aubry — founder</cite>
      </section>

      <footer className="lpu-foot" id="buy">
        <h2>Nocturne</h2>
        <p>Made in Grasse · Shipped in a velvet box · Do not wear it to meetings</p>
      </footer>
    </div>
  );
}
