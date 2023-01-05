import { isEmpty } from "@clutchd/is-empty";

/**
 * Merges multiple event handlers into a single event handler array
 * @param event Shared event for all merged event handlers
 * @param handlers Event handlers that will be merged
 * @returns A single event handler array of all provided handlers
 */
function mergeEventHandlers<E>(event: E, ...handlers: { (event: E): void }[]) {
  return handlers
    .filter((handler) => !isEmpty(handler))
    .forEach((handler) => {
      return handler?.(event);
    });
}

export { mergeEventHandlers };
