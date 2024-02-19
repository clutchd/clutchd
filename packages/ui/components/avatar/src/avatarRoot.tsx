import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { IImageLoadingStates } from "@clutchd/image";
import * as React from "react";
import { AvatarContext, type IWithAvatarContext } from "./_context";

/**
 * Type to define `AvatarRoot` element.
 */
type IAvatarRoot = React.ElementRef<typeof Component.span>;

/**
 * Type to define `AvatarRoot` props.
 */
interface IAvatarRootProps extends IWithAvatarContext {}

/**
 * Type to define `AvatarRoot` props with html attributes.
 */
interface IAvatarRootHtmlProps
  extends IAvatarRootProps,
    IComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `AvatarRoot` - An un-opinionated wrapper component for rendering an avatar.
 * @param props `IAvatarRootProps` used to render this `AvatarRoot`.
 * @returns `AvatarRoot` component.
 */
const AvatarRoot = React.forwardRef<IAvatarRoot, IAvatarRootHtmlProps>(
  ({ _context = AvatarContext, children, ...props }, forwardedRef) => {
    const [state, setState] = React.useState<IImageLoadingStates>("idle");
    return (
      <AvatarContext.Provider
        //TODO: make easier to override these internal states? (improve api)
        value={{
          loadingState: state,
          onLoadingStateChange: setState,
        }}
      >
        <Component.span
          data-loading-state={state}
          ref={forwardedRef}
          {...props}
        >
          {children}
        </Component.span>
      </AvatarContext.Provider>
    );
  },
);

AvatarRoot.displayName = "AvatarRoot";

export { AvatarRoot };
export type { IAvatarRoot, IAvatarRootHtmlProps, IAvatarRootProps };
