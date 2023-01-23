import * as React from "react";
import { IText, ITextProps } from ".";
import { TextBase } from "./textBase";

/**
 * Type to define `Caption` element
 */
type ICaption = IText;

/**
 * Type to define `Caption` props
 */
interface ICaptionProps extends ITextProps {}

/**
 * `Caption` - A small text component intended caption copy
 * @param props `ICaptionProps` used to render this `Caption`
 * @returns `Caption` component
 */
const Caption = React.forwardRef<ICaption, ICaptionProps>(
  ({ fontSize = "text-sm", ...props }, forwardedRef) => {
    return (
      <TextBase fontSize={fontSize} shade="500" ref={forwardedRef} {...props} />
    );
  }
);

Caption.displayName = "TextCaption";

export { Caption };
export type { ICaption, ICaptionProps };
