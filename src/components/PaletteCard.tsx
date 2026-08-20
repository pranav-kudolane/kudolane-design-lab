import { useState } from 'react';
import { useCopy } from '../hooks/useCopy';
import type { Palette } from '../types';
import { RichText } from './RichText';

function Swatch({ hex }: { hex: string }) {
  const { copy } = useCopy();
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    await copy(hex, `${hex} copied`);
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <button
      type="button"
      className={`sw${done ? ' done' : ''}`}
      style={{ background: hex }}
      aria-label={`Copy ${hex}`}
      onClick={() => void onCopy()}
    >
      <span>{hex}</span>
    </button>
  );
}

export function PaletteCard({ palette }: { palette: Palette }) {
  return (
    <div className="pal-card" id={palette.id}>
      <div className="pal-head">
        <span className="pal-ico" aria-hidden="true">
          {palette.icon}
        </span>
        <span className="pal-title">
          {palette.title}
          <small>{palette.subtitle}</small>
        </span>
      </div>
      <div className="swatches">
        {palette.colors.map((hex, i) => (
          <Swatch hex={hex} key={`${hex}-${i}`} />
        ))}
      </div>
      <div className="pal-why">
        <RichText text={palette.why} />
      </div>
    </div>
  );
}
