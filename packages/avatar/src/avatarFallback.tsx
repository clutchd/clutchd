import { Primitive } from "@radix-ui/react-primitive";
import * as React from "react";
import { AvatarContext, type IWithAvatarContext } from "./_context";

/**
 * Type to define `IAvatarFallback` element.
 */
type IAvatarFallback = React.ComponentRef<typeof Primitive.span>;

/**
 * Type to define `AvatarFallback` props.
 */
interface IAvatarFallbackProps extends IWithAvatarContext {}

/**
 * Type to define `AvatarFallback` props with html attributes.
 */
interface IAvatarFallbackHtmlProps
  extends IAvatarFallbackProps,
    React.ComponentPropsWithoutRef<typeof Primitive.span> {}

/**
 * `AvatarFallback` - A text component used to render a avatar's fallback if an image is not provided to an `Avatar`.
 * @param props `IAvatarProps` used to render this `Avatar`.
 * @returns `AvatarFallback` component.
 */
function AvatarFallback({
  _context = AvatarContext,
  children,
  ...props
}: IAvatarFallbackHtmlProps) {
  const context = React.useContext(_context);
  return context.loadingState !== "loaded" ? (
    <Primitive.span {...props}>{children}</Primitive.span>
  ) : null;
}

AvatarFallback.displayName = "AvatarFallback";

export { AvatarFallback };
export type { IAvatarFallback, IAvatarFallbackHtmlProps, IAvatarFallbackProps };
