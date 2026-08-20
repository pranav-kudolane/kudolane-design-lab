/**
 * Sample landing page — Minimalism.
 * Every class is scoped under `.lp-min`, and the root is an inline-size
 * container, so the page sizes off its own width. That makes it identical
 * whether it is framed inside the detail view or filling the screen.
 */
import { A } from './anchors';

export function MinimalismLanding() {
  return (
    <div className="lp lp-min">
      <header className="lpm-nav">
        <span className="lpm-brand">Ora</span>
        <nav>
          <A href="#work">Work</A>
          <A href="#studio">Studio</A>
          <A href="#contact">Contact</A>
        </nav>
      </header>

      <section className="lpm-hero">
        <p className="lpm-eyebrow">Architecture, Copenhagen</p>
        <h1>
          We build quiet
          <br />
          buildings.
        </h1>
        <p className="lpm-lede">
          Ora is a practice of nine. We take four projects a year and give each one
          the attention it deserves.
        </p>
        <A className="lpm-cta" href="#work">
          See the work
        </A>
      </section>

      <section className="lpm-work" id="work">
        <div className="lpm-item">
          <div className="lpm-shot s1" />
          <h3>Havn House</h3>
          <p>Private residence · 2025</p>
        </div>
        <div className="lpm-item">
          <div className="lpm-shot s2" />
          <h3>Nord Library</h3>
          <p>Public · 2024</p>
        </div>
        <div className="lpm-item">
          <div className="lpm-shot s3" />
          <h3>Studio Lys</h3>
          <p>Workspace · 2024</p>
        </div>
      </section>

      <section className="lpm-say" id="studio">
        <p>
          “They removed more than they added. That is the whole job, and almost
          nobody does it.”
        </p>
        <cite>Marta Lind — client, Havn House</cite>
      </section>

      <footer className="lpm-foot" id="contact">
        <span>Ora</span>
        <span>studio@ora.dk</span>
        <span>+45 00 00 00</span>
      </footer>
    </div>
  );
}
