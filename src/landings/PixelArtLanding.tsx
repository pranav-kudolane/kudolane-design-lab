/** Sample landing page — Pixel Art. Scoped under `.lp-pixel`. */
import { A } from './anchors';

/**
 * Sprites are real pixel art: a tiny viewBox (one unit per pixel) drawn with
 * `shape-rendering: crispEdges`, then scaled up by CSS. Nothing is smoothed,
 * and there is no image file to load.
 */
const PALETTE: Record<string, string> = {
  '1': '#7CF56B',
  '2': '#2E9E45',
  '3': '#0B0B14',
  '5': '#FF4D6D',
  '6': '#FFC63D',
  '7': '#C98A1E',
};

function Sprite({ rows, className }: { rows: string[]; className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${rows[0].length} ${rows.length}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {rows.map((row, y) =>
        [...row].map((ch, x) =>
          ch === '.' ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={PALETTE[ch]} />
          ),
        ),
      )}
    </svg>
  );
}

const SLIME = [
  '....2222....',
  '..22111122..',
  '.2111111112.',
  '211111111112',
  '213111113112',
  '211111111112',
  '211111111112',
  '.2111111112.',
  '.2222222222.',
  '..2.2..2.2..',
];

const HEART = ['.55..55.', '55555555', '55555555', '.555555.', '..5555..', '...55...'];

const COIN = [
  '..6666..',
  '.666666.',
  '66677666',
  '66677666',
  '66677666',
  '66677666',
  '.666666.',
  '..6666..',
];

export function PixelArtLanding() {
  return (
    <div className="lp lp-pixel">
      <header className="lpp-nav">
        <span className="lpp-brand">CAVERN KEEP</span>
        <nav>
          <A href="#world">WORLD</A>
          <A href="#press">PRESS</A>
        </nav>
        <A className="lpp-btn sm" href="#get">
          WISHLIST
        </A>
      </header>

      <div className="lpp-ticker">
        ★ DEMO OUT NOW ★ 40 FLOORS ★ NO MICROTRANSACTIONS ★ MADE BY TWO PEOPLE ★
      </div>

      <section className="lpp-hero">
        <div className="lpp-hero-copy">
          <h1>
            CAVERN
            <br />
            KEEP
          </h1>
          <div className="lpp-health" aria-label="3 lives remaining">
            <Sprite rows={HEART} className="lpp-heart" />
            <Sprite rows={HEART} className="lpp-heart" />
            <Sprite rows={HEART} className="lpp-heart" />
          </div>
          <p>
            Forty floors down, one lantern, and something in the dark that learns how
            you play. A dungeon crawler for people who miss losing.
          </p>
          <div className="lpp-ctas">
            <A className="lpp-btn" href="#get">
              PLAY THE DEMO
            </A>
            <A className="lpp-btn ghost" href="#world">
              SEE THE WORLD
            </A>
          </div>
        </div>

        <div className="lpp-stage">
          <Sprite rows={SLIME} className="lpp-slime" />
          <span className="lpp-shadow" aria-hidden="true" />
          <span className="lpp-floor" aria-hidden="true" />
        </div>
      </section>

      <section className="lpp-items" id="world">
        <article className="lpp-box">
          <Sprite rows={COIN} className="lpp-ico" />
          <h3>40 FLOORS</h3>
          <p>Hand-placed, not generated. Every room was drawn by somebody who meant it.</p>
        </article>
        <article className="lpp-box">
          <Sprite rows={HEART} className="lpp-ico" />
          <h3>3 LIVES</h3>
          <p>Death costs you the floor, not the run. Harsh, but never unfair about it.</p>
        </article>
        <article className="lpp-box">
          <Sprite rows={SLIME} className="lpp-ico" />
          <h3>ONE ENEMY</h3>
          <p>It copies your last twenty moves. Fight it long enough and you fight yourself.</p>
        </article>
      </section>

      <section className="lpp-stats">
        <div>
          <b>18k</b>
          <span>WISHLISTS</span>
        </div>
        <div>
          <b>2</b>
          <span>DEVELOPERS</span>
        </div>
        <div>
          <b>0</b>
          <span>LOOT BOXES</span>
        </div>
        <div>
          <b>96%</b>
          <span>DEMO RATING</span>
        </div>
      </section>

      <footer className="lpp-foot" id="get">
        <h2>PRESS START</h2>
        <A className="lpp-btn big" href="#get">
          WISHLIST ON STEAM
        </A>
        <p>CAVERN KEEP © 2026 — MADE IN A SPARE ROOM IN LEEDS</p>
      </footer>
    </div>
  );
}
