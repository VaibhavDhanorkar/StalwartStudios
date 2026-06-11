import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0B",
          surface: "#111113",
          elevated: "#18181B",
        },
        border: {
          DEFAULT: "#2A2A2F",
          subtle: "#1E1E22",
        },
        text: {
          primary: "#EDE8E0",
          secondary: "#8A8A94",
          muted: "#6A6A74",
          dim: "#5A5A64",
          faint: "#4A4A52",
        },
        accent: {
          gold: "#F4C05F",
          teal: "#158C7D",
        },
      },
      fontFamily: {
        fraunces: ["Fraunces", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s ease forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
