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

/**
 * Validates a react element to ensure rendering
 * @param component `ReactNode` to validate
 * @returns A validated `ReactNode`
 */
function Validate(component: React.ReactNode): React.ReactElement | null {
  // null is a valid response for states that were not provided
  if (component == null) {
    return null;
  }

  // ensure component is valid
  if (!React.isValidElement(component)) {
    return <>{component}</>;
  }

  // otherwise, component is already valid
  return component;
}

export { Validate };
export type { IWithAuthProps, IWithUnauthProps, IWithLoadingProps };
