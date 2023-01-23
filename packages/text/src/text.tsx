import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Text` element
 */
type IText = React.ElementRef<typeof Component.p>;

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
const Text = React.forwardRef<IText, ITextProps>((props, forwardRef) => {
  return <TextBase shade="700" ref={forwardRef} {...props} />;
});

Text.displayName = "Text";

export { Text };
export type { IText, ITextProps };
