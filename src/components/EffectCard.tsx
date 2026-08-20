import type { Effect } from '../types';
import { CodeBlock } from './CodeBlock';
import { RichText } from './RichText';

interface Props {
  effect: Effect;
  /** 1-based position, shown in the badge */
  rank: number;
}

export function EffectCard({ effect, rank }: Props) {
  const { name, use, desc, code, lang, Demo } = effect;

  return (
    <article className="fx-card" id={effect.id}>
      <div className="fx-top">
        <span className="rank">{rank}</span>
        <span className="fx-name">{name}</span>
        <span className="fx-use">{use}</span>
      </div>
      <Demo />
      <div className="fx-desc">
        <RichText text={desc} />
      </div>
      <CodeBlock code={code} lang={lang} />
    </article>
  );
}
