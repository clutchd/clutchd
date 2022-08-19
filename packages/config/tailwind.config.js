const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["**/*.{js,ts,jsx,tsx}", "../../packages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        screen: "100vh",
      },
      minWidth: {
        screen: "100vw",
      },
    },
  },
  plugins: [],
};
