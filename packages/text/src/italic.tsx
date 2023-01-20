import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Italic` component
 */
type IItalic = typeof Italic;

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
function Italic({ className, ...props }: IItalicProps) {
  return (
    <TextBase className={clsx("italic", className)} tag="span" {...props} />
  );
}

Italic.displayName = "TextItalic";

export { Italic };
export type { IItalic, IItalicProps };
