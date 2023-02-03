import { Subtle, ISubtle, ISubtleProps } from "@clutchd/text";
import * as React from "react";

/**
 * Type to define `Copyright` element
 */
type ICopyright = ISubtle;

/**
 * Type to define `Copyright` props
 */
interface ICopyrightProps extends ISubtleProps {}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year
 * @param props `ICopyrightProps` used to render this `Copyright`
 * @returns `Copyright` component
 */
const Copyright = React.forwardRef<ICopyright, ICopyrightProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Subtle ref={forwardedRef} {...props}>
        © {new Date().getFullYear()} {children}
      </Subtle>
    );
  }
);

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyrightProps, ICopyright };
