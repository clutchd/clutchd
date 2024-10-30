import type { IImageLoadingStates } from "@clutchd/image";
import * as React from "react";

/**
 * Context values for the `Avatar` element.
 */
type AvatarContextValue = {
  loadingState: IImageLoadingStates;
  onLoadingStateChange(state: IImageLoadingStates): void;
};

/**
 * Context for the `Avatar` element.
 */
const AvatarContext = React.createContext<AvatarContextValue>({
  loadingState: "idle",
  onLoadingStateChange: (state) => {
    console.error("Avatar: onLoadingStateChange not implemented", state);
  },
});

/**
 * Type to define the `_context` prop for the `Avatar` element.
 */
interface IWithAvatarContext {
  /**
   * TODO: Should this context prop be something handled in core?
   * TODO: Does this scale with deeply nested components using Context?
   * @see https://github.com/facebook/react/issues/23287
   * @see https://github.com/radix-ui/primitives/discussions/1091
   * @see https://codesandbox.io/p/sandbox/stupefied-zhukovsky-etk9m?file=%2Fsrc%2FAlertDialog.js%3A10%2C19
   */
  /**
   * The context utilized by this `Avatar` component tree.  Defaults to `AvatarContext`.
   */
  _context?: React.Context<AvatarContextValue>;
}

export { AvatarContext };
export type { AvatarContextValue, IWithAvatarContext };
