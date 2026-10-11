import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function PageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://dmmuchai.dev${pathname}`);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", `https://dmmuchai.dev${pathname}`);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", description);
  }, [title, description, pathname]);
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
