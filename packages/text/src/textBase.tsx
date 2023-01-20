import { clsx } from "@clutchd/clsx";
import {
  getTextColor,
  IColorShade,
  IWithColor,
  IWithFontSize,
  IWithFontWeight,
  IWithLineHeight,
} from "@clutchd/tailwind";
import { ElementType } from "react";

/**
 * Type to define `TextBase` component
 */
type ITextBase = typeof TextBase;

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
  tag?: ElementType;
}

/**
 * `TextBase` - The base text component that is responsible for rendering all text components
 * @param props `ITextBaseProps` used to render this `TextBase`
 * @returns `TextBase` component
 */
const TextBase = ({
  className,
  fontSize = "text-base",
  fontWeight = "font-normal",
  lineHeight = "leading-normal",
  shade,
  theme = "gray",
  truncate,
  tag: InternalText = "p",
  ...props
}: ITextBaseProps) => {
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
      {...props}
    />
  );
};

TextBase.displayName = "TextBase";

export { TextBase };
export type { ITextBase, ITextBaseProps, ITextPropsCommon };
