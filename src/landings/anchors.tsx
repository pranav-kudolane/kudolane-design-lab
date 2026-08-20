import type { MouseEvent, ReactNode } from 'react';

/**
 * Landing pages render inside the lab's hash router, so a plain `#work` link
 * would be read as a route change and yank the reader off the page. `A` keeps
 * the link real — it scrolls to the section, inside the frame or full screen —
 * without touching `location.hash`.
 */
export function A({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#') || href.length < 2) return;
    const root = e.currentTarget.closest('.lp');
    const target = root?.querySelector(`[id="${CSS.escape(href.slice(1))}"]`);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
