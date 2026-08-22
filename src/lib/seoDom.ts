import { COMPANY, DEVELOPER, OG_IMAGE, SITE_NAME, SITE_URL, absolute, type PageMeta } from './seo';

/**
 * Writes a PageMeta into a document head.
 *
 * Split out of the hook deliberately: it takes the document rather than
 * reaching for the global, which keeps it free of React and of the data files,
 * and lets it be exercised outside a browser.
 */

/** Reads, or creates on first use, a `<meta>` matched by name or property. */
function meta(doc: Document, key: string, kind: 'name' | 'property' = 'name'): HTMLMetaElement {
  const existing = doc.head.querySelector<HTMLMetaElement>(`meta[${kind}="${key}"]`);
  if (existing) return existing;

  const created = doc.createElement('meta');
  created.setAttribute(kind, key);
  doc.head.appendChild(created);
  return created;
}

/** Same, for `<link rel=...>`. */
function link(doc: Document, rel: string): HTMLLinkElement {
  const existing = doc.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (existing) return existing;

  const created = doc.createElement('link');
  created.setAttribute('rel', rel);
  doc.head.appendChild(created);
  return created;
}

/**
 * The JSON-LD describing the current route. It points back at the `@id`
 * anchors defined once in index.html rather than restating the organisation
 * and person on every route.
 */
export function routeJsonLd(page: PageMeta): unknown {
  const author = { '@id': `${SITE_URL}/#pranavraja`, '@type': 'Person', name: DEVELOPER };
  const publisher = { '@id': `${SITE_URL}/#organization`, '@type': 'Organization', name: COMPANY };

  const node: Record<string, unknown> = {
    '@type': page.type,
    '@id': page.canonical,
    url: page.canonical,
    name: page.title,
    headline: page.title,
    description: page.description,
    inLanguage: 'en',
    image: absolute(OG_IMAGE),
    author,
    creator: author,
    publisher,
    isPartOf: { '@id': `${SITE_URL}/#website`, '@type': 'WebSite', name: SITE_NAME },
  };

  const graph: Record<string, unknown>[] = [node];

  if (page.breadcrumb) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumb.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function applyPageMeta(page: PageMeta, doc: Document): void {
  doc.title = page.title;

  meta(doc, 'description').setAttribute('content', page.description);
  link(doc, 'canonical').setAttribute('href', page.canonical);

  meta(doc, 'og:title', 'property').setAttribute('content', page.title);
  meta(doc, 'og:description', 'property').setAttribute('content', page.description);
  meta(doc, 'og:url', 'property').setAttribute('content', page.canonical);
  meta(doc, 'og:type', 'property').setAttribute(
    'content',
    page.type === 'Article' ? 'article' : 'website',
  );

  meta(doc, 'twitter:title').setAttribute('content', page.title);
  meta(doc, 'twitter:description').setAttribute('content', page.description);

  let script = doc.getElementById('ld-route');
  if (!script) {
    script = doc.createElement('script');
    script.setAttribute('id', 'ld-route');
    script.setAttribute('type', 'application/ld+json');
    doc.head.appendChild(script);
  }
  script.textContent = JSON.stringify(routeJsonLd(page));
}
