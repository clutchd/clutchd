import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#8E44AD",
  colorSecondary: "#8E44AD",

  // UI
  appBg: "#ECF0F1",
  appContentBg: "#FFFFFF",
  appBorderColor: "#D0D3D4",
  appBorderRadius: 5,

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontCode:
    '"Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',

  // Text colors
  textColor: "#000000",
  textInverseColor: "rgba(0,0,0,0.6)",

  // Toolbar default and active colors
  barTextColor: "rgba(0,0,0,0.6)",
  barSelectedColor: "#8E44AD",
  barBg: "#D0D3D4",

  // Form colors
  inputBg: "#000000",
  inputBorder: "rgba(0,0,0,0.6)",
  inputTextColor: "#000000",
  inputBorderRadius: 5,

  brandTitle: "clutchd",
  brandUrl: "https://ui.clutchd.design"
});
