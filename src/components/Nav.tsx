import { Brand } from './Brand';

const links = [
  { href: '#effects', label: 'Effects' },
  { href: '#palettes', label: 'Palettes' },
  { href: '#designs', label: 'Design Styles' },
  { href: '#a11y', label: 'Accessibility' },
  { href: '#ai', label: 'AI Workflow' },
];

export function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        {/* on a detail route this hash sends you home first, then scrolls */}
        <a className="brand-link" href="#top">
          <Brand />
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
