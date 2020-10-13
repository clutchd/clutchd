import { linearGradient } from "polished";

// Theme
import Theme from "../../theme";
const defaultTheme = Theme;

export const primary = {
  bg: `${defaultTheme.colors.primary}`,
};

export const secondary = {
  bg: `${defaultTheme.colors.secondary}`,
};

export const tertiary = {
  bg: `${defaultTheme.colors.tertiary}`,
};

export const gradient = {
  ...linearGradient({
    colorStops: [
      `${defaultTheme.colors.secondary} 0%`,
      `${defaultTheme.colors.primary} 60%`,
      `${defaultTheme.colors.tertiary} 95%`,
    ],
    toDirection: "150deg",
    fallback: `${defaultTheme.colors.primary}`,
  }),
};

export const glass = {
  bg: `rgb(255, 255, 255, 0.2)`,
};
