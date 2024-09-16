import { Component } from "@clutchd/component";
import * as React from "react";
import { AvatarContext, type IWithAvatarContext } from "./_context";

/**
 * Type to define `IAvatarFallback` element.
 */
type IAvatarFallback = React.ElementRef<typeof Component.span>;

/**
 * Type to define `AvatarFallback` props.
 */
interface IAvatarFallbackProps extends IWithAvatarContext {}

/**
 * Type to define `AvatarFallback` props with html attributes.
 */
interface IAvatarFallbackHtmlProps
  extends IAvatarFallbackProps,
    React.ComponentPropsWithoutRef<typeof Component.span> {}

/**
 * `AvatarFallback` - A text component used to render a avatar's fallback if an image is not provided to an `Avatar`.
 * @param props `IAvatarProps` used to render this `Avatar`.
 * @returns `AvatarFallback` component.
 */
const AvatarFallback = React.forwardRef<
  IAvatarFallback,
  IAvatarFallbackHtmlProps
>(({ _context = AvatarContext, children, ...props }, forwardedRef) => {
  const context = React.useContext(_context);
  return context.loadingState !== "loaded" ? (
    <Component.span {...props} ref={forwardedRef}>
      {children}
    </Component.span>
  ) : null;
});

AvatarFallback.displayName = "AvatarFallback";

export { AvatarFallback };
export type { IAvatarFallback, IAvatarFallbackHtmlProps, IAvatarFallbackProps };
