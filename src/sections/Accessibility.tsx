import { ChecklistCard } from '../components/ChecklistCard';
import { SectionHead } from '../components/SectionHead';
import { checklist } from '../data/checklist';

export function Accessibility() {
  return (
    <section id="a11y">
      <div className="wrap">
        <SectionHead
          kicker="04 — Accessibility that ships"
          title={
            <>
              Make it beautiful <em>and</em> usable by everyone
            </>
          }
        >
          These are the checks that catch ~90% of real issues — and they protect you legally while
          widening your clients' audience. Run through them before every handoff.
        </SectionHead>

        <div className="a11y-grid">
          {checklist.map((group) => (
            <ChecklistCard group={group} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
