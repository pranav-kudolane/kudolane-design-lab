import { useEffect } from 'react';
import { findDesign } from '../data/designs';
import type { Route } from './useHashRoute';
import { designMeta, homeMeta, liveMeta, missingMeta, type PageMeta } from '../lib/seo';
import { applyPageMeta } from '../lib/seoDom';

/**
 * Keeps the head in step with the hash route.
 *
 * Worth being clear about what this can and cannot buy: Google does not index a
 * URL fragment as its own page, so `#/design/brutalism` will never rank
 * separately from the root URL no matter what is written here. What it does buy
 * is that every route shares correctly (Slack, LinkedIn, WhatsApp and Discord
 * all read the live DOM), the browser tab and history stay honest, and crawlers
 * that do execute JS get a coherent page. Turning the 29 write-ups into 29
 * indexable results needs real paths, not a better head.
 */

/** Resolves a route to its head, falling back to the home page. */
export function metaForRoute(route: Route): PageMeta {
  if (route.name === 'home') return homeMeta();

  const design = findDesign(route.id);
  if (!design) return missingMeta(route.id);

  return route.name === 'live' ? liveMeta(design) : designMeta(design);
}

export function useSeo(route: Route): void {
  useEffect(() => {
    applyPageMeta(metaForRoute(route), document);
  }, [route]);
}
