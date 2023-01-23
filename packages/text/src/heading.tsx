import { IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { ElementType } from "react";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Heading` element
 */
type IHeading = HTMLElement;

/**
 * Type to define `Heading` props
 */
interface IHeadingProps
  extends ITextPropsCommon,
    IComponentPropsWithoutRef<any> {
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * `Heading` - A text component used to render consistent headers with appropriate html tags
 * @param props `IHeadingProps` used to render this `Heading`
 * @returns `Heading` component
 */
const Heading = React.forwardRef<IHeading, IHeadingProps>(
  (
    { fontSize = "text-4xl", fontWeight = "font-semibold", ...props },
    forwardedRef
  ) => {
    return (
      <TextBase
        fontSize={fontSize}
        fontWeight={fontWeight}
        shade="900"
        tag={getType(props.level)}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Heading.displayName = "TextHeading";

/**
 * Determines the type of html element to render based on heading level
 * @param level heading level
 * @returns A `p` or `h(1-6)` tag
 */
function getType(level: IHeadingProps["level"]): ElementType {
  if (level == 0 || level == null) {
    return "p";
  }

  return `h${level}`;
}

export { Heading };
export type { IHeading, IHeadingProps };
