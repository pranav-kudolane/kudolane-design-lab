import { Brand } from './Brand';

const links = [
  { href: '#effects', label: 'Effects' },
  { href: '#palettes', label: 'Palettes' },
  { href: '#a11y', label: 'Accessibility' },
  { href: '#ai', label: 'AI Workflow' },
];

export function Nav() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <Brand />
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
