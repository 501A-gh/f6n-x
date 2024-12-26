/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  // darkMode: ["selector"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "var(--funnelDisplay)",
        sans: ["sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "blur-in": "blurIn 1s forwards",
        "svg-path": "svgPath 4s forwards",
      },
      keyframes: {
        blurIn: {
          "0%": {
            opacity: "0",
            filter: "blur(5px)",
            transform: "translateY(10%)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateY(0%)",
          },
        },
        svgPath: {
          "0%": {
            strokeDasharray: "0, 100",
            opacity: "0",
            stroke: "lightblue",
          },
          "10%": {
            opacity: "1",
            stroke: "currentColor",
          },
          "100%": {
            strokeDasharray: "100, 0",
            opacity: "1",
            stroke: "currentColor",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-heropatterns")({
      variants: [],
      patterns: ["diagonal-stripes", "signal"],
      colors: {
        default: "#71717a",
      },
      opacity: {
        default: "0.1",
      },
    }),
  ],
} satisfies Config;
