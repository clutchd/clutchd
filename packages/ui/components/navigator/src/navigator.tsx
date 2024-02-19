import { Component } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import { CoreLink, ILinkHtmlProps, ILinkProps } from "@clutchd/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { isActiveRoute as internalIsActiveRoute } from ".";

/**
 * Type to define `Navigator` element.
 */
type INavigator = React.ElementRef<typeof Component.a>;

/**
 * Type to define `Navigator` props.
 */
interface INavigatorProps extends ILinkProps {
  isActiveRoute?: typeof internalIsActiveRoute;
}

/**
 * Type to define `Navigator` props with html attributes.
 */
interface INavigatorHtmlProps extends INavigatorProps, ILinkHtmlProps { }

/**
 * `CoreNavigator` - The core navigator component, leverages next/link.
 * @param props `INavigatorHtmlProps` used to render this `Navigator`.
 * @returns `Navigator` component.
 */
const CoreNavigator = React.forwardRef<INavigator, INavigatorHtmlProps>(
  (
    { href = "/", children, isActiveRoute = internalIsActiveRoute, ...props },
    forwardedRef,
  ) => {
    const pathname = usePathname();
    const [isActive, setIsActive] = React.useState(
      isActiveRoute(pathname, href),
    );

    React.useEffect(() => {
      setIsActive(isActiveRoute(pathname, href));
    }, [pathname, href, isActiveRoute]);

    return (
      <CoreLink
        href={href}
        data-active={isActive}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </CoreLink>
    );
  },
);

CoreNavigator.displayName = "CoreNavigator";

/**
 * `Navigator` - A simple navigator component, leverages next/link and includes basic styling.
 * @param props `INavigatorHtmlProps` used to render this `Navigator`.
 * @returns `Navigator` component.
 */
const Navigator = React.forwardRef<INavigator, INavigatorHtmlProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <CoreNavigator
        className={cn(
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/50 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Navigator.displayName = "Navigator";

export { CoreNavigator, Navigator };
export type { INavigator, INavigatorHtmlProps, INavigatorProps };
