import { Component } from "@clutchd/component";
import * as React from "react";
import { getCopyright as internalGetCopyright } from ".";

/**
 * Type to define `Copyright` element.
 */
type ICopyright = React.ElementRef<typeof Component.span>;

/**
 * Type to define `Copyright` props.
 */
interface ICopyrightProps {
  /**
   * Optional prop to override the default `getCopyright` functionality.
   */
  getCopyright?: typeof internalGetCopyright;
}

/**
 * Type to define `Copyright` props with html attributes.
 */
interface ICopyrightHtmlProps
  extends ICopyrightProps,
    React.ComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `Copyright` - A simple text component used to display the copyright of an entity for the current year.
 * @param props `ICopyrightProps` used to render this `Copyright`.
 * @returns `Copyright` component.
 */
const Copyright = React.forwardRef<
  ICopyright,
  ICopyrightProps & React.ComponentPropsWithoutRef<typeof Component.p>
>(
  (
    { children, getCopyright = internalGetCopyright, ...props },
    forwardedRef,
  ) => {
    return (
      <Component.span ref={forwardedRef} {...props}>
        {getCopyright()}
        {children ? `  ${children}` : null}
      </Component.span>
    );
  },
);

Copyright.displayName = "Copyright";

export { Copyright };
export type { ICopyright, ICopyrightHtmlProps, ICopyrightProps };
