import * as React from "react";

interface IDebuggable {
  debug?: boolean; // TODO: Should be in the base Component props, all @clutchd components should allow some form of debugging
}

interface IWithAuth {
  isAuth?: boolean;
  children: React.ReactNode;
}

interface IWithUnauth extends IWithAuth {
  unauth?: React.ReactNode;
}

interface IWithLoading {
  isLoading?: boolean;
  loading?: React.ReactNode;
}

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
export type { IDebuggable, IWithAuth, IWithUnauth, IWithLoading };
