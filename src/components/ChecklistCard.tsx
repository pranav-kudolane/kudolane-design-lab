import type { ChecklistGroup } from '../types';
import { RichText } from './RichText';

export function ChecklistCard({ group }: { group: ChecklistGroup }) {
  return (
    <div className="a11y-card">
      <h3>
        <span className="em" aria-hidden="true">
          {group.icon}
        </span>
        {group.title}
      </h3>
      <ul>
        {group.items.map((item, i) => (
          <li key={i}>
            <span className="tick" aria-hidden="true" />
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
