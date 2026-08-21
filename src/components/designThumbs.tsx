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

export function SurrealismThumb() {
  return (
    <div className="dt dt-surr" role="img" aria-label="Miniature surrealist website: dusk sky, floating orb and an impossible door">
      <span className="dt-orb" />
      <span className="dt-cloud c1" />
      <span className="dt-cloud c2" />
      <span className="dt-door" />
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-h alt" />
      </div>
      <span className="dt-horizon" />
    </div>
  );
}

export function NeoBrutalismThumb() {
  return (
    <div className="dt dt-neob" role="img" aria-label="Miniature neo-brutalist website: pastel fills, thick outlines, hard shadows">
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
        <span className="b1" /> <span className="b2" /> <span className="b3" />
      </div>
    </div>
  );
}

export function NeoClassicalThumb() {
  return (
    <div className="dt dt-neoc" role="img" aria-label="Miniature neo-classical website: symmetrical cream layout, serif type, gold rules">
      <div className="dt-nav">
        <i /> <span className="dt-mark" /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-rule gold" />
        <span className="dt-h" />
        <span className="dt-h alt" />
        <span className="dt-rule gold" />
        <span className="dt-btn" />
      </div>
      <div className="dt-cols">
        <span /> <span /> <span />
      </div>
    </div>
  );
}

export function NeumorphismThumb() {
  return (
    <div className="dt dt-neum" role="img" aria-label="Miniature neumorphic website: soft extruded shapes in one grey tone">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-l" />
        <span className="dt-btn" />
      </div>
      <span className="dt-dial">
        <i />
      </span>
      <div className="dt-pills">
        <span /> <span />
      </div>
    </div>
  );
}

export function ScrapbookThumb() {
  return (
    <div className="dt dt-scrap" role="img" aria-label="Miniature scrapbook website: kraft paper, taped polaroid, handwriting">
      <span className="dt-polaroid" />
      <span className="dt-tape t1" />
      <span className="dt-tape t2" />
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-scribble" />
        <span className="dt-l" />
      </div>
      <span className="dt-stamp" />
    </div>
  );
}

export function GlassmorphismThumb() {
  return (
    <div className="dt dt-glass" role="img" aria-label="Miniature glassmorphic website: frosted panels over a vivid gradient">
      <span className="dt-blob b1" />
      <span className="dt-blob b2" />
      <span className="dt-blob b3" />
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <span className="dt-pane">
        <i className="l1" />
        <i className="l2" />
        <i className="pill" />
      </span>
      <span className="dt-chip" />
    </div>
  );
}

export function ClaymorphismThumb() {
  return (
    <div className="dt dt-clay" role="img" aria-label="Miniature claymorphic website: puffy pastel 3D shapes">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-l" />
        <span className="dt-btn" />
      </div>
      <span className="dt-ball" />
      <div className="dt-boxes">
        <span className="b1" /> <span className="b2" />
      </div>
    </div>
  );
}

export function BentoThumb() {
  return (
    <div className="dt dt-bento" role="img" aria-label="Miniature bento-grid website: modular tiles of varying sizes">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-tiles">
        <span className="big" />
        <span className="tall" />
        <span className="sm" />
        <span className="sm" />
        <span className="wide" />
      </div>
    </div>
  );
}

export function PixelArtThumb() {
  return (
    <div className="dt dt-pixel" role="img" aria-label="Miniature pixel-art website: chunky blocks, limited palette, scanlines">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-l" />
        <span className="dt-btn" />
      </div>
      <span className="dt-sprite" />
      <div className="dt-boxes">
        <span /> <span /> <span />
      </div>
      <span className="dt-scan" />
    </div>
  );
}

export function SketchThumb() {
  return (
    <div className="dt dt-sketch" role="img" aria-label="Miniature sketch website: hand-drawn wireframe boxes and pencil annotations">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-underline" />
        <span className="dt-l" />
      </div>
      <span className="dt-wire" />
      <span className="dt-arrow" />
      <div className="dt-boxes">
        <span /> <span />
      </div>
    </div>
  );
}

export function LuxuryTypeThumb() {
  return (
    <div className="dt dt-lux" role="img" aria-label="Miniature luxury typography website: one enormous serif word on cream">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-l" />
      </div>
      <span className="dt-plate" />
      <span className="dt-rule" />
    </div>
  );
}

export function EditorialThumb() {
  return (
    <div className="dt dt-edit" role="img" aria-label="Miniature editorial website: masthead, serif headline, columns and a drop cap">
      <div className="dt-nav">
        <span className="dt-mark" />
        <i /> <i />
      </div>
      <div className="dt-hero">
        <span className="dt-h" />
        <span className="dt-h alt" />
        <span className="dt-deck" />
      </div>
      <div className="dt-cols">
        <span className="col">
          <i className="cap" />
        </span>
        <span className="col" />
        <span className="pic" />
      </div>
    </div>
  );
}
