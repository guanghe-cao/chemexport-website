import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// If the container already has children, the page was pre-rendered by the
// build-time prerender script.  Use hydrateRoot so React attaches to the
// existing DOM nodes instead of replacing them (avoids a layout flash and
// keeps the pre-rendered content visible while JS loads).
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  // No pre-rendered content — normal SPA bootstrap (dev mode, or a route
  // that the prerender script skipped due to an error).
  createRoot(container).render(<App />);
}
