import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stalwartstudios.in"),
  title: "Stalwart Studios — Crafting Exceptional Software",
  description:
    "Independent software studio building high-performance and customer-centric products. Creators of Focus Champ and more.",
  keywords: [
    "Stalwart Studios",
    "software studio",
    "Focus Champ",
    "productivity app",
    "indie software",
    "mobile apps",
  ],
  authors: [{ name: "Stalwart Studios" }],
  creator: "Stalwart Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stalwartstudios.in",
    title: "Stalwart Studios — Crafting Exceptional Software",
    description:
      "Independent software studio building high-performance and customer-centric products.",
    siteName: "Stalwart Studios",
    images: [
      {
        url: "/logo-horizontal.svg",
        width: 1200,
        height: 630,
        alt: "Stalwart Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stalwart Studios — Crafting Exceptional Software",
    description:
      "Independent software studio building high-performance and customer-centric products.",
    images: ["/logo-horizontal.svg"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0A0A0B" />
      </head>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
