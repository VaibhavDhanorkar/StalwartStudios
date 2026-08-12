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

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.entity} — Precision Software Studio`,
    template: `%s — ${site.entity}`,
  },
  description:
    "Stalwart Digital Studios builds high-performance proprietary software. Creators of Focus Champ and more.",
  keywords: [
    "Stalwart Digital Studios",
    "software studio",
    "Focus Champ",
    "productivity app",
    "indie software",
    "mobile apps",
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
    title: `${site.entity} — Precision Software Studio`,
    description:
      "Independent product studio shipping proprietary software with precision.",
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
    title: `${site.entity} — Precision Software Studio`,
    description:
      "Independent product studio shipping proprietary software with precision.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0B" />
      </head>
      <body className="noise-overlay antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
