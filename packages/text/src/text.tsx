import { IComponent, IComponentProps } from "@clutchd/component";
import { Base } from "./base";

/**
 * Type to define `Text` component
 */
type IText = typeof Text;

/**
 * Type to define `Text` props
 */
interface ITextProps extends IComponentProps<IComponent["p"]> {
  protect?: boolean;
}

/**
 * `Text` - A standard text component used to render consistent copy
 * @param props `ITextProps` used to render this `Text`
 * @returns `Text` component
 */
function Text(props: ITextProps) {
  return <Base component="text-base font-normal text-gray-500" {...props} />;
}

export { Text };
export type { IText, ITextProps };
