import * as React from "react";

/**
 * Type to define `ProtectComponent` element
 */
type IProtectComponent = React.ElementRef<typeof React.Fragment>;

/**
 * Type to define `ProtectComponent` props
 */
interface IProtectComponentProps {
  children: React.ReactNode;
  loading?: React.ReactNode;
  status: "loading" | "authenticated" | "unauthenticated";
  unauthenticated?: React.ReactNode;
}

/**
 * `ProtectComponent` - A HOC that will protect a component from displaying sensitive data to an unauthenticated user
 * @param props `IProtectComponentProps` used to render this `ProtectComponent`
 * @returns `ProtectComponent` component
 */
const ProtectComponent = React.forwardRef<
  IProtectComponent,
  IProtectComponentProps
>(({ children, loading, status, unauthenticated }) => {
  // if authenticated, return authenticated component
  if (status === "authenticated") {
    return <>{children}</>;
  }

  // if unauthenticated, return unauthenticated component
  if (status === "unauthenticated") {
    return <>{unauthenticated}</>;
  }

  // otherwise, still loading
  return <>{loading}</>;
});

ProtectComponent.displayName = "ProtectComponent";

export { ProtectComponent };
export type { IProtectComponent, IProtectComponentProps };
