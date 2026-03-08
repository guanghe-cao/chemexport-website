import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string;
}

// ─── SSR meta collection ────────────────────────────────────────────────────
// Module-level singleton. The prerender script calls resetSSRMeta() before
// each renderToString(), then reads getSSRMeta() afterwards to inject the
// correct <title> / <meta> into the static HTML file.
let _ssrMeta: PageMetaOptions | null = null;

export function getSSRMeta(): PageMetaOptions | null {
  return _ssrMeta;
}

export function resetSSRMeta(): void {
  _ssrMeta = null;
}

// ─── DOM helper (client-only) ────────────────────────────────────────────────
function setOrCreate(
  selector: string,
  attr: string,
  attrValue: string,
  content: string
) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// ─── Hook ────────────────────────────────────────────────────────────────────
export function usePageMeta({ title, description, keywords }: PageMetaOptions) {
  // SSR path: capture meta synchronously during renderToString().
  // The prerender script sets globalThis.__IS_SSR__ = true before importing
  // any app code.  We use this dedicated flag rather than checking
  // `typeof window === 'undefined'` because the prerender script also
  // polyfills `window` (required for third-party packages).
  if ((globalThis as Record<string, unknown>).__IS_SSR__) {
    _ssrMeta = { title, description, keywords };
  }

  // Client path: update <head> after mount / on change.
  // useEffect is always called (no conditional hook call) — SSR simply
  // never executes effects, so _ssrMeta capture above is all that runs.
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.title = title;
    setOrCreate('meta[name="description"]', "name", "description", description);

    if (keywords) {
      setOrCreate('meta[name="keywords"]', "name", "keywords", keywords);
    }

    setOrCreate('meta[property="og:title"]', "property", "og:title", title);
    setOrCreate(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
  }, [title, description, keywords]);
}
