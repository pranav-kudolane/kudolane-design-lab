import { DesignCard } from '../components/DesignCard';
import { SectionHead } from '../components/SectionHead';
import { designs } from '../data/designs';

export function Designs() {
  return (
    <section id="designs">
      <div className="wrap">
        <SectionHead
          kicker="03 — Design languages · pick a lane"
          title="The styles a site can actually be built in"
        >
          Effects and palettes are ingredients; this is the recipe. Each card carries a miniature
          of the look, where it earns its keep, and a <b>Read more</b> link into the full
          breakdown — principles, traits, and a working landing page written in that style.
        </SectionHead>

        <div className="ds-grid">
          {designs.map((design) => (
            <DesignCard design={design} key={design.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
