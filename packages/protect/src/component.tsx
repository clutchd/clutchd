import { useSession } from "next-auth/react";
import { IWithLoadingProps, IWithUnauthProps } from "./protect";

/**
 * Type to define `ProtectComponent` component
 */
type IProtectComponent = typeof ProtectComponent;

/**
 * Type to define `ProtectComponent` props
 */
interface IProtectComponentProps extends IWithLoadingProps, IWithUnauthProps { }

/**
 * `ProtectComponent` - A HOC that will protect a component from displaying sensitive data to an unauthenticated user
 * @param props `IProtectComponentProps` used to render this `ProtectComponent`
 * @returns `ProtectComponent` component
 */
function ProtectComponent({
  isAuth = true,
  isLoading = false,
  loading = null,
  unauth = null,
  ...props
}: IProtectComponentProps) {
  const { status } = useSession();

  // page is loading when session is loading, or custom isLoading is true
  const loadingState = status === "loading" || isLoading;

  // page is authenticated when session is authenticated, and custom isAuth is true
  const authenticatedState = status === "authenticated" && isAuth;

  // if authenticated, and not loading, return authenticated component
  if (authenticatedState && !loadingState) {
    return <>{props.children}</>;
  }

  // if not authenticated, and not loading, return unauthenticated component
  if (!authenticatedState && !loadingState) {
    return <>{unauth}</>;
  }

  // otherwise, still loading
  return <>{loading}</>;
}

ProtectComponent.displayName = "ProtectComponent";

export { ProtectComponent };
export type { IProtectComponent, IProtectComponentProps };
