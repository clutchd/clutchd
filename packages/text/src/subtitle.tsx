import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Subtitle` component
 */
type ISubtitle = typeof Subtitle;

/**
 * Type to define `Subtitle` props
 */
interface ISubtitleProps
  extends ITextPropsCommon,
    IComponentPropsWithoutRef<typeof Component.p> {}

/**
 * `Subtitle` - A text component with a little more emphasis
 * @param props `ISubtitleProps` used to render this `Subtitle`
 * @returns `Subtitle` component
 */
function Subtitle({ fontSize = "text-lg", ...props }: ISubtitleProps) {
  return <TextBase fontSize={fontSize} shade="500" {...props} />;
}

Subtitle.displayName = "TextSubtitle";

export { Subtitle };
export type { ISubtitle, ISubtitleProps };
