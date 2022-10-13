import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Caption` component
 */
type ICaption = typeof Caption;

/**
 * Type to define `Caption` props
 */
interface ICaptionProps extends ITextProps {}

/**
 * `Caption` - A small text component intended caption copy
 * @param props `ICaptionProps` used to render this `Caption`
 * @returns `Caption` component
 */
function Caption(props: ICaptionProps) {
  return <Base component="text-sm font-normal text-gray-500" {...props} />;
}

export { Caption };
export type { ICaption, ICaptionProps };
