import { isEmpty } from "@clutchd/is-empty";

/**
 * Composes multiple event handlers into a single handler
 * @param original Original event handler that we are composing from, this handler will always execute
 * @param handlers Additional event handler that will only execute when the event has not been cancelled
 * @returns A single event handlers composed from all provided handlers
 */
function composeEventHandlers<E>(
  original: (event: E) => void,
  ...handlers: { (event: E): void }[]
) {
  // return the composed event handler
  return function (event: E) {
    // original event handler will always execute
    original?.(event);

    // additional event handlers will only execute when default is not prevented
    if (!(event as Event)?.defaultPrevented) {
      return handlers
        .filter((handler) => !isEmpty(handler))
        .forEach((handler) => {
          return handler?.(event);
        });
    }
  };
}

export { composeEventHandlers };
