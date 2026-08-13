const FALLBACK_SITE_URL = "https://afaaq-arab.example.invalid";

function normalizeCandidate(candidate: string | undefined): URL | null {
  const value = candidate?.trim();
  if (!value) return null;

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url;
  } catch {
    return null;
  }
}

export function resolveSiteUrl(...candidates: Array<string | undefined>): URL {
  for (const candidate of candidates) {
    const url = normalizeCandidate(candidate);
    if (url) return url;
  }

  return new URL(FALLBACK_SITE_URL);
}

export function getSiteUrl(): URL {
  return resolveSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
    FALLBACK_SITE_URL,
  );
}
