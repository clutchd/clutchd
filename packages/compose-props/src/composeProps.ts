import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import { clsx } from "@clutchd/clsx";

function composeProps(
  original: Record<string, any>,
  ...props: Record<string, any>[]
) {
  // create new props object derived from original props
  let allProps = { ...original };

  // create object used to track and compose all event handlers
  let handlers: Record<string, { (event: any): void }[]> = {};

  // iterate through all provided prop objects
  props.forEach((currentProps) => {
    for (const key in currentProps) {
      // if a className prop, merge classes
      if (key === "className") {
        allProps[key] = clsx(allProps[key], currentProps[key]);
      }

      // if a style prop, merge styles
      else if (key === "style") {
        allProps[key] = { ...allProps[key], ...currentProps[key] };
      }

      // if allProp is not null and currentProp is a handler, store prop for composing later
      else if (allProps[key] && isFunction(currentProps[key])) {
        (handlers[key] = handlers[key] || []).push(currentProps[key]);
      }

      // otherwise no conflicts, overwrite prop to allProps
      else {
        allProps[key] = currentProps[key];
      }
    }
  });

  // compose all found handlers
  for (const key in handlers) {
    if (isFunction(allProps[key])) {
      allProps[key] = composeEventHandlers(allProps[key], ...handlers[key]);
    } else {
      allProps[key] = composeEventHandlers(...handlers[key]);
    }
  }

  // return composed props
  return allProps;
}

/**
 * Determines if the provided object is a function
 * @param object Object to determine
 * @returns true if object is a function, otherwise false
 */
function isFunction(object: any) {
  return object.call && object.apply;
}

export { composeProps };
