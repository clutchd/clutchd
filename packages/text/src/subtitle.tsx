import * as React from "react";
import { IText, ITextProps } from ".";
import { TextBase } from "./textBase";

/**
 * Type to define `Subtitle` element
 */
type ISubtitle = IText;

/**
 * Type to define `Subtitle` props
 */
interface ISubtitleProps extends ITextProps {}

/**
 * `Subtitle` - A text component with a little more emphasis
 * @param props `ISubtitleProps` used to render this `Subtitle`
 * @returns `Subtitle` component
 */
const Subtitle = React.forwardRef<ISubtitle, ISubtitleProps>(
  ({ fontSize = "text-lg", ...props }, forwardedRef) => {
    return (
      <TextBase fontSize={fontSize} shade="500" ref={forwardedRef} {...props} />
    );
  }
);

Subtitle.displayName = "TextSubtitle";

export { Subtitle };
export type { ISubtitle, ISubtitleProps };
