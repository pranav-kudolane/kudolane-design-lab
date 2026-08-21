/**
 * Sample page — Editorial Design. Scoped under `.lp-edit`.
 *
 * Deliberately not a landing page: editorial design is a set of rules for
 * *reading*, so the only honest sample is a feature article.
 */
import { A } from './anchors';

export function EditorialLanding() {
  return (
    <div className="lp lp-edit">
      <header className="lpe-masthead">
        <span className="lpe-title">The Long Field</span>
        <nav>
          <A href="#issue">Issue 41</A>
          <A href="#more">Archive</A>
          <A href="#sub">Subscribe</A>
        </nav>
      </header>

      <div className="lpe-rule thick" />

      <article className="lpe-article" id="issue">
        <p className="lpe-kicker">Reportage · The Coast</p>
        <h1>The village that moved itself, one house at a time</h1>
        <p className="lpe-standfirst">
          Fairbourne was told it had until 2054. Its residents decided that was a
          date somebody else had chosen for them — and started measuring, arguing and
          lifting things uphill.
        </p>
        <div className="lpe-byline">
          <span>
            By <b>Marged Ellis</b>
          </span>
          <span>Photographs by Owen Pryce</span>
          <span>18 min read</span>
        </div>

        <figure className="lpe-lead">
          <span className="lpe-img a" aria-hidden="true" />
          <figcaption>
            The sea wall at Fairbourne, rebuilt four times since 1981. Locals call the
            newest section “the optimist”.
          </figcaption>
        </figure>

        <div className="lpe-body">
          <p className="lpe-first">
            The first thing you notice about Fairbourne is that it is quiet in a way
            that has nothing to do with the sea. Two hundred and eighty houses sit
            behind a wall, in a village that a government report once described, in a
            sentence nobody there has forgiven, as suitable for decommissioning.
          </p>
          <p>
            That was 2014. The word arrived before anyone from the council did, and it
            arrived in a newspaper. Within a fortnight the price of a terraced house on
            the seaward side had fallen by a third, and within a year the word had
            appeared in six documentaries, none of which spoke to the people who lived
            behind the wall for longer than an afternoon.
          </p>
          <p>
            What the reports missed is that a village is not a set of buildings. It is
            an argument that a group of people keep having with each other, across
            generations, about what is worth keeping. Fairbourne has been having that
            argument continuously since the tide came over the railway in 1927, and the
            report simply joined it, late and badly.
          </p>

          <aside className="lpe-pull">
            “They gave us a date. What they did not give us was a plan, or a road, or
            anywhere to go. So we started with the road.”
          </aside>

          <p>
            Gwen Hughes has lived on Beach Road for fifty-one years. She keeps a folder
            — actually four folders — of tide measurements taken twice daily since 2016,
            in biro, in a hand that has not changed. The council has a model. Gwen has
            the numbers, and the numbers do not entirely agree with the model, which is
            the sort of detail that turns a resident into a campaigner.
          </p>
          <p>
            By 2019 the folders had become a submission. By 2021 the submission had
            become a working group with an engineer in it. And by last spring, three
            houses on the seaward terrace had been surveyed, jacked, and moved eleven
            hundred metres inland to a field that the village bought itself, with money
            it raised itself, in a scheme nobody in Whitehall had authored.
          </p>
        </div>

        <figure className="lpe-inline">
          <span className="lpe-img b" aria-hidden="true" />
          <figcaption>Gwen Hughes and four folders of tide measurements, March.</figcaption>
        </figure>

        <div className="lpe-body">
          <p>
            None of this makes the sea go away. Everyone in the village will tell you
            so, usually before you have finished asking. What it does is change who is
            holding the pen — and after a decade of being written about, that turns out
            to be the thing they wanted most.
          </p>
          <p>
            The field is called Cae Newydd now — the new field — which is what the
            village voted for over three other names, none of which mentioned the sea
            at all. Three houses stand in it. There is room, Gwen points out, for
            rather more than three.
          </p>
        </div>
      </article>

      <div className="lpe-rule" />

      <section className="lpe-more" id="more">
        <h4>More from Issue 41</h4>
        <div className="lpe-more-grid">
          <article>
            <span className="lpe-cat">Essay</span>
            <h5>The last cartographer of the Wash</h5>
            <p>Mapping a coastline that is redrawn twice a day.</p>
          </article>
          <article>
            <span className="lpe-cat">Interview</span>
            <h5>“I plant trees I will never stand under”</h5>
            <p>Forty years of slow forestry in the Cairngorms.</p>
          </article>
          <article>
            <span className="lpe-cat">Photo essay</span>
            <h5>Night shift at the fish market</h5>
            <p>2am to 7am, in the last covered market on the estuary.</p>
          </article>
        </div>
      </section>

      <footer className="lpe-foot" id="sub">
        <span className="lpe-title small">The Long Field</span>
        <p>Four issues a year, printed in Wales · subscriptions@thelongfield.co.uk</p>
      </footer>
    </div>
  );
}
