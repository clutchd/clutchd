import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { IDebuggable, IWithAuth, IWithLoading, Validate } from "./protect";

interface IProtectPage extends IDebuggable, IWithAuth, IWithLoading {
  secret?: boolean;
}

function ProtectPage({
  isAuth = true,
  isLoading = false,
  loading = null,
  secret = true,
  ...props
}: IProtectPage) {
  const { status } = useSession();
  const router = useRouter();

  // page is loading when session is loading, or custom isLoading is true
  const loadingState = status === "loading" || isLoading;

  // page is authenticated when session is authenticated, and custom isAuth is true
  const authenticatedState = status === "authenticated" && isAuth;

  // if authenticated, and not loading, return authenticated page
  if (authenticatedState && !loadingState) {
    props.debug && console.log("authenticated");
    return Validate(props.children);
  }

  // if page is not secret (public loading), return authenticated page
  if (loadingState && !secret) {
    props.debug && console.log("public loading");
    return Validate(props.children);
  }

  // otherwise, generate a potential redirect link
  let redirectRoute = "login"; // TODO: Customize redirect link
  if (router.pathname) {
    redirectRoute += `?next=${encodeURIComponent(router.pathname)}`;
  }

  // if not authenticated, and not loading, redirect to new url
  if (!authenticatedState && !loadingState) {
    props.debug && console.log("unauthenticated");
    router.push(redirectRoute, undefined, { shallow: true });
  }

  // otherwise, page is not done loading (private loading)
  // TODO: Add default loading icon/options
  props.debug && console.log("private loading");
  return Validate(loading);
}

export { ProtectPage };
export type { IProtectPage };
