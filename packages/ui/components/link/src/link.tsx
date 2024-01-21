import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import * as React from "react";

/**
 * Type to define `Link` element
 */
type ILink = React.ElementRef<typeof Component.a>;

/**
 * Type to define `Link` props
 */
interface ILinkProps extends NextLinkProps {}

/**
 * Type to define `Link` props with html attributes
 */
interface ILinkHtmlProps
  extends ILinkProps,
    Omit<IComponentPropsWithoutRef<typeof Component.a>, "asChild" | "href"> {}

/**
 * `CoreLink` - The core link component, leverages next/link
 * @param props `ILinkHtmlProps` used to render this `Link`
 * @returns `Link` component
 */
const CoreLink = React.forwardRef<ILink, ILinkHtmlProps>(
  ({ href = "/", children, ...props }, forwardedRef) => {
    return (
      <Component.a asChild {...props}>
        <NextLink href={href} ref={forwardedRef}>
          {children}
        </NextLink>
      </Component.a>
    );
  },
);

/**
 * `Link` - A simple link component, leverages next/link and includes basic styling
 * @param props `ILinkHtmlProps` used to render this `Link`
 * @returns `Link` component
 */
const Link = React.forwardRef<ILink, ILinkHtmlProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <CoreLink
        className={cn(
          "focus:outline-2 focus:outline-offset-4 focus:outline-blue-500",
          className,
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Link.displayName = "Link";

export { CoreLink, Link };
export type { ILink, ILinkProps, ILinkHtmlProps };
