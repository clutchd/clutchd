import { composeEventHandlers } from "@clutchd/compose-event-handlers";

/**
 * Composes multiple prop objects into a single prop object
 * @param props Array of prop objects that will be composed
 * @returns A single prop object composed from all provided props
 */
function composeProps(...props: Record<string, any>[]) {
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
 * Merges two prop objects into a single prop object
 * @param originalProps The original props object
 * @param newProps The new props object
 * @returns A single prop object composed from the original and new props
 */
function mergeProps(
  originalProps: Record<string, any>,
  newProps: Record<string, any> | undefined,
): Record<string, any> {
  // iterate through all provided prop names
  for (const propName in newProps) {
    // if handlers are found, compose them
    if (
      typeof originalProps[propName] === "function" &&
      typeof newProps[propName] === "function"
    ) {
      newProps[propName] = composeEventHandlers(
        originalProps[propName],
        newProps[propName],
      );
    }

    // if a className prop, compose classes
    else if (propName === "className") {
      newProps[propName] = composeClassNames(
        originalProps[propName],
        newProps[propName],
      );
    }

    // if a style prop, compose styles
    else if (propName === "style") {
      newProps[propName] = {
        ...originalProps[propName],
        ...newProps[propName],
      };
    }
  }
  return { ...originalProps, ...newProps };
}

/**
 * Composes multiple classNames into a single className
 * @param classNames Array of classNames that will be composed
 * @returns A single className composed from all provided classNames
 */
function composeClassNames(...classNames: any[]) {
  return classNames.filter(Boolean).join(" ");
}

export { composeProps, composeClassNames };
