import { clsx } from "@clutchd/clsx";
import { getColor } from "@clutchd/tailwind";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Heading` component
 */
type IHeading = typeof Heading;

/**
 * Type to define `Heading` props
 */
interface IHeadingProps extends ITextProps {
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * `Heading` - A text component used to render consistent headers with appropriate html tags
 * @param props `IHeadingProps` used to render this `Heading`
 * @returns `Heading` component
 */
function Heading({
  className,
  fontSize = "text-4xl",
  fontWeight = "font-semibold",
  theme = "gray",
  ...props
}: IHeadingProps) {
  const color = getColor(theme, "700").textColor;
  return (
    <Base
      className={clsx(color, className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      tag={GetType(props.level)}
      {...props}
    />
  );
}

/**
 * Determines the type of html element to render based on heading level
 * @param level heading level
 * @returns A `p` or `h(1-6)` tag
 */
function GetType(level: IHeadingProps["level"]) {
  if (level == 0 || level == null) {
    return "p";
  }

  return `h${level}`;
}

export { Heading };
export type { IHeading, IHeadingProps };
