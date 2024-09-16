import { composeEventHandlers } from "@clutchd/compose-event-handlers";

/**
 * Composes multiple prop objects into a single prop object.
 * @param props Array of prop objects that will be composed.
 * @returns A single prop object composed from all provided props.
 */
function composeProps(...props: Record<string, unknown>[]) {
  // create new props object for composed props
  let composed = { ...props?.[0] };

  // iterate through all provided prop objects
  for (let i = 1; i < props.length; i++) {
    composed = mergeProps(composed, props[i]);
  }

  // return composed props
  return composed;
}

/**
 * Merges two prop objects into a single prop object.
 * @param originalProps The original props object.
 * @param newProps The new props object.
 * @returns A single prop object composed from the original and new props.
 */
function mergeProps(
  originalProps: Record<string, unknown>,
  newProps: Record<string, unknown> | undefined,
): Record<string, unknown> {
  // iterate through all provided prop names
  for (const propName in newProps) {
    // if handlers are found, compose them
    if (
      typeof originalProps[propName] === "function" &&
      typeof newProps[propName] === "function"
    ) {
      newProps[propName] = composeEventHandlers(
        originalProps[propName] as (...rest: unknown[]) => unknown,
        newProps[propName] as (...rest: unknown[]) => unknown,
      );
    }

    // if a className prop, compose classes
    else if (propName === "className") {
      newProps[propName] = composeClassNames(
        originalProps[propName] as string,
        newProps[propName] as string,
      );
    }

    // if a style prop, compose styles
    else if (propName === "style") {
      newProps[propName] = {
        ...(originalProps[propName] as Record<string, unknown>),
        ...(newProps[propName] as Record<string, unknown>),
      };
    }
  }
  return { ...originalProps, ...newProps };
}

/**
 * Composes multiple classNames into a single className.
 * @param classNames Array of classNames that will be composed.
 * @returns A single className composed from all provided classNames.
 */
function composeClassNames(...classNames: unknown[]) {
  return classNames.filter(Boolean).join(" ");
}

export { composeProps, composeClassNames };
