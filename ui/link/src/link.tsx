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
interface ILinkProps {}

/**
 * Type to define `Link` props with html attributes
 */
interface ILinkHtmlProps
  extends ILinkProps,
    IComponentPropsWithoutRef<typeof Component.a> {}

/**
 * `Link` - A simple link component, leverages next/link
 * @param props `ILinkHtmlProps` used to render this `Link`
 * @returns `Link` component
 */
const Link = React.forwardRef<ILink, ILinkHtmlProps>(
  ({ href = "/", className, children, ...props }, forwardedRef) => {
    return (
      <Component.a
        className={[
          "cursor-pointer focus:outline-2 focus:outline-blue-500 focus:outline-offset-4",
          className,
        ].join(" ")}
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
export type { ILink, ILinkProps, ILinkHtmlProps };
