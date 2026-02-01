/**
 * GitHub Pages serves sites under `/<repo>/` (unless you use a custom domain).
 * Next.js `basePath` does NOT automatically rewrite hard-coded `/assets/...` URLs.
 *
 * Build-time env:
 * - `NEXT_PUBLIC_BASE_PATH` should be "" (local) or "/<repo>" (GitHub Pages).
 */
const RAW_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function normalizeBasePath(basePath: string) {
  const trimmed = basePath.trim();
  if (!trimmed || trimmed === "/") return "";
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export const BASE_PATH = normalizeBasePath(RAW_BASE_PATH);

export function withBasePath(pathOrUrl: string) {
  if (!pathOrUrl) return pathOrUrl;
  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(pathOrUrl)) return pathOrUrl; // http(s), data, etc.

  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  if (!BASE_PATH) return path;

  // Avoid double-prefixing if callers already include the base path.
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
}

