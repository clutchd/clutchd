import styled from "styled-components";
import {
  border,
  compose,
  color,
  layout,
  position,
  typography,
  shadow,
  space,
  variant,
} from "styled-system";
import { Button as ReakitButton } from "reakit";

// Theme
import Theme from "../theme";
const defaultTheme = Theme;

// Variants
import { primary, secondary, tertiary, gradient } from "./variants/colors";
import { dropShadow, dropShadowLift } from "./variants/hovers";

// Component
const Button = styled(ReakitButton)(
  {
    cursor: "pointer",
    transition: "ease-in-out all 200ms",
  },
  compose(border, color, layout, position, typography, shadow, space),
  variant({
    variants: {
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
      gradient: gradient,
    },
  }),
  variant({
    prop: "hover",
    variants: {
      dropShadow: dropShadow,
      dropShadowLift: dropShadowLift,
    },
  })
);

Button.defaultProps = {
  border: "none",
  borderRadius: `${defaultTheme.radii[2]}px`,
  position: "relative",
  top: 0,
  m: `${defaultTheme.space[2]}px`,
  p: `${defaultTheme.space[1]}px ${defaultTheme.space[3]}px`,
  color: "white",
  fontSize: `${defaultTheme.fontSizes[2]}px`,
  fontFamily: `${defaultTheme.fonts}`,
  fontWeight: 700,
  variant: "primary",
  hover: "dropShadow",
};

export default Button;
