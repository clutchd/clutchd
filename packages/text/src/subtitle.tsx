import { clsx } from "@clutchd/clsx";
import { getColor } from "@clutchd/tailwind";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Subtitle` component
 */
type ISubtitle = typeof Subtitle;

/**
 * Type to define `Subtitle` props
 */
interface ISubtitleProps extends ITextProps {}

/**
 * `Subtitle` - A text component with a little more emphasis
 * @param props `ISubtitleProps` used to render this `Subtitle`
 * @returns `Subtitle` component
 */
function Subtitle({
  className,
  fontSize = "text-lg",
  fontWeight = "font-normal",
  theme = "gray",
  ...props
}: ISubtitleProps) {
  const color = getColor(theme, "400").textColor;
  return (
    <Base
      className={clsx(color, className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    />
  );
}

export { Subtitle };
export type { ISubtitle, ISubtitleProps };
