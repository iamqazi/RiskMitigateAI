import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: "#373B3F7F",
        gradient2: "#0B0E12A5",
      },
      fontFamily: {
        heading: ["Michroma", "sans-serif"],
        text: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
