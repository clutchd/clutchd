import { clsx } from "@clutchd/clsx";
import {
  getTextColor,
  IColorShade,
  IWithColor,
  IWithFontSize,
  IWithFontWeight,
  IWithLineHeight,
} from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `TextBase` element
 */
type ITextBase = HTMLElement;

/**
 * Type to define common props used by all `Text` components
 */
interface ITextPropsCommon
  extends IWithFontSize,
    IWithLineHeight,
    IWithFontWeight,
    IWithColor {
  truncate?: boolean;
}

interface IAnyTextProps extends ITextPropsCommon, Record<string, any> {}

/**
 * Type to define `TextBase` props
 */
interface ITextBaseProps extends IAnyTextProps {
  shade?: IColorShade;
  tag?: React.ElementType;
}

/**
 * `TextBase` - The base text component that is responsible for rendering all text components
 * @param props `ITextBaseProps` used to render this `TextBase`
 * @returns `TextBase` component
 */
const TextBase = React.forwardRef<ITextBase, ITextBaseProps>(
  (
    {
      className,
      fontSize = "text-base",
      fontWeight = "font-normal",
      lineHeight = "leading-normal",
      shade,
      theme = "gray",
      truncate,
      tag: InternalText = "p",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <InternalText
        className={clsx(
          shade && getTextColor(theme, shade),
          fontSize,
          fontWeight,
          lineHeight,
          truncate && "truncate",
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

TextBase.displayName = "TextBase";

export { TextBase };
export type { ITextBase, ITextBaseProps, ITextPropsCommon };
