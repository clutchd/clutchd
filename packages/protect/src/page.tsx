import { NextRouter } from "next/router";
import * as React from "react";

/**
 * Type to define `ProtectPage` element
 */
type IProtectPage = React.ElementRef<typeof React.Fragment>;

/**
 * Type to define `ProtectPage` props
 */
interface IProtectPageProps {
  children: React.ReactNode;
  loading?: React.ReactNode;
  status: "loading" | "authenticated" | "unauthenticated";
  router: NextRouter;
}

/**
 * `ProtectPage` - A HOC that will protect a page from displaying sensitive data to an unauthenticated user
 * @param props `IProtectPageProps` used to render this `ProtectPage`
 * @returns `ProtectPage` component
 */
const ProtectPage = React.forwardRef<IProtectPage, IProtectPageProps>(
  ({ children, loading = null, status, router }) => {
    // if authenticated, return authenticated page
    if (status === "authenticated") {
      return <>{children}</>;
    }

    // // if page is not secret (public loading), return authenticated page
    // if (loadingState && !secret) {
    //   return <>{props.children}</>;
    // }

    // if unauthenticated, redirect to new url
    if (status === "unauthenticated") {
      router.push(
        `login${
          router.pathname && `?next=${encodeURIComponent(router.pathname)}`
        }`,
        undefined,
        { shallow: true }
      );
    }

    // otherwise, page is not done loading (private loading)
    // TODO: Add default loading icon/options
    return <>{loading}</>;
  }
);

ProtectPage.displayName = "ProtectPage";

export { ProtectPage };
export type { IProtectPage, IProtectPageProps };
