import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  keywords?: string;
}

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

export function usePageMeta({ title, description, keywords }: PageMetaOptions) {
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
