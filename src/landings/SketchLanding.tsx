/** Sample landing page — Conceptual Sketch. Scoped under `.lp-sketch`. */
import { A } from './anchors';

/** A hand-drawn underline. An SVG path wobbles in a way a border never will. */
function Squiggle() {
  return (
    <svg className="lpz-squiggle" viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2 9 C 40 3, 78 12, 116 7 S 192 2, 230 8 S 282 12, 298 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SketchLanding() {
  return (
    <div className="lp lp-sketch">
      <header className="lpz-nav">
        <span className="lpz-brand">
          First Draft
          <i className="lpz-brand-mark" aria-hidden="true" />
        </span>
        <nav>
          <A href="#weeks">The six weeks</A>
          <A href="#work">What you make</A>
          <A href="#apply">Apply</A>
        </nav>
      </header>

      <section className="lpz-hero">
        <div className="lpz-hero-copy">
          <p className="lpz-eyebrow">A six-week evening course · cohort 09 · March</p>
          <h1>
            Learn to think
            <span className="lpz-marked">
              on paper
              <Squiggle />
            </span>
            before you open Figma.
          </h1>
          <p className="lpz-lede">
            Most bad products are bad decisions that got beautifully rendered. Six
            weeks of sketching, arguing and throwing things away — then, and only
            then, a screen.
          </p>
          <A className="lpz-cta" href="#apply">
            Apply for cohort 09
          </A>
          <span className="lpz-note n1">
            ← 14 places, we mean it
          </span>
        </div>

        <div className="lpz-wire">
          <span className="lpz-label">a wireframe, deliberately ugly</span>
          <div className="lpz-frame">
            <span className="lpz-bar" />
            <div className="lpz-body">
              <span className="lpz-box tall" />
              <div className="lpz-stack">
                <span className="lpz-line w80" />
                <span className="lpz-line w60" />
                <span className="lpz-line w70" />
                <span className="lpz-btnbox" />
              </div>
            </div>
          </div>
          <span className="lpz-note n2">this box is a question, not a decision →</span>
        </div>
      </section>

      <section className="lpz-weeks" id="weeks">
        <h2>
          Six weeks, in order
          <i className="lpz-h-rule" aria-hidden="true" />
        </h2>
        <div className="lpz-flow">
          <article className="lpz-step">
            <span className="lpz-num">01</span>
            <h3>The problem, badly stated</h3>
            <p>You write it wrong first. Everyone does. We find out how wrong on night one.</p>
          </article>
          <span className="lpz-arrow" aria-hidden="true">
            →
          </span>
          <article className="lpz-step">
            <span className="lpz-num">02</span>
            <h3>Forty sketches</h3>
            <p>Quantity before quality. Nobody defends anything they drew in week two.</p>
          </article>
          <span className="lpz-arrow" aria-hidden="true">
            →
          </span>
          <article className="lpz-step">
            <span className="lpz-num">03</span>
            <h3>Kill thirty-seven</h3>
            <p>The hard week. You argue for three, out loud, to people who will push back.</p>
          </article>
        </div>
        <div className="lpz-flow second">
          <article className="lpz-step">
            <span className="lpz-num">04</span>
            <h3>Paper prototype</h3>
            <p>Scissors and index cards. Six strangers try to use it and mostly cannot.</p>
          </article>
          <span className="lpz-arrow" aria-hidden="true">
            →
          </span>
          <article className="lpz-step">
            <span className="lpz-num">05</span>
            <h3>The honest rewrite</h3>
            <p>What you learned, written as one paragraph anybody in the company could read.</p>
          </article>
          <span className="lpz-arrow" aria-hidden="true">
            →
          </span>
          <article className="lpz-step">
            <span className="lpz-num">06</span>
            <h3>Now open Figma</h3>
            <p>One screen. It takes ninety minutes because the thinking is already done.</p>
          </article>
        </div>
      </section>

      <section className="lpz-quote" id="work">
        <p>
          “I spent four years making things look finished before they were decided.
          This course cost me a fortnight and about eleven bad habits.”
        </p>
        <cite>— Nadia O., product designer, cohort 06</cite>
      </section>

      <footer className="lpz-foot" id="apply">
        <div className="lpz-card">
          <h2>Cohort 09 — £680</h2>
          <p>Tuesdays, 6:30 to 9pm, six weeks. Materials included, laptops discouraged.</p>
          <A className="lpz-cta" href="#apply">
            Apply now
          </A>
          <span className="lpz-note n3">↑ applications close Feb 20</span>
        </div>
        <p className="lpz-fine">First Draft · Studio 4, Bermondsey · hello@firstdraft.school</p>
      </footer>
    </div>
  );
}
