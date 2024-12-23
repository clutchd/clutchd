/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "../../node_modules/@clutchd/{avatar,component,copyright,layout}/dist/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
