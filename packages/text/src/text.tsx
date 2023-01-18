import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import {
  getTextColor,
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
  extends IComponentPropsWithoutRef<typeof Component.p>,
    IWithFontSize,
    IWithLineHeight,
    IWithFontWeight,
    IWithColor {}

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
  return (
    <Base
      className={clsx(getTextColor(theme, "700"), className)}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...props}
    />
  );
}

Text.displayName = "Text";

export { Text };
export type { IText, ITextProps };
