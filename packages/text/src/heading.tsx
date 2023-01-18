import { clsx } from "@clutchd/clsx";
import { getTextColor } from "@clutchd/tailwind";
import { ElementType } from "react";
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
  return (
    <Base
      className={clsx(getTextColor(theme, "900"), className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      tag={getType(props.level)}
      {...props}
    />
  );
}

Heading.displayName = "TextHeading";

/**
 * Determines the type of html element to render based on heading level
 * @param level heading level
 * @returns A `p` or `h(1-6)` tag
 */
function getType(level: IHeadingProps["level"]): ElementType {
  if (level == 0 || level == null) {
    return "p";
  }

  return `h${level}`;
}

export { Heading };
export type { IHeading, IHeadingProps };
