import { siteConfig } from "@/lib/constants";

export function buildMetadata({ title, description, path = "/" }) {
  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: new URL(path, siteConfig.url).toString(),
    },
    openGraph: {
      title: title ? `${title} | TokenCap` : siteConfig.name,
      description: description ?? siteConfig.description,
      url: new URL(path, siteConfig.url).toString(),
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "TokenCap — AI-ready codebase snapshots",
        },
      ],
    },
    twitter: {
      card: siteConfig.twitterCard,
      title: title ? `${title} | TokenCap` : siteConfig.name,
      description: description ?? siteConfig.description,
      images: [siteConfig.ogImage],
    },
  };
}
