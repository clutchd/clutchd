import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

interface IProtectPage {
  secret?: boolean;
  children?: React.ReactNode;
}

function ProtectPage({ secret = true, ...props }: IProtectPage) {
  const { status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  // return authenticated page
  if (status == "authenticated") {
    return <>{props.children}</>;
  }

  // otherwise, if page is not a secret, return page while still loading (public loading)
  if (loading && !secret) {
    return <>{props.children}</>;
  }

  // otherwise, generate a potential redirect link
  let redirectRoute = "login";
  if (router.pathname) {
    redirectRoute += `?next=${encodeURIComponent(router.pathname)}`;
  }

  // if session is not found, and is not loading, redirect (unauthenticated)
  if (status == "unauthenticated") {
    router.push(redirectRoute, undefined, { shallow: true });
  }

  // otherwise, page is not done loading (private loading)
  // TODO: Add loading icon/options
  return null;
}

export { ProtectPage };
export type { IProtectPage };
