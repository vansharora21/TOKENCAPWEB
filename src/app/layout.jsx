import { Inter, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GradientBackground } from "@/components/shared/GradientBackground";
import { SearchModal } from "@/components/shared/SearchModal";
import { siteConfig } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": siteConfig.name,
              "operatingSystem": "Cross-platform (Windows, macOS, Linux)",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": siteConfig.description,
              "url": siteConfig.url
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-zinc-900 focus:border focus:border-zinc-800 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none"
          >
            Skip to content
          </a>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <GradientBackground />
            <SearchModal />
            <Navbar />
            <div id="main-content" className="relative flex-1">{children}</div>
            <Footer />
            <a
              href="https://chromewebstore.google.com/detail/tokencap-companion/opabefaobopdfpndkcbdhikihfccnkdi"
              target="_blank"
              rel="noreferrer"
              aria-label="Get the TokenCap Companion Chrome extension"
              title="Get TokenCap Companion for Chrome"
              className="fixed bottom-5 right-5 z-40 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-card-border bg-foreground px-4 text-xs font-bold text-background shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0"
            >
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">extension</span>
              <span className="hidden sm:inline">Get Chrome extension</span>
              <span className="sr-only sm:hidden">Get TokenCap Companion for Chrome</span>
            </a>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
