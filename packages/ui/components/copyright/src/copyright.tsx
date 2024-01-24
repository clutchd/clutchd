import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { getCopyright as internalGetCopyright } from ".";

/**
 * Type to define `Copyright` element
 */
type ICopyright = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Copyright` props
 */
interface ICopyrightProps {
  getCopyright: typeof internalGetCopyright;
}

/**
 * Type to define `Copyright` props with html attributes
 */
interface ICopyrightHtmlProps
  extends ICopyrightProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year
 * @param props `ICopyrightProps` used to render this `Copyright`
 * @returns `Copyright` component
 */
const Copyright = React.forwardRef<
  ICopyright,
  ICopyrightProps & IComponentPropsWithoutRef<typeof Component.p>
>(
  (
    { children, getCopyright = internalGetCopyright, ...props },
    forwardedRef,
  ) => {
    return (
      <Component.div ref={forwardedRef} {...props}>
        {getCopyright()} {children}
      </Component.div>
    );
  },
);

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyright, ICopyrightHtmlProps, ICopyrightProps };
