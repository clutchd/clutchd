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
import {
  primary,
  secondary,
  tertiary,
  gradient,
  glass,
} from "./variants/colors";
import { rounded, oval, sharp } from "./variants/shapes";

// Component
const Button = styled(ReakitButton)(
  {
    theme: defaultTheme,
    cursor: "pointer",
    transition: "ease-in-out all 200ms",
  },
  compose(border, color, layout, position, typography, shadow, space),
  (props) =>
    variant({
      variants: {
        primary: primary(props),
        secondary: secondary(props),
        tertiary: tertiary(props),
        gradient: gradient(props),
        glass: glass(props),
      },
    }),
  variant({
    prop: "shape",
    variants: {
      rounded: rounded,
      oval: oval,
      sharp: sharp,
    },
  })
);

Button.defaultProps = {
  theme: defaultTheme,
  border: "none",
  shape: `rounded`,
  position: "relative",
  top: 0,
  m: `${defaultTheme.space[2]}px`,
  p: `${defaultTheme.space[1]}px ${defaultTheme.space[3]}px`,
  color: "white",
  fontSize: `${defaultTheme.fontSizes[2]}px`,
  fontFamily: `${defaultTheme.fonts}`,
  fontWeight: 700,
  variant: "primary",
  boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1),
  0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.05);`,
};

export default Button;
