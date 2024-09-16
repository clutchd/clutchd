import type { ILinkHtmlProps, ILinkProps } from "@clutchd/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  type INavigatorRoot,
  NavigatorRoot,
  isActiveRoute as internalIsActiveRoute,
} from ".";

/**
 * Type to define `Navigator` element.
 */
type INavigator = INavigatorRoot;

/**
 * Type to define `Navigator` props.
 */
interface INavigatorProps extends ILinkProps {
  /**
   * Optional prop to override the default `isActiveRoute` functionality.
   */
  isActiveRoute?: typeof internalIsActiveRoute;
}

/**
 * Type to define `Navigator` props with html attributes.
 */
interface INavigatorHtmlProps extends INavigatorProps, ILinkHtmlProps {}

/**
 * `Navigator` - The navigator component, leverages `@clutchd/link`.
 * @param props `INavigatorHtmlProps` used to render this `Navigator`.
 * @returns `Navigator` component.
 */
const Navigator = React.forwardRef<INavigator, INavigatorHtmlProps>(
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
      <NavigatorRoot
        href={href}
        data-active={isActive}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </NavigatorRoot>
    );
  },
);

Navigator.displayName = "Navigator";

export { Navigator };
export type { INavigator, INavigatorHtmlProps, INavigatorProps };
