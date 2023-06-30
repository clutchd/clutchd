import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import NextLink from "next/link";
import * as React from "react";

/**
 * Import `twx` if it exists, otherwise use simple merge function
 */
try {
  var twx = require("@clutchd/twx")?.twx;
} catch (er) {
  twx = (...args: any[]) => {
    return args.filter(Boolean).join(" ");
  };
}

/**
 * Type to define `Link` element
 */
type ILink = React.ElementRef<typeof Component.a>;

/**
 * Type to define `Link` props
 */
interface ILinkProps extends IComponentPropsWithoutRef<typeof Component.a> {}

/**
 * Class names used to style the `Link` component
 */
const LinkClassNames = `cursor-pointer`;

/**
 * `Link` - A simple link component, leverages next/link
 * @param props `ILinkProps` used to render this `Link`
 * @returns `Link` component
 */
const Link = React.forwardRef<ILink, ILinkProps>(
  ({ href = "/", className, children, ...props }, forwardedRef) => {
    return (
      <Component.a
        className={twx(LinkClassNames, className)}
        asChild
        {...props}
      >
        <NextLink href={href} ref={forwardedRef}>
          {children}
        </NextLink>
      </Component.a>
    );
  }
);

Link.displayName = "Link";

export { Link, LinkClassNames };
export type { ILink, ILinkProps };
