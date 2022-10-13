import * as React from "react";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Italic` component
 */
type IItalic = typeof Italic;

/**
 * Type to define `Italic` props
 */
interface IItalicProps extends ITextProps {}

/**
 * `Italic` - A inline text component used to italicize the provided text, intended to be used within the `Text` component
 * @param props `IItalicProps` used to render this `Italic`
 * @returns `Italic` component
 */
function Italic(props: IItalicProps) {
  return <Base component="text-inherit italic" tag="span" {...props} />;
}

export { Italic };
export type { IItalic, IItalicProps };
