import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/background.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: {
          50: "#151204",
          100: "#2b2408",
          200: "#564910",
          300: "#816d18",
          400: "#ab9221",
          500: "#d6b629",
          600: "#dec554",
          700: "#e7d37e",
          800: "#efe2a9",
          900: "#f7f0d4",
          950: "#fbf8ea",
        },
        background: {
          50: "#0d0d0d",
          100: "#1a1a1a",
          200: "#333333",
          300: "#4d4d4d",
          400: "#666666",
          500: "#808080",
          600: "#999999",
          700: "#b3b3b3",
          800: "#cccccc",
          900: "#e6e6e6",
          950: "#f2f2f2",
        },
        primary: {
          50: "#1a1500",
          100: "#332b00",
          200: "#665500",
          300: "#998000",
          400: "#ccaa00",
          500: "#ffd500",
          600: "#ffdd33",
          700: "#ffe666",
          800: "#ffee99",
          900: "#fff6cc",
          950: "#fffbe5",
        },
        secondary: {
          50: "#091703",
          100: "#122d06",
          200: "#245b0b",
          300: "#378811",
          400: "#49b616",
          500: "#5be31c",
          600: "#7ce949",
          700: "#9dee77",
          800: "#bdf4a4",
          900: "#def9d2",
          950: "#effce8",
        },
        accent: {
          50: "#0a1703",
          100: "#132e05",
          200: "#275b0b",
          300: "#3a8910",
          400: "#4eb715",
          500: "#61e41b",
          600: "#81ea48",
          700: "#a0ef76",
          800: "#c0f4a4",
          900: "#dffad1",
          950: "#effce8",
        },
      },
    },
  },
};
export default config;
