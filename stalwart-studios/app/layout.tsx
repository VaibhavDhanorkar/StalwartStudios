import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const rootDescription =
  "Independent, AI-enabled product studio building apps, SaaS, and games for businesses and consumers. Founded in India.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Stalwart Digital Studios — AI-Enabled Product Studio",
    template: `%s — ${site.entity}`,
  },
  description: rootDescription,
  keywords: [
    "Stalwart Digital Studios",
    "independent product studio",
    "AI-enabled product studio",
    "conversational AI",
    "AI agents",
    "document automation",
    "AI apps",
    "mobile app development",
    "SaaS development",
    "LMS development",
    "enterprise SaaS",
    "mobile apps",
    "B2B software",
    "Fovena",
    "Snugloop",
  ],
  authors: [{ name: site.entity }],
  creator: site.entity,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.siteUrl,
    title: "Stalwart Digital Studios — AI-Enabled Product Studio",
    description: rootDescription,
    siteName: site.entity,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.entity,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stalwart Digital Studios — AI-Enabled Product Studio",
    description: rootDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.entity,
  url: site.siteUrl,
  logo: `${site.siteUrl}/favicon.svg`,
  email: site.supportEmail,
  knowsAbout: [
    "AI-enabled products",
    "Mobile apps",
    "SaaS",
    "Learning management systems",
    "Product design",
    "Game development",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="noise-overlay antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
