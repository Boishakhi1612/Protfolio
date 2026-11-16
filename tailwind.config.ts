import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#090a0f",
          900: "#0f1118",
          850: "#141722",
          800: "#1a1e2d",
          700: "#24293e",
          600: "#323854",
        },
        lavender: {
          50: "#faf8ff",
          100: "#f3efff",
          200: "#e9e2fe",
          300: "#d7c7fe",
          400: "#be9dfd",
          500: "#a771fa",
          600: "#9144f2",
          700: "#7c2ce0",
          800: "#6723bd",
          900: "#541e99",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(30px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
