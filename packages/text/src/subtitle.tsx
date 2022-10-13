import { Base } from "./base";
import { ITextProps } from "./text";

/**
 * Type to define `Subtitle` component
 */
type ISubtitle = typeof Subtitle;

/**
 * Type to define `Subtitle` props
 */
interface ISubtitleProps extends ITextProps {}

/**
 * `Subtitle` - A text component with a little more emphasis
 * @param props `ISubtitleProps` used to render this `Subtitle`
 * @returns `Subtitle` component
 */
function Subtitle(props: ISubtitleProps) {
  return <Base component="text-lg font-normal text-gray-400" {...props} />;
}

export { Subtitle };
export type { ISubtitle, ISubtitleProps };
