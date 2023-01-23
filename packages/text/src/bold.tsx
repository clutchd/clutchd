import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Bold` element
 */
type IBold = React.ElementRef<typeof Component.span>;

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
const Bold = React.forwardRef<IBold, IBoldProps>((props, forwardedRef) => {
  return (
    <TextBase fontWeight="font-bold" tag="span" ref={forwardedRef} {...props} />
  );
});

Bold.displayName = "TextBold";

export { Bold };
export type { IBold, IBoldProps };
