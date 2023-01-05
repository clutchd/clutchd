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
  return function (event: E) {
    original?.(event);

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
