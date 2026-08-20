import { PaletteCard } from '../components/PaletteCard';
import { SectionHead } from '../components/SectionHead';
import { palettes } from '../data/palettes';

export function Palettes() {
  return (
    <section id="palettes">
      <div className="wrap">
        <SectionHead
          kicker="02 — Premium color · by industry"
          title="Palettes that read “premium” per domain"
        >
          Curated for the feeling each industry needs to sell: trust, appetite, luxury, calm.{' '}
          <b>Click any swatch to copy the hex.</b> Pair a dominant neutral with one accent — resist
          using all five equally.
        </SectionHead>

        <div className="pal-grid">
          {palettes.map((palette) => (
            <PaletteCard palette={palette} key={palette.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
