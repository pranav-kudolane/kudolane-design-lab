import { useEffect } from 'react';
import { findDesign } from '../data/designs';

/**
 * The sample landing page on its own, full-bleed. The only lab furniture left
 * is a small floating bar back to the write-up — Esc does the same thing.
 */
export function DesignLive({ id }: { id: string }) {
  const design = findDesign(id);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') window.location.hash = `#/design/${id}`;
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [id]);

  if (!design) {
    return (
      <main className="wrap dd-missing">
        <h1>No style called “{id}”</h1>
        <a className="dd-back" href="#designs">
          <span aria-hidden="true">←</span> All design styles
        </a>
      </main>
    );
  }

  const { name, Landing } = design;

  return (
    <div className="dl">
      <div className="dl-bar">
        <a className="dl-back" href={`#/design/${id}`}>
          <span aria-hidden="true">←</span> Back to the {name} write-up
        </a>
        <span className="dl-note">
          Sample landing page
          <kbd>Esc</kbd>
        </span>
      </div>
      <Landing />
    </div>
  );
}
