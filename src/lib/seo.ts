/**
 * One source of truth for everything a crawler reads.
 *
 * `index.html` carries the static head for the first paint, `hooks/useSeo.ts`
 * rewrites it as the hash route changes, and `vite.config.ts` stamps the same
 * values into `robots.txt` and `sitemap.xml` at build time. All three read
 * this file, so a value changes here and nowhere else.
 *
 * Keep this module free of runtime imports — `vite.config.ts` loads it outside
 * the browser bundle, so a stray React import would break the build.
 */

/**
 * ⚠️ PLACEHOLDER — CHANGE THIS ONE LINE WHEN THE LAB GETS A DOMAIN. ⚠️
 *
 * The absolute origin the site is actually served from. No trailing slash.
 *
 * This is not cosmetic: a canonical tag pointing at a host that isn't serving
 * the page tells Google the real page lives somewhere else, and it will drop
 * this one from the index rather than rank it. Nothing below works until this
 * is right.
 *
 *   GitHub Pages   'https://pranav-kudolane.github.io/kudolane-design-lab'
 *                  (also set `base: '/kudolane-design-lab/'` in vite.config.ts)
 *   Custom domain  'https://kudolane.com'
 */
export const SITE_URL = 'https://designlab.kudolane.dev';

/** The company the lab belongs to. */
export const COMPANY = 'Kudolane';

/** Who built it — surfaced as `meta[name=author]` and as JSON-LD `author`. */
export const DEVELOPER = 'Pranavraja';

export const SITE_NAME = 'Kudolane Design Lab';

export const DEFAULT_TITLE = 'Kudolane Design Lab — Effects, Palettes & Craft';

export const DEFAULT_DESCRIPTION =
  'A working toolkit for client-ready sites: live CSS effects, premium palettes by industry, 29 design styles, an accessibility checklist and an AI workflow.';

/**
 * Social preview card. SVG so it ships with the repo and stays crisp.
 *
 * NOTE: X/Twitter and Facebook do not rasterise SVG — they will show no image.
 * Export `public/og-image.svg` to a 1200×630 PNG, drop it in `public/`, and
 * change this to '/og-image.png'. Google itself does not use og:image, so
 * search visibility does not depend on it; link previews do.
 */
export const OG_IMAGE = '/og-image.svg';
export const OG_IMAGE_TYPE = 'image/svg+xml';
export const OG_IMAGE_WIDTH = '1200';
export const OG_IMAGE_HEIGHT = '630';

/** Every design style the lab documents, for the sitemap and the copy below. */
export const DESIGN_COUNT = 29;

/** Joins a root-relative path onto SITE_URL without doubling the slash. */
export function absolute(path = '/'): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** What a page tells a crawler about itself. */
export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  /** Schema.org type for the per-route JSON-LD block. */
  type: 'WebSite' | 'Article' | 'WebPage';
  /** Trail shown to Google as a BreadcrumbList; omitted on the home page. */
  breadcrumb?: { name: string; url: string }[];
}

/**
 * Strips the three inline Rich markers (`**b**`, `*i*`, `` `code` ``) so a
 * `desc` written for the page can be reused verbatim as a meta description.
 * Crawlers show the raw asterisks otherwise.
 */
export function plainText(rich: string): string {
  return rich
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Trims to a length Google will actually render, breaking on a word and only
 * adding an ellipsis when something was really cut.
 */
export function clamp(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ')).trimEnd()}…`;
}

export function homeMeta(): PageMeta {
  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: absolute('/'),
    type: 'WebSite',
  };
}

/** The write-up for one design style, at `#/design/<id>`. */
export function designMeta(design: { id: string; name: string; tagline: string; desc: string }): PageMeta {
  return {
    title: `${design.name} — ${design.tagline} · ${SITE_NAME}`,
    description: clamp(plainText(design.desc)),
    canonical: absolute(`/#/design/${design.id}`),
    type: 'Article',
    breadcrumb: [
      { name: SITE_NAME, url: absolute('/') },
      { name: 'Design styles', url: absolute('/#designs') },
      { name: design.name, url: absolute(`/#/design/${design.id}`) },
    ],
  };
}

/** The full-screen sample landing page, at `#/design/<id>/live`. */
export function liveMeta(design: { id: string; name: string }): PageMeta {
  return {
    title: `${design.name} sample landing page · ${SITE_NAME}`,
    description: clamp(
      `A complete ${design.name} landing page you can read at full size — the ${design.name} design style built out as a real, accessible, WCAG AA page.`,
    ),
    canonical: absolute(`/#/design/${design.id}/live`),
    type: 'WebPage',
    breadcrumb: [
      { name: SITE_NAME, url: absolute('/') },
      { name: design.name, url: absolute(`/#/design/${design.id}`) },
      { name: 'Sample landing page', url: absolute(`/#/design/${design.id}/live`) },
    ],
  };
}

/** A slug that no longer resolves. Canonical points home so it can't rank. */
export function missingMeta(id: string): PageMeta {
  return {
    title: `No style called “${id}” · ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
    canonical: absolute('/'),
    type: 'WebPage',
  };
}
