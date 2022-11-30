import { clsx } from "@clutchd/clsx";
import { IComponent, IComponentProps } from "@clutchd/component";
import {
  getColor,
  IWithColor,
  IWithFontSize,
  IWithFontWeight,
  IWithLineHeight,
} from "@clutchd/tailwind";
import { Base } from "./base";

/**
 * Type to define `Text` component
 */
type IText = typeof Text;

/**
 * Type to define `Text` props
 */
interface ITextProps
  extends IComponentProps<IComponent["p"]>,
    IWithFontSize,
    IWithLineHeight,
    IWithFontWeight,
    IWithColor {
  protect?: boolean;
}

/**
 * `Text` - A standard text component used to render consistent copy
 * @param props `ITextProps` used to render this `Text`
 * @returns `Text` component
 */
function Text({
  className,
  fontSize = "text-base",
  fontWeight = "font-normal",
  lineHeight = "leading-normal",
  theme = "gray",
  ...props
}: ITextProps) {
  const color = getColor(theme, "500").textColor;
  return (
    <Base
      className={clsx(color, className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...props}
    />
  );
}

export { Text };
export type { IText, ITextProps };
