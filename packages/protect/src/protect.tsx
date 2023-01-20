import { ReactNode } from "react";

/**
 * Type to define props for a component with a authenticated state
 */
interface IWithAuthProps {
  isAuth?: boolean;
  children: ReactNode;
}

/**
 * Type to define props for a component with a unauthenticated state
 */
interface IWithUnauthProps extends IWithAuthProps {
  unauth?: ReactNode;
}

/**
 * Type to define props for a component with a loading state
 */
interface IWithLoadingProps {
  isLoading?: boolean;
  loading?: ReactNode;
}

export type { IWithAuthProps, IWithUnauthProps, IWithLoadingProps };
