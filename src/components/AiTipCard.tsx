import type { AiTip } from '../types';
import { RichText } from './RichText';

interface Props {
  tip: AiTip;
  /** 1-based position, rendered zero-padded as the card number */
  index: number;
}

export function AiTipCard({ tip, index }: Props) {
  return (
    <div className="ai-card">
      <div className="ai-num">{String(index).padStart(2, '0')}</div>
      <h3>{tip.title}</h3>
      <p>
        <RichText text={tip.body} />
      </p>
    </div>
  );
}
