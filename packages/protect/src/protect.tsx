import * as React from "react";

/**
 * Type to define props for a component with a authenticated state
 */
interface IWithAuthProps {
  isAuth?: boolean;
  children: React.ReactNode;
}

/**
 * Type to define props for a component with a unauthenticated state
 */
interface IWithUnauthProps extends IWithAuthProps {
  unauth?: React.ReactNode;
}

/**
 * Type to define props for a component with a loading state
 */
interface IWithLoadingProps {
  isLoading?: boolean;
  loading?: React.ReactNode;
}

export type { IWithAuthProps, IWithUnauthProps, IWithLoadingProps };
