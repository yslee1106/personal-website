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
        projectsBg: "#211E1A",
        projectsInk: "#FBF6EF",
        projectsMuted: "#C9C4B8",
        projectsAccent: "#D68A5C",
        projectsBorder: "rgba(251,246,239,.14)",
        projectsPlaceholder: "#171512",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1040px",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.4s ease",
      },
    },
  },
  plugins: [],
};

export default config;
