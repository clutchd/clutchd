import { Caption, ICaption, ICaptionProps } from "@clutchd/text";
import * as React from "react";

/**
 * Type to define `Copyright` element
 */
type ICopyright = ICaption;

/**
 * Type to define `Copyright` props
 */
interface ICopyrightProps extends ICaptionProps {}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year
 * @param props `ICopyrightProps` used to render this `Copyright`
 * @returns `Copyright` component
 */
const Copyright = React.forwardRef<ICopyright, ICopyrightProps>(
  ({ children, ...props }, forwardedRef) => {
    const year = new Date().getFullYear();
    return (
      <Caption ref={forwardedRef} {...props}>
        © {year} {children}
      </Caption>
    );
  }
);

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyrightProps, ICopyright };
