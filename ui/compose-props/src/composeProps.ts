import { composeEventHandlers } from "@clutchd/compose-event-handlers";

/**
 * Composes multiple prop objects into a single prop object
 * @param props Array of prop objects that will be composed
 * @returns A single prop object composed from all provided props
 */
function composeProps(...props: Record<string, any>[]) {
  // create new props object for composed props
  let composed: Record<string, any> = {};

  // create object used to track and compose all event handlers
  let handlers: Record<string, { (event: any): void }[]> = {};

  // iterate through all provided prop objects
  props.forEach((currentProps) => {
    for (const key in currentProps) {
      // if a className prop, merge classes
      if (key === "className") {
        composed[key] = [composed[key], currentProps[key]]
          .filter(Boolean)
          .join(" ");
      }

      // if a style prop, merge styles
      else if (key === "style") {
        composed[key] = { ...composed[key], ...currentProps[key] };
      }

      // if composed is not null and currentProp is a handler, store prop for composing later
      else if (composed[key] && typeof currentProps[key] === "function") {
        (handlers[key] = handlers[key] || []).push(currentProps[key]);
      }

      // otherwise no conflicts, overwrite prop to allProps
      else {
        composed[key] = currentProps[key];
      }
    }
  });

  // compose all found handlers
  for (const key in handlers) {
    if (typeof composed[key] === "function") {
      composed[key] = composeEventHandlers(composed[key], ...handlers[key]);
    } else {
      composed[key] = composeEventHandlers(...handlers[key]);
    }
  }

  // return composed props
  return composed;
}

export { composeProps };
