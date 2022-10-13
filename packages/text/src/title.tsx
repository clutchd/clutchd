import * as React from "react";
import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Title` component
 */
type ITitle = typeof Title;

/**
 * Type to define `Title` props
 */
interface ITitleProps extends ITextProps {}

/**
 * `Title` - A bolder text component to be used for titles
 * @param props `ITitleProps` used to render this `Title`
 * @returns `Title` component
 */
function Title(props: ITitleProps) {
  return <Base component="text-xl font-medium text-gray-800" {...props} />;
}

export { Title };
export type { ITitle, ITitleProps };
