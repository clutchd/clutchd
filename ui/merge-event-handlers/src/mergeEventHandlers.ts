/**
 * Type to define a possible event handler
 */
type IPossibleEventHandler<E> = ((event: E) => void) | undefined;

/**
 * Merges multiple event handlers into a single event handler array
 * @param event Shared event for all merged event handlers
 * @param handlers Event handlers that will be merged for the provided event
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
