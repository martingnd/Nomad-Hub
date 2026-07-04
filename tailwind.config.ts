import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brown: "#4A2F24",
        beige: "#E8D8C3",
        terracotta: "#C46A45",
        "terracotta-hover": "#AE5A38",
        sage: "#7C8A6A",
        "sage-hover": "#66755A",
        cream: "#F7F1E8",
        ink: "#1F1A17",
      },
      fontFamily: {
        serif: ["var(--font-bitter)"],
        sans: ["var(--font-manrope)"],
      },
      maxWidth: {
        site: "1440px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
