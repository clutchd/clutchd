import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Caption` component
 */
type ICaption = typeof Caption;

/**
 * Type to define `Caption` props
 */
interface ICaptionProps
  extends ITextPropsCommon,
    IComponentPropsWithoutRef<typeof Component.p> {}

/**
 * `Caption` - A small text component intended caption copy
 * @param props `ICaptionProps` used to render this `Caption`
 * @returns `Caption` component
 */
function Caption({ fontSize = "text-sm", ...props }: ICaptionProps) {
  return <TextBase fontSize={fontSize} shade="500" {...props} />;
}

Caption.displayName = "TextCaption";

export { Caption };
export type { ICaption, ICaptionProps };
