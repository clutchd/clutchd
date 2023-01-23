import * as React from "react";
import { IText, ITextProps } from ".";
import { TextBase } from "./textBase";

/**
 * Type to define `Title` element
 */
type ITitle = IText;

/**
 * Type to define `Title` props
 */
interface ITitleProps extends ITextProps {}

/**
 * `Title` - A bolder text component to be used for titles
 * @param props `ITitleProps` used to render this `Title`
 * @returns `Title` component
 */
const Title = React.forwardRef<ITitle, ITitleProps>(
  (
    { fontSize = "text-xl", fontWeight = "font-medium", ...props },
    forwardedRef
  ) => {
    return (
      <TextBase
        fontSize={fontSize}
        fontWeight={fontWeight}
        shade="700"
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Title.displayName = "TextTitle";

export { Title };
export type { ITitle, ITitleProps };
