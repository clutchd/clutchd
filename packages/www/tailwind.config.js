/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "../../node_modules/@clutchd/{component,copyright,layout}/dist/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f2ff",
          100: "#ebe6ff",
          200: "#d8d0ff",
          300: "#b8a8ff",
          400: "#9a82ff",
          500: "#7a5af8",
          600: "#5f3ee6",
          700: "#4a2fb8",
          800: "#362389",
          900: "#241a57",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
