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
  ({ href = "/", ...props }, forwardedRef) => {
    return <NextLink href={href} ref={forwardedRef} {...props} />;
  }
);

Link.displayName = "Link";

export { Link };
export type { ILinkProps, ILink };
