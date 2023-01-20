import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Text` component
 */
type IText = typeof Text;

/**
 * Type to define `Text` props
 */
interface ITextProps
  extends ITextPropsCommon,
    IComponentPropsWithoutRef<typeof Component.p> {}

/**
 * `Text` - A standard text component used to render consistent copy
 * @param props `ITextProps` used to render this `Text`
 * @returns `Text` component
 */
function Text({ ...props }: ITextProps) {
  return <TextBase shade="700" {...props} />;
}

Text.displayName = "Text";

export { Text };
export type { IText, ITextProps };
