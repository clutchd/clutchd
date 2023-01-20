import { clsx } from "@clutchd/clsx";
import { getTextColor, IWithColor } from "@clutchd/tailwind";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Title` component
 */
type ITitle = typeof Title;

/**
 * Type to define `Title` props
 */
interface ITitleProps extends ITextProps {}

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
  return (
    <Base
      className={clsx(getTextColor(theme, "700"), className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
}

Title.displayName = "TextTitle";

export { Title };
export type { ITitle, ITitleProps };
