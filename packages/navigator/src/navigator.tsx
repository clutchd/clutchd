import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { isActiveRoute as internalIsActiveRoute } from ".";

/**
 * Type to define `Navigator` element.
 */
type INavigator = typeof Link;

/**
 * Type to define `Navigator` props.
 */
interface INavigatorProps extends LinkProps {
  /**
   * Optional prop to override the default `isActiveRoute` functionality.
   */
  isActiveRoute?: typeof internalIsActiveRoute;
}

/**
 * Type to define `Navigator` props with html attributes.
 */
interface INavigatorHtmlProps
  extends INavigatorProps,
    React.HTMLAttributes<HTMLAnchorElement> {}

/**
 * `Navigator` - The navigator component, leverages `@clutchd/link`.
 * @param props `INavigatorHtmlProps` used to render this `Navigator`.
 * @returns `Navigator` component.
 */
function Navigator({
  href,
  children,
  isActiveRoute = internalIsActiveRoute,
  ...props
}: INavigatorHtmlProps) {
  const pathname = usePathname();
  const [isActive, setIsActive] = React.useState(isActiveRoute(pathname, href));

  React.useEffect(() => {
    setIsActive(isActiveRoute(pathname, href));
  }, [pathname, href, isActiveRoute]);

  return (
    <Link href={href} data-active={isActive} {...props}>
      {children}
    </Link>
  );
}

Navigator.displayName = "Navigator";

export { Navigator };
export type { INavigator, INavigatorHtmlProps, INavigatorProps };
