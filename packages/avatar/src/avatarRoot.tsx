import type { IImageLoadingStates } from "@clutchd/image";
import { Primitive } from "@radix-ui/react-primitive";
import * as React from "react";
import { AvatarContext, type IWithAvatarContext } from "./_context";

/**
 * Type to define `AvatarRoot` element.
 */
type IAvatarRoot = React.ComponentRef<typeof Primitive.span>;

/**
 * Type to define `AvatarRoot` props.
 */
interface IAvatarRootProps extends IWithAvatarContext {}

/**
 * Type to define `AvatarRoot` props with html attributes.
 */
interface IAvatarRootHtmlProps
  extends IAvatarRootProps,
    React.ComponentPropsWithoutRef<typeof Primitive.span> {}

/**
 * `AvatarRoot` - An un-opinionated wrapper component for rendering an avatar.
 * @param props `IAvatarRootProps` used to render this `AvatarRoot`.
 * @returns `AvatarRoot` component.
 */
function AvatarRoot({
  _context = AvatarContext,
  children,
  ...props
}: IAvatarRootHtmlProps) {
  const [state, setState] = React.useState<IImageLoadingStates>("idle");
  return (
    <AvatarContext.Provider
      //TODO: make easier to override these internal states? (improve api)
      value={{
        loadingState: state,
        onLoadingStateChange: setState,
      }}
    >
      <Primitive.span data-loading-state={state} {...props}>
        {children}
      </Primitive.span>
    </AvatarContext.Provider>
  );
}

AvatarRoot.displayName = "AvatarRoot";

export { AvatarRoot };
export type { IAvatarRoot, IAvatarRootHtmlProps, IAvatarRootProps };
