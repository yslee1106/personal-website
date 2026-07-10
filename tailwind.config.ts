import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FCFCFA",
        ink: "#1B1C1A",
        muted: "#7C7E78",
        line: "#E8E8E2",
        card: "#FFFFFF",
        accent: "#5A6B4E",
        "accent-soft": "#EEF1EA",
        heroBg: "#F6F1E9",
        heroInk: "#2A2520",
        heroMuted: "#5C5348",
        heroAccent: "#B4552D",
        heroOnAccent: "#FBF6EF",
        heroPanel: "#FBF6EF",
        heroBorder: "#E3D9C9",
        heroHover: "#F0E4D2",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1040px",
      },
    },
  },
  plugins: [],
};

export default config;
