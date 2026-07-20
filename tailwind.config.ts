import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    // Breakpoints de la spec (identiques aux défauts Tailwind, explicités)
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      chalk: "#F5F1EA",
      sand: "#EDE7DC",
      ink: {
        DEFAULT: "#1C1A17",
        muted: "#6B655C",
      },
      clay: {
        DEFAULT: "#B4522D",
        dark: "#9A4425",
      },
      brass: "#A8894F",
      forest: "#3A4A3F",
      line: "rgba(28,26,23,0.12)",
      "line-light": "rgba(245,241,234,0.16)",
    },
    fontFamily: {
      display: ["var(--font-display)", "Georgia", "serif"],
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
    },
    fontSize: {
      "display-xl": [
        "clamp(3rem, 8vw, 7.5rem)",
        { lineHeight: "0.98", letterSpacing: "-0.02em" },
      ],
      "display-lg": [
        "clamp(2.25rem, 5vw, 4.5rem)",
        { lineHeight: "1.02", letterSpacing: "-0.02em" },
      ],
      "display-md": [
        "clamp(1.75rem, 3vw, 2.75rem)",
        { lineHeight: "1.05", letterSpacing: "-0.02em" },
      ],
      "body-lg": ["clamp(1.05rem, 1.4vw, 1.25rem)", { lineHeight: "1.6" }],
      body: ["1rem", { lineHeight: "1.6" }],
      "body-sm": ["0.875rem", { lineHeight: "1.6" }],
      label: [
        "0.75rem",
        { lineHeight: "1.4", letterSpacing: "0.18em" },
      ],
    },
    extend: {
      spacing: {
        section: "clamp(6rem, 12vw, 12rem)",
        "page-top": "clamp(8rem, 14vw, 14rem)",
        gutter: "clamp(1.25rem, 5vw, 5rem)",
      },
      maxWidth: {
        container: "1440px",
        prose: "65ch",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "700": "700ms",
      },
    },
  },
  plugins: [],
};

export default config;
