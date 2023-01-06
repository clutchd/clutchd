import { clsx } from "@clutchd/clsx";
import { getColor, IWithColor } from "@clutchd/tailwind";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Title` component
 */
type ITitle = typeof Title;

/**
 * Type to define `Title` props
 */
interface ITitleProps extends ITextProps, IWithColor {}

/**
 * `Title` - A bolder text component to be used for titles
 * @param props `ITitleProps` used to render this `Title`
 * @returns `Title` component
 */
function Title({
  className,
  fontSize = "text-xl",
  fontWeight = "font-medium",
  theme = "gray",
  ...props
}: ITitleProps) {
  const color = getColor(theme, "700").textColor;
  return (
    <Base
      className={clsx(color, className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
}

Title.displayName = "TextTitle";

export { Title };
export type { ITitle, ITitleProps };
