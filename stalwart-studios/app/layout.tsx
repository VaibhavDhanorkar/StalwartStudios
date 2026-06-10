import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
        url: "/og-image.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0A0B" />
      </head>
      <body className="noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}
