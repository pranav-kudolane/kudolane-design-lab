import { useEffect, useState } from 'react';

/**
 * A ~40-line hash router. Two shapes of hash live on the same page:
 *
 *   #effects              -> plain anchor, the home page scrolls to it
 *   #/design/minimalism   -> a route, App swaps the whole view
 *
 * Anything that does not start with `#/` is treated as an anchor, so the
 * existing nav links keep working exactly as they did.
 */
export type Route =
  | { name: 'home'; anchor: string }
  | { name: 'detail'; id: string }
  | { name: 'live'; id: string };

export function parseHash(hash: string): Route {
  if (!hash.startsWith('#/')) return { name: 'home', anchor: hash.slice(1) };

  const parts = hash.slice(2).split('/').filter(Boolean);
  if (parts[0] === 'design' && parts[1]) {
    return parts[2] === 'live'
      ? { name: 'live', id: parts[1] }
      : { name: 'detail', id: parts[1] };
  }
  return { name: 'home', anchor: '' };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(() =>
    parseHash(typeof window === 'undefined' ? '' : window.location.hash),
  );

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  useEffect(() => {
    // Routes always open at the top. Anchors are left to the browser on first
    // load, but re-scrolled by hand when we come *back* from a route — at that
    // point the target element did not exist when the hash changed.
    //
    // `instant` is deliberate: base.css sets `scroll-behavior: smooth`, which
    // would otherwise animate the whole page height on every route change.
    if (route.name !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    if (!route.anchor) return;
    const el = document.getElementById(route.anchor);
    el?.scrollIntoView({ behavior: 'instant', block: 'start' });
  }, [route]);

  return route;
}
