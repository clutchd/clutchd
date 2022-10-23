import { clsx } from "@clutchd/clsx";
import { IComponent, IComponentProps } from "@clutchd/component";
import { Base } from "./base";

/**
 * Type to define `Italic` component
 */
type IItalic = typeof Italic;
/**
 * Type to define `Italic` props
 */
interface IItalicProps extends IComponentProps<IComponent["p"]> {
  protect?: boolean;
}

/**
 * `Italic` - A inline text component used to italicize the provided text, intended to be used within the `Text` component
 * @param props `IItalicProps` used to render this `Italic`
 * @returns `Italic` component
 */
function Italic({ className, ...props }: IItalicProps) {
  return (
    <Base
      className={clsx("italic", className)}
      tag="span"
      {...props}
    />
  );
}

export { Italic };
export type { IItalic, IItalicProps };
