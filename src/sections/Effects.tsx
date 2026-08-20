import { EffectCard } from '../components/EffectCard';
import { RichText } from '../components/RichText';
import { SectionHead } from '../components/SectionHead';
import { alsoWorth } from '../data/alsoWorth';
import { effects } from '../data/effects';

export function Effects() {
  return (
    <section id="effects">
      <div className="wrap">
        <SectionHead kicker="01 — Modern CSS · Morphs · 3D" title="Effects, ranked by how often they land in 2026">
          Ordered from most-used-and-loved to more niche. Hover a card to feel it, then hit{' '}
          <b>Copy</b> for the core CSS. Ranking reflects current trend adoption — treat it as taste
          guidance, not gospel.
        </SectionHead>

        <div className="fx-grid">
          {effects.map((effect, i) => (
            <EffectCard effect={effect} rank={i + 1} key={effect.id} />
          ))}
        </div>

        <div className="also">
          {alsoWorth.map((item) => (
            <div key={item.id}>
              <h4>{item.title}</h4>
              <p>
                <RichText text={item.body} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
