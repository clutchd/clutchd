module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        electricPurple: "#8805FF",
        spaceCadet: "#1C2541", //"#11151C", //"#FF05F9",
        tertiary: "#0B05FF",
      },
      fontFamily: {
        sans: [
          `"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
          "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", 
          "Segoe UI Emoji","Segoe UI Symbol", "Noto Color Emoji"`,
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
