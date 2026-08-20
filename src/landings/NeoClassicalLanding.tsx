/** Sample landing page — Neo-Classical. Scoped under `.lp-neoc`. */
import { A } from './anchors';

export function NeoClassicalLanding() {
  return (
    <div className="lp lp-neoc">
      <header className="lpc-nav">
        <nav className="lpc-nav-l">
          <A href="#practice">Practice</A>
          <A href="#counsel">Counsel</A>
        </nav>
        <span className="lpc-brand">
          Caldwell <i>&amp;</i> Rose
          <small>Attorneys at Law · Est. 1897</small>
        </span>
        <nav className="lpc-nav-r">
          <A href="#offices">Offices</A>
          <A href="#enquire">Enquire</A>
        </nav>
      </header>

      <div className="lpc-rule double" />

      <section className="lpc-hero">
        <span className="lpc-orn" aria-hidden="true">
          ❧
        </span>
        <p className="lpc-eyebrow">Private Client · Estates · Appellate</p>
        <h1>
          Counsel measured
          <br />
          in generations.
        </h1>
        <p className="lpc-lede">
          For one hundred and twenty-nine years this firm has represented families,
          foundations and estates with the discretion the work requires.
        </p>
        <A className="lpc-cta" href="#enquire">
          Request a consultation
        </A>
      </section>

      <div className="lpc-colonnade" aria-hidden="true">
        <span /> <span /> <span /> <span /> <span /> <span /> <span />
      </div>

      <section className="lpc-practice" id="practice">
        <div className="lpc-col">
          <span className="lpc-num">I</span>
          <h3>Estates &amp; Succession</h3>
          <p>
            Wills, trusts and the transfer of family holdings across borders and
            across generations.
          </p>
        </div>
        <div className="lpc-col">
          <span className="lpc-num">II</span>
          <h3>Appellate Advocacy</h3>
          <p>
            Fourteen appearances before the highest court of this jurisdiction, and
            a record we discuss in person.
          </p>
        </div>
        <div className="lpc-col">
          <span className="lpc-num">III</span>
          <h3>Foundations</h3>
          <p>
            Governance, endowment structure and the quiet compliance work that keeps
            an institution standing.
          </p>
        </div>
      </section>

      <section className="lpc-tenet" id="counsel">
        <span className="lpc-orn" aria-hidden="true">
          ❦
        </span>
        <p>
          “A firm should be judged not by the matters it wins, but by the matters its
          clients never had to bring.”
        </p>
        <cite>Eleanor Rose — Managing Partner, 1962</cite>
      </section>

      <section className="lpc-offices" id="offices">
        <div>
          <h4>Boston</h4>
          <p>
            41 Beacon Street
            <br />
            Massachusetts 02108
          </p>
        </div>
        <div>
          <h4>London</h4>
          <p>
            8 Bedford Row
            <br />
            WC1R 4BX
          </p>
        </div>
        <div>
          <h4>Geneva</h4>
          <p>
            Rue du Rhône 14
            <br />
            1204 Genève
          </p>
        </div>
      </section>

      <footer className="lpc-foot" id="enquire">
        <div className="lpc-rule double" />
        <span className="lpc-brand small">Caldwell &amp; Rose</span>
        <p>enquiries@caldwellrose.com · +1 617 000 0000</p>
      </footer>
    </div>
  );
}
