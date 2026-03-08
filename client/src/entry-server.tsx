/**
 * Server-side rendering entry point.
 *
 * Used by scripts/prerender.ts at build time to generate static HTML for
 * every route. NOT loaded by browsers — only by the prerender Node.js script.
 *
 * Key decisions:
 *  - Wraps <App> in a wouter <Router> with a static location hook so that
 *    useLocation() / Switch / Route all resolve the correct path.
 *  - Re-exports the SSR meta helpers so the prerender script can read the
 *    <title> and <meta description> captured synchronously during renderToString().
 */

import React from "react";
import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import App from "./App";

// Re-export SSR meta helpers so the prerender script can import them from
// a single entry point without needing a separate import path.
export { getSSRMeta, resetSSRMeta } from "./hooks/usePageMeta";

// Static location hook: tells wouter which path is being rendered.
// navigate is a no-op — SSR never needs to navigate.
function makeStaticHook(url: string) {
  return () => [url, (_to: string) => {}] as const;
}

/**
 * Render the React app for the given URL and return an HTML string.
 * Throws if rendering fails — the prerender script catches and logs per-route errors.
 */
export function render(url: string): string {
  return renderToString(
    React.createElement(
      WouterRouter,
      { hook: makeStaticHook(url) },
      React.createElement(App)
    )
  );
}
