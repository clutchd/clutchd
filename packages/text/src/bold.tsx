import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Bold` component
 */
type IBold = typeof Bold;

/**
 * Type to define `Bold` props
 */
interface IBoldProps extends ITextProps {}

/**
 * `Bold` - A inline text component used to bold the provided text, intended to be used within the `Text` component
 * @param props `IBoldProps` used to render this `Bold`
 * @returns `Bold` component
 */
function Bold(props: IBoldProps) {
  return <Base component="text-inherit font-bold" tag="span" {...props} />;
}

export { Bold };
export type { IBold, IBoldProps };
