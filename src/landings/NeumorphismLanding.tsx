/** Sample landing page — Neumorphism. Scoped under `.lp-neum`. */
import { A } from './anchors';

export function NeumorphismLanding() {
  return (
    <div className="lp lp-neum">
      <header className="lpq-nav">
        <span className="lpq-brand">
          <i className="lpq-logo" aria-hidden="true" />
          Hush
        </span>
        <nav>
          <A href="#control">Control</A>
          <A href="#rooms">Rooms</A>
        </nav>
        <A className="lpq-btn sm" href="#buy">
          Buy — £149
        </A>
      </header>

      <section className="lpq-hero">
        <div className="lpq-hero-copy">
          <span className="lpq-pill">The quiet thermostat</span>
          <h1>Your house, one degree calmer.</h1>
          <p>
            Hush learns the rooms you actually use and stops heating the ones you
            don&apos;t. No app notifications. No dashboard. One dial.
          </p>
          <A className="lpq-btn" href="#buy">
            Buy Hush — £149
          </A>
        </div>

        <div className="lpq-panel" aria-hidden="true">
          <div className="lpq-dial">
            <div className="lpq-dial-face">
              <b>21</b>
              <span>°C · holding</span>
            </div>
            <i className="lpq-tick" />
          </div>
          <div className="lpq-switches">
            <div className="lpq-switch on">
              <i />
            </div>
            <div className="lpq-switch">
              <i />
            </div>
          </div>
          <div className="lpq-slider">
            <i />
          </div>
        </div>
      </section>

      <section className="lpq-features" id="control">
        <article className="lpq-card">
          <span className="lpq-ico">◐</span>
          <h3>Learns in a week</h3>
          <p>Seven days of watching, then it stops asking you questions entirely.</p>
        </article>
        <article className="lpq-card">
          <span className="lpq-ico">◒</span>
          <h3>Room by room</h3>
          <p>Six wireless sensors. The spare bedroom stays off until someone stays in it.</p>
        </article>
        <article className="lpq-card">
          <span className="lpq-ico">◑</span>
          <h3>Quieter bills</h3>
          <p>An average 19% reduction across the first winter. Measured, not modelled.</p>
        </article>
      </section>

      <section className="lpq-rooms" id="rooms">
        <div className="lpq-room">
          <span className="lpq-room-t">Living</span>
          <b>21°</b>
        </div>
        <div className="lpq-room">
          <span className="lpq-room-t">Kitchen</span>
          <b>19°</b>
        </div>
        <div className="lpq-room off">
          <span className="lpq-room-t">Spare</span>
          <b>Off</b>
        </div>
        <div className="lpq-room">
          <span className="lpq-room-t">Study</span>
          <b>20°</b>
        </div>
      </section>

      <footer className="lpq-foot" id="buy">
        <h2>One dial. That is the product.</h2>
        <A className="lpq-btn" href="#buy">
          Buy Hush — £149
        </A>
        <p>Free returns for 60 days · Fits 94% of UK systems</p>
      </footer>
    </div>
  );
}
