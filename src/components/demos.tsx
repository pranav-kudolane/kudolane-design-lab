import { useSpotlight } from '../hooks/useSpotlight';
import { useTilt } from '../hooks/useTilt';

/* Each demo renders its own `.demo` tile so it is free to attach refs,
   extra classes or interaction to the tile itself. */

export function GlassDemo() {
  return (
    <div className="demo d-glass">
      <div className="pane">frosted glass</div>
    </div>
  );
}

export function AuroraDemo() {
  return (
    <div className="demo d-aurora">
      <i className="x1" />
      <i className="x2" />
      <i className="x3" />
    </div>
  );
}

export function TiltDemo() {
  const { containerRef, targetRef } = useTilt<HTMLDivElement, HTMLDivElement>({
    maxDeg: 22,
    perspective: 600,
  });
  return (
    <div className="demo" ref={containerRef}>
      <div className="tilt3d" ref={targetRef}>
        tilt me →
      </div>
    </div>
  );
}

export function ScrollDemo() {
  return (
    <div className="demo d-scroll">
      <div className="track">
        <div className="fillbar" />
      </div>
      <small>scroll — this fills with the page</small>
    </div>
  );
}

export function GradientTextDemo() {
  return (
    <div className="demo">
      <div className="gradtext">Gradient</div>
    </div>
  );
}

export function BentoDemo() {
  return (
    <div className="demo">
      <div className="bento">
        <div className="big" />
        <div className="wide" />
        <div />
      </div>
    </div>
  );
}

export function SpotlightDemo() {
  const { hostRef, glowRef } = useSpotlight<HTMLButtonElement, HTMLSpanElement>();
  return (
    <div className="demo">
      <button className="magbtn" ref={hostRef} type="button">
        Hover me
        <span className="glow" ref={glowRef} />
      </button>
    </div>
  );
}

export function BlobDemo() {
  return (
    <div className="demo">
      <div className="blob" />
    </div>
  );
}

export function NeuDemo() {
  return (
    <div className="demo d-neu">
      <div className="neu">soft UI</div>
    </div>
  );
}

export function ClayDemo() {
  return (
    <div className="demo">
      <div className="clay">clay</div>
    </div>
  );
}

export function MarqueeDemo() {
  return (
    <div className="demo">
      <div className="marquee">
        <div className="row">
          <span>Kudolane</span>·&nbsp;Design&nbsp;·<span>Kudolane</span>·&nbsp;Design&nbsp;·
        </div>
      </div>
    </div>
  );
}

export function NoiseDemo() {
  return (
    <div className="demo d-noise">
      <b>grain overlay</b>
    </div>
  );
}
