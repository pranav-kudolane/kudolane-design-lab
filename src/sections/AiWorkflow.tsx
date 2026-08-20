import { AiTipCard } from '../components/AiTipCard';
import { SectionHead } from '../components/SectionHead';
import { aiTips } from '../data/aiTips';

export function AiWorkflow() {
  return (
    <section id="ai">
      <div className="wrap">
        <SectionHead
          kicker="04 — Hassle-free build with AI"
          title="A workflow that keeps AI from fighting you"
        >
          How to actually ship faster with AI instead of debugging its guesses. The pattern: give it
          constraints, build in slices, and let it do the tedious parts.
        </SectionHead>

        <div className="ai-grid">
          {aiTips.map((tip, i) => (
            <AiTipCard tip={tip} index={i + 1} key={tip.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
