import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Bold` component
 */
type IBold = typeof Bold;

/**
 * Type to define `Bold` props
 */
interface IBoldProps
  extends Omit<ITextPropsCommon, "fontWeight">,
    IComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `Bold` - A inline text component used to bold the provided text, intended to be used within the `Text` component
 * @param props `IBoldProps` used to render this `Bold`
 * @returns `Bold` component
 */
function Bold(props: IBoldProps) {
  return <TextBase fontWeight="font-bold" tag="span" {...props} />;
}

Bold.displayName = "TextBold";

export { Bold };
export type { IBold, IBoldProps };
