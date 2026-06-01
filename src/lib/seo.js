import { siteConfig } from "@/lib/constants";

export function buildMetadata({ title, description, path = "/" }) {
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: new URL(path, siteConfig.canonicalUrl).toString(),
    },
    openGraph: {
      title: title ? `${title} | TokenCap` : siteConfig.ogTitle,
      description: description ?? siteConfig.ogDescription,
      url: new URL(path, siteConfig.canonicalUrl).toString(),
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: siteConfig.twitterCard,
      title: title ? `${title} | TokenCap` : siteConfig.name,
      description: description ?? siteConfig.ogDescription,
    },
  };
}
