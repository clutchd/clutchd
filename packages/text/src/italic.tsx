import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Italic` element
 */
type IItalic = React.ElementRef<typeof Component.span>;

/**
 * Type to define `Italic` props
 */
interface IItalicProps
  extends ITextPropsCommon,
    IComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `Italic` - A inline text component used to italicize the provided text, intended to be used within the `Text` component
 * @param props `IItalicProps` used to render this `Italic`
 * @returns `Italic` component
 */
const Italic = React.forwardRef<IItalic, IItalicProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <TextBase
        className={clsx("italic", className)}
        tag="span"
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Italic.displayName = "TextItalic";

export { Italic };
export type { IItalic, IItalicProps };
