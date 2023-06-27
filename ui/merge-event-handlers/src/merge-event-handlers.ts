/**
 * Type to define a possible event handler
 */
type IPossibleEventHandler<E> = ((event: E) => void) | undefined;

/**
 * Merges multiple event handlers into a single event handler array
 * @param event Shared event for all merged event handlers
 * @param handlers Event handlers that will be merged
 * @returns A single event handler array of all provided handlers
 */
function mergeEventHandlers<E>(
  event: E,
  ...handlers: IPossibleEventHandler<E>[]
) {
  return handlers.forEach((handler) => {
    return handler?.(event);
  });
}

export { mergeEventHandlers };
export type { IPossibleEventHandler };
