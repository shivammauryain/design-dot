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
        primary: "#00378C",
        secondary: "#FF6B00",
        surface: "#F3F4F6",
        textDark: "#111827",
        textLight: "#4B5563",
        border: "#E5E7EB"
      },
    },
  },
  plugins: [],
};
export default config;
