import {
  ILinkRoot,
  ILinkRootHtmlProps,
  ILinkRootProps,
  LinkRoot,
} from "@clutchd/link";
import * as React from "react";

/**
 * Type to define `NavigatorRoot` element.
 */
type INavigatorRoot = ILinkRoot;

/**
 * Type to define `NavigatorRoot` props.
 */
interface INavigatorRootProps extends ILinkRootProps {}

/**
 * Type to define `NavigatorRoot` props with html attributes.
 */
interface INavigatorRootHtmlProps
  extends INavigatorRootProps,
    ILinkRootHtmlProps {}

/**
 * `NavigatorRoot` - The root navigator component, leverages `@clutchd/link`.
 * @param props `INavigatorRootHtmlProps` used to render this `NavigatorRoot`.
 * @returns `NavigatorRoot` component.
 */
const NavigatorRoot = React.forwardRef<INavigatorRoot, INavigatorRootHtmlProps>(
  ({ href = "/", children, ...props }, forwardedRef) => {
    return (
      <LinkRoot href={href} ref={forwardedRef} {...props}>
        {children}
      </LinkRoot>
    );
  },
);

NavigatorRoot.displayName = "NavigatorRoot";

export { NavigatorRoot };
export type { INavigatorRoot, INavigatorRootHtmlProps, INavigatorRootProps };
