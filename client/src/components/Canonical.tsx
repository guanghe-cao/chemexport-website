import { useEffect } from "react";
import { useLocation } from "wouter";

const CANONICAL_HOST = "https://www.shichemindustrial.com";

const stripQueryAndHash = (path: string) => path.split(/[?#]/)[0];

const buildCanonical = (path: string) => {
  const cleanPath = stripQueryAndHash(path);
  if (!cleanPath.startsWith("/")) {
    return `${CANONICAL_HOST}/${cleanPath}`;
  }
  return `${CANONICAL_HOST}${cleanPath}`;
};

export default function Canonical() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const canonicalUrl = buildCanonical(location);
    let canonical = document.querySelector<HTMLLinkElement>(
      "link[rel='canonical']"
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [location]);

  return null;
}
