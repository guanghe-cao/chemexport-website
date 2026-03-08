/**
 * Build-time prerender script
 *
 * Run with:  tsx scripts/prerender.ts
 * Triggered: automatically after `vite build` via the "build" npm script.
 *
 * What it does:
 *  1. Sets up browser API polyfills so React can call renderToString() in Node.js
 *  2. Dynamically imports the SSR entry (client/src/entry-server.tsx) — polyfills
 *     must be in place BEFORE that import so module-level browser-API accesses
 *     in third-party packages don't throw.
 *  3. Renders every route to a static HTML string.
 *  4. Injects the rendered HTML + page-specific <title>, <meta description>, and
 *     <link rel="canonical"> into the Vite-built index.html template.
 *  5. Writes each page as dist/public/{route}/index.html  (or dist/public/index.html
 *     for the root).  Vercel's { "handle": "filesystem" } rule serves these files
 *     directly, falling back to /index.html for any path without a static file.
 *  6. Writes dist/public/sitemap.xml
 *
 * If a single route fails to render, that route is skipped (the SPA will still
 * serve it via client-side rendering) and prerendering continues for other routes.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist/public");

// ─── 1. Browser API polyfills ─────────────────────────────────────────────────
// Must be synchronous and happen BEFORE any dynamic import of app code.
// Static imports above (node:fs, node:path, node:url) are Node.js built-ins
// that never touch browser APIs, so they are safe before this block.

const noop = () => {};

const ssrDocument = {
  title: "",
  documentElement: {
    classList: { add: noop, remove: noop, contains: () => false, toggle: noop },
    setAttribute: noop,
    getAttribute: () => null,
    style: {},
  },
  head: {
    appendChild: noop,
    removeChild: noop,
    querySelector: () => null,
    querySelectorAll: () => [],
    insertBefore: noop,
  },
  body: {
    classList: { add: noop, remove: noop },
    appendChild: noop,
    style: {},
  },
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  createElement: () => ({
    style: {},
    classList: { add: noop, remove: noop, contains: () => false },
    setAttribute: noop,
    getAttribute: () => null,
    appendChild: noop,
    removeChild: noop,
    addEventListener: noop,
    removeEventListener: noop,
    dispatchEvent: () => true,
    innerHTML: "",
    textContent: "",
    tagName: "DIV",
  }),
  createTextNode: (text: string) => ({ textContent: text }),
  createElementNS: (_ns: string, tag: string) => ({
    style: {},
    setAttribute: noop,
    getAttribute: () => null,
    appendChild: noop,
    tagName: tag.toUpperCase(),
  }),
  addEventListener: noop,
  removeEventListener: noop,
  readyState: "complete",
  defaultView: null as unknown,
};

// Some properties on globalThis in Node.js (e.g. navigator) are defined as
// read-only getters and cannot be set with a simple assignment or Object.assign.
// Use defineProperty with { configurable: true } as a fallback.
function setGlobal(key: string, value: unknown): void {
  try {
    (globalThis as Record<string, unknown>)[key] = value;
    // Verify the assignment actually took (some getters silently ignore sets)
    if ((globalThis as Record<string, unknown>)[key] !== value) throw new Error("silent reject");
  } catch {
    try {
      Object.defineProperty(globalThis, key, {
        value,
        writable: true,
        configurable: true,
      });
    } catch {
      /* can't override this property — skip */
    }
  }
}

const ssrNavigator = { userAgent: "node/prerender", language: "en-US", languages: ["en-US"] };
const ssrPerf = {
  now: () => Date.now(),
  mark: noop,
  measure: noop,
  getEntriesByName: () => [],
  getEntriesByType: () => [],
};

