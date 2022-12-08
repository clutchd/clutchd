const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "**/*.{js,ts,jsx,tsx}",
    "../../apps/**/*.{js,ts,jsx,tsx}",
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#830DF2",
        },
        accent: {
          500: "#1C2541",
        },
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
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
