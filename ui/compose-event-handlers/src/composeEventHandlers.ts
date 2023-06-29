import {
  IPossibleEventHandler,
  mergeEventHandlers,
} from "@clutchd/merge-event-handlers";

/**
 * Composes multiple event handlers into a single event handler function
 * @param handlers Array of event handlers that will be composed
 * @returns A single event handler function composed from all provided handlers
 */
const composeEventHandlers =
  <E>(...handlers: IPossibleEventHandler<E>[]) =>
  (event: E) =>
    mergeEventHandlers(event, ...handlers);

export { composeEventHandlers };