// Attach globals before the dynamic imports below resolve their modules
setGlobal("window", globalThis);
setGlobal("document", ssrDocument);
setGlobal("localStorage", {
  getItem: () => null,
  setItem: noop,
  removeItem: noop,
  clear: noop,
  length: 0,
  key: () => null,
});
setGlobal("sessionStorage", {
  getItem: () => null,
  setItem: noop,
  removeItem: noop,
  clear: noop,
  length: 0,
  key: () => null,
});
setGlobal("navigator", ssrNavigator);
setGlobal("matchMedia", () => ({
  matches: false,
  media: "",
  onchange: null,
  addListener: noop,
  removeListener: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: () => true,
}));
setGlobal("ResizeObserver", class {
  observe = noop;
  unobserve = noop;
  disconnect = noop;
});
setGlobal("IntersectionObserver", class {
  observe = noop;
  unobserve = noop;
  disconnect = noop;
  root = null;
  rootMargin = "";
  thresholds: number[] = [];
});
setGlobal("MutationObserver", class {
  observe = noop;
  disconnect = noop;
  takeRecords = () => [];
});
setGlobal("requestAnimationFrame", (cb: FrameRequestCallback) =>
  setTimeout(cb, 0) as unknown as number);
setGlobal("cancelAnimationFrame", (id: number) => clearTimeout(id));
setGlobal("getComputedStyle", () => ({
  getPropertyValue: () => "",
  setProperty: noop,
  removeProperty: noop,
}));
if (typeof CustomEvent === "undefined") {
  setGlobal("CustomEvent", class extends Event {
    detail: unknown;
    constructor(type: string, init?: { detail?: unknown }) {
      super(type);
      this.detail = init?.detail;
    }
  });
}
setGlobal("performance", ssrPerf);
setGlobal("scrollTo", noop);
setGlobal("scrollBy", noop);
setGlobal("screen", { width: 1920, height: 1080 });
setGlobal("innerWidth", 1920);
setGlobal("innerHeight", 1080);

// Signal to usePageMeta (and any other app code) that we are in SSR mode.
// usePageMeta checks this flag to capture <title>/<description> synchronously
// during renderToString() instead of waiting for useEffect to fire.
setGlobal("__IS_SSR__", true);

// ─── 2. Dynamic imports (polyfills are now in place) ──────────────────────────

type RenderFn = (url: string) => string;
type GetMetaFn = () => { title?: string; description?: string; keywords?: string } | null;
type ResetMetaFn = () => void;

const entryServer = (await import("../client/src/entry-server.tsx")) as {
  render: RenderFn;
  getSSRMeta: GetMetaFn;
  resetSSRMeta: ResetMetaFn;
};

const { render, getSSRMeta, resetSSRMeta } = entryServer;

const { products, productCategories } = (await import(
  "../client/src/data/products.ts"
)) as typeof import("../client/src/data/products.ts");

// ─── 3. Route definitions ─────────────────────────────────────────────────────

const staticRoutes = [
  "/",
  "/products",
  "/about",
  "/contact",
  "/quality",
  "/export",
  "/applications",
  "/resources",
];

const articleRoutes = [
  "/applications/tio2-coatings-guide",
  "/applications/iron-oxide-concrete",
  "/applications/5-key-concrete-admixtures-ready-mix-performance",
  "/applications/high-performance-tile-adhesive-additives",
  "/applications/water-treatment-chemicals-sourcing-guide",
  "/applications/cold-weather-concreting-admixtures",
  "/applications/pp-fiber-concrete-plastic-shrinkage-cracking",
  "/applications/dry-mix-mortar-additives-guide",
  "/applications/paint-coating-fillers-guide",
  "/applications/zinc-oxide-rubber-vulcanization-guide",
  "/applications/lightweight-concrete-blocks-foaming-agent-guide",
  "/applications/phosphate-free-detergents-stpp-alternatives-shmp",
];

const categoryRoutes = productCategories.map((c) => `/products/${c.id}`);

const productRoutes = products.map(
  (p) => `/products/${p.categorySlug}/${p.slug}`
);

const allRoutes = [
  ...staticRoutes,
  ...articleRoutes,
  ...categoryRoutes,
  ...productRoutes,
];

