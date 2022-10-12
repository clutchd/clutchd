import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { IWithAuthProps, IWithLoadingProps, Validate } from "./protect";

/**
 * Type to define `ProtectPage` component
 */
type IProtectPage = typeof ProtectPage;

/**
 * Type to define `ProtectPage` props
 */
interface IProtectPageProps extends IWithAuthProps, IWithLoadingProps {
  secret?: boolean;
}

/**
 * `ProtectPage` - A HOC that will protect a page from displaying sensitive data to an unauthenticated user
 * @param props `IProtectPageProps` used to render this `ProtectPage`
 * @returns `ProtectPage` component
 */
function ProtectPage({
  isAuth = true,
  isLoading = false,
  loading = null,
  secret = true,
  ...props
}: IProtectPageProps) {
  const { status } = useSession();
  const router = useRouter();

  // page is loading when session is loading, or custom isLoading is true
  const loadingState = status === "loading" || isLoading;

  // page is authenticated when session is authenticated, and custom isAuth is true
  const authenticatedState = status === "authenticated" && isAuth;

  // if authenticated, and not loading, return authenticated page
  if (authenticatedState && !loadingState) {
    return Validate(props.children);
  }

  // if page is not secret (public loading), return authenticated page
  if (loadingState && !secret) {
    return Validate(props.children);
  }

  // otherwise, generate a potential redirect link
  let redirectRoute = "login"; // TODO: Customize redirect link
  if (router.pathname) {
    redirectRoute += `?next=${encodeURIComponent(router.pathname)}`;
  }

  // if not authenticated, and not loading, redirect to new url
  if (!authenticatedState && !loadingState) {
    router.push(redirectRoute, undefined, { shallow: true });
  }

  // otherwise, page is not done loading (private loading)
  // TODO: Add default loading icon/options
  return Validate(loading);
}

export { ProtectPage };
export type { IProtectPage, IProtectPageProps };
