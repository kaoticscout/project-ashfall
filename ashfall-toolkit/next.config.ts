import type { NextConfig } from "next";

function normalizeBasePath(basePath?: string) {
  const raw = (basePath ?? "").trim();
  if (!raw || raw === "/") return "";
  const withLeadingSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

const BASE_PATH = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split("/")[1] ?? ""}`
      : "")
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