// ─── 4. Load index.html template ──────────────────────────────────────────────

const templatePath = path.join(DIST, "index.html");
if (!fs.existsSync(templatePath)) {
  console.error("ERROR: dist/public/index.html not found. Run vite build first.");
  process.exit(1);
}
const template = fs.readFileSync(templatePath, "utf-8");

// ─── 5. Helpers ───────────────────────────────────────────────────────────────

const CANONICAL_HOST = "https://www.shichemindustrial.com";

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function injectIntoTemplate(
  route: string,
  bodyHtml: string,
  meta: { title?: string; description?: string } | null
): string {
  const canonicalUrl =
    route === "/" ? `${CANONICAL_HOST}/` : `${CANONICAL_HOST}${route}`;

  let html = template;

  // Inject pre-rendered body into #root
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyHtml}</div>`
  );

  // Replace <title>
  if (meta?.title) {
    html = html.replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeAttr(meta.title)}</title>`
    );
  }

  // Replace <meta name="description">
  if (meta?.description) {
    html = html.replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeAttr(meta.description)}" />`
    );
  }

  // Replace <link rel="canonical">
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Add OG tags if not already present
  if (meta?.title && !html.includes('property="og:title"')) {
    html = html.replace(
      "</head>",
      `  <meta property="og:title" content="${escapeAttr(meta.title)}" />\n` +
        (meta.description
          ? `  <meta property="og:description" content="${escapeAttr(meta.description)}" />\n`
          : "") +
        `  <meta property="og:url" content="${canonicalUrl}" />\n` +
        `  <meta property="og:type" content="website" />\n` +
        `</head>`
    );
  }

  return html;
}

// ─── 6. Render loop ───────────────────────────────────────────────────────────

let successCount = 0;
let errorCount = 0;

console.log(`\nPrerendering ${allRoutes.length} routes...\n`);

for (const route of allRoutes) {
  try {
    resetSSRMeta();
    const bodyHtml = render(route);
    const meta = getSSRMeta();

    const finalHtml = injectIntoTemplate(route, bodyHtml, meta);

    // Write to dist/public/{route}/index.html
    // (root route overwrites dist/public/index.html directly)
    const filePath =
      route === "/"
        ? path.join(DIST, "index.html")
        : path.join(DIST, route.slice(1), "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, finalHtml, "utf-8");

    console.log(`  ✓  ${route}`);
    successCount++;
  } catch (err) {
    console.error(
      `  ✗  ${route}  —  ${err instanceof Error ? err.message : String(err)}`
    );
    errorCount++;
  }
}

// ─── 7. Generate sitemap.xml ─────────────────────────────────────────────────

const today = new Date().toISOString().split("T")[0];

function routePriority(route: string): string {
  if (route === "/") return "1.0";
  if (route === "/products" || route === "/applications") return "0.9";
  // Product category or article page
  if (
    (route.startsWith("/products/") && route.split("/").length === 3) ||
    (route.startsWith("/applications/") && route.split("/").length === 3)
  )
    return "0.8";
  return "0.7";
}

function routeChangefreq(route: string): string {
  if (route === "/") return "weekly";
  if (route.startsWith("/applications/")) return "monthly";
  return "monthly";
}

const urlEntries = allRoutes
  .map((route) => {
    const loc =
      route === "/" ? `${CANONICAL_HOST}/` : `${CANONICAL_HOST}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${routeChangefreq(route)}</changefreq>
    <priority>${routePriority(route)}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap, "utf-8");
console.log(`\n  ✓  sitemap.xml  (${allRoutes.length} URLs)`);

// ─── 8. Summary ───────────────────────────────────────────────────────────────

console.log(
  `\nPrerender complete: ${successCount} succeeded, ${errorCount} failed.`
);
if (errorCount > 0) {
  console.log(
    "  Failed routes will still be served via SPA client-side rendering."
  );
}
