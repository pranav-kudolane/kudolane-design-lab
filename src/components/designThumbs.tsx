/**
 * Card thumbnails — a miniature fake website per style, drawn entirely with
 * divs and CSS (see styles/designs.css). No image assets, so they stay sharp
 * at any card width and follow the design tokens.
 *
 * Every thumb renders its own `.dt` tile, the same contract the effect demos
 * use with `.demo`.
 */

export function MinimalismThumb() {
  return (
    <div className="dt dt-min" role="img" aria-label="Miniature minimalist website: white page, thin type, one button">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-l" />
        <span className="dt-l short" />
        <span className="dt-btn" />
      </div>
      <div className="dt-rule" />
    </div>
  );
}

export function MaximalismThumb() {
  return (
    <div className="dt dt-max" role="img" aria-label="Miniature maximalist website: clashing colours, layered shapes, huge type">
      <span className="dt-blob b1" />
      <span className="dt-blob b2" />
      <span className="dt-star" />
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-h alt" />
        <span className="dt-badge" />
      </div>
      <span className="dt-sticker" />
    </div>
  );
}

export function SwissThumb() {
  return (
    <div className="dt dt-swiss" role="img" aria-label="Miniature Swiss-style website: strict red and black grid, flush-left type">
      <div className="dt-grid" aria-hidden="true">
        <i /> <i /> <i /> <i /> <i /> <i />
      </div>
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-h w2" />
        <span className="dt-red" />
      </div>
      <div className="dt-cols">
        <span /> <span /> <span />
      </div>
    </div>
  );
}

export function BrutalismThumb() {
  return (
    <div className="dt dt-brut" role="img" aria-label="Miniature brutalist website: thick black borders, hard shadows, raw type">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-l" />
        <span className="dt-btn" />
      </div>
      <div className="dt-boxes">
        <span /> <span />
      </div>
    </div>
  );
}
