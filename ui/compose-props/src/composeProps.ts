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

function mergeProps(
  originalProps: Record<string, any>,
  newProps: Record<string, any>
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
        newProps[propName]
      );
    }

    // if a className prop, merge classes
    else if (propName === "className") {
      newProps[propName] = [originalProps[propName], newProps[propName]]
        .filter(Boolean)
        .join(" ");
    }

    // if a style prop, merge styles
    else if (propName === "style") {
      newProps[propName] = {
        ...originalProps[propName],
        ...newProps[propName],
      };
    }
  }
  return { ...originalProps, ...newProps };
}

export { composeProps };
