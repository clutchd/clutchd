import type { Component } from "@clutchd/component";
import * as React from "react";
import { type ILinkRoot, type ILinkRootProps, LinkRoot } from ".";

/**
 * Type to define `Link` element.
 */
type ILink = ILinkRoot;

/**
 * Type to define `Link` props.
 */
interface ILinkProps extends Omit<ILinkRootProps, "href"> {
  /**
   * The path or URL to navigate to. It can also be an object.  Defaults to `/` - the app's root.
   * @see https://nextjs.org/docs/api-reference/next/link#with-url-object
   */
  href?: Partial<ILinkRootProps["href"]>;
}

/**
 * Type to define `Link` props with html attributes.
 */
interface ILinkHtmlProps
  extends ILinkProps,
    Omit<
      React.ComponentPropsWithoutRef<typeof Component.a>,
      "asChild" | "href"
    > {}

/**
 * `Link` - A simple link component, leverages next/link.
 * @param props `ILinkHtmlProps` used to render this `Link`.
 * @returns `Link` component.
 */
const Link = React.forwardRef<ILink, ILinkHtmlProps>(
  ({ href = "/", ...props }, forwardedRef) => {
    return <LinkRoot href={href} ref={forwardedRef} {...props} />;
  },
);

Link.displayName = "Link";

export { Link };
export type { ILink, ILinkHtmlProps, ILinkProps };
