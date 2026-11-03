import localFont from "next/font/local";

export const dmSans = localFont({
  src: "./fonts/dm-sans.woff2",
  variable: "--font-dm-sans",
  display: "swap",
  weight: "400 700",
});

export const fraunces = localFont({
  src: "./fonts/fraunces.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "400 600",
});

export const montserrat = localFont({
  src: "./fonts/montserrat.woff2",
  variable: "--font-montserrat",
  display: "swap",
  weight: "500 700",
});
