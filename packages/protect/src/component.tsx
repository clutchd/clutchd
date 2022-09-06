import { useSession } from "next-auth/react";
import { IDebuggable, IWithLoading, IWithUnauth, Validate } from "./protect";

interface IProtectComponent extends IDebuggable, IWithLoading, IWithUnauth { }

function ProtectComponent({
  isAuth = true,
  isLoading = false,
  loading = null,
  unauth = null,
  ...props
}: IProtectComponent) {
  const { status } = useSession();

  // page is loading when session is loading, or custom isLoading is true
  const loadingState = status === "loading" || isLoading;

  // page is authenticated when session is authenticated, and custom isAuth is true
  const authenticatedState = status === "authenticated" && isAuth;

  // if authenticated, and not loading, return authenticated component
  if (authenticatedState && !loadingState) {
    props.debug && console.log("authenticated");
    return Validate(props.children);
  }

  // if not authenticated, and not loading, return unauthenticated component
  if (!authenticatedState && !loadingState) {
    props.debug && console.log("unauthenticated");
    return Validate(unauth);
  }

  // otherwise, still loading
  props.debug && console.log("loading");
  return Validate(loading);
}

export { ProtectComponent };
export type { IProtectComponent };
