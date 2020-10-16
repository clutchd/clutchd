import { lighten } from "polished";

export const primary = ({ ...props }) => ({
  bg: `${props.theme.colors.primary}`,
  "&:hover": {
    bg: `${lighten(0.2, props.theme.colors.primary)}`,
  },
});

export const secondary = ({ ...props }) => ({
  bg: `${props.theme.colors.secondary}`,
  "&:hover": {
    bg: `${lighten(0.2, props.theme.colors.secondary)}`,
  },
});

export const tertiary = ({ ...props }) => ({
  bg: `${props.theme.colors.tertiary}`,
  "&:hover": {
    bg: `${lighten(0.2, props.theme.colors.tertiary)}`,
  },
});

export const gradient = ({ ...props }) => ({
  bg: `${props.theme.colors.primary}`,
  background: `linear-gradient(150deg,
    ${props.theme.colors.secondary} 0%,
    ${props.theme.colors.primary} 60%,
    ${props.theme.colors.tertiary} 95%)`,
  "&:hover": {
    background: `linear-gradient(150deg,
      ${lighten(0.2, props.theme.colors.secondary)} 0%,
      ${lighten(0.2, props.theme.colors.primary)} 60%,
      ${lighten(0.2, props.theme.colors.tertiary)} 95%)`,
  },
});

export const glass = ({ ...props }) => ({
  bg: `rgb(255, 255, 255, 0.2)`,
  "&:hover": {
    bg: `rgb(255, 255, 255, 0.4)`,
  },
});
