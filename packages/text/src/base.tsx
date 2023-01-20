import { clsx } from "@clutchd/clsx";
import { IComponentPropsWithoutRef } from "@clutchd/component";
import {
  IWithFontSize,
  IWithFontWeight,
  IWithLineHeight,
} from "@clutchd/tailwind";
import { ElementType } from "react";

/**
 * Type to define `Base` component
 */
type IBase = typeof Base;

/**
 * Type to define `Base` props
 */
interface IBaseProps
  extends IComponentPropsWithoutRef<any>,
  IWithFontSize,
  IWithLineHeight,
  IWithFontWeight {
  tag?: ElementType;
}

/**
 * `Base` - The base text component that is responsible for rendering all text components
 * @param props `IBaseProps` used to render this `Base`
 * @returns `Base` component
 */
const Base = ({ children, tag: InternalText = "p", ...props }: IBaseProps) => {
  // get class names
  const className = clsx(
    props.fontSize,
    props.fontWeight,
    props.lineHeight,
    props.className
  );

  // otherwise, return component
  return <InternalText className={className}>{children}</InternalText>;
};

Base.displayName = "TextBase";

export { Base };
export type { IBase, IBaseProps };
