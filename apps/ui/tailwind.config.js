/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./node_modules/@clutchd/avatar/dist/index.js",
    "./node_modules/@clutchd/block/dist/index.js",
    "./node_modules/@clutchd/button/dist/index.js",
    "./node_modules/@clutchd/card/dist/index.js",
    "./node_modules/@clutchd/component/dist/index.js",
    "./node_modules/@clutchd/copyright/dist/index.js",
    "./node_modules/@clutchd/divider/dist/index.js",
    "./node_modules/@clutchd/flex/dist/index.js",
    "./node_modules/@clutchd/form/dist/index.js",
    "./node_modules/@clutchd/grid/dist/index.js",
    "./node_modules/@clutchd/input/dist/index.js",
    "./node_modules/@clutchd/label/dist/index.js",
    "./node_modules/@clutchd/layout/dist/index.js",
    "./node_modules/@clutchd/link/dist/index.js",
    "./node_modules/@clutchd/text/dist/index.js",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
