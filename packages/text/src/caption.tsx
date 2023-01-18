import { clsx } from "@clutchd/clsx";
import { getTextColor } from "@clutchd/tailwind";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Caption` component
 */
type ICaption = typeof Caption;

/**
 * Type to define `Caption` props
 */
interface ICaptionProps extends ITextProps {}

/**
 * `Caption` - A small text component intended caption copy
 * @param props `ICaptionProps` used to render this `Caption`
 * @returns `Caption` component
 */
function Caption({
  className,
  fontSize = "text-sm",
  fontWeight = "font-normal",
  theme = "gray",
  ...props
}: ICaptionProps) {
  return (
    <Base
      className={clsx(getTextColor(theme, "500"), className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
}

Caption.displayName = "TextCaption";

export { Caption };
export type { ICaption, ICaptionProps };
