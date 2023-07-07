import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import NextLink from "next/link";
import * as React from "react";

/**
 * Type to define `Link` element
 */
type ILink = React.ElementRef<typeof Component.a>;

/**
 * Type to define `Link` props
 */
interface ILinkProps extends IComponentPropsWithoutRef<typeof Component.a> {}

/**
 * `Link` - A simple link component, leverages next/link
 * @param props `ILinkProps` used to render this `Link`
 * @returns `Link` component
 */
const Link = React.forwardRef<ILink, ILinkProps>(
  ({ href = "/", className, children, ...props }, forwardedRef) => {
    return (
      <Component.a
        className={["cursor-pointer", className].filter(Boolean).join(" ")}
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

export { Link };
export type { ILink, ILinkProps };
