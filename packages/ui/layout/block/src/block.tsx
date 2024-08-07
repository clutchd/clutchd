import { Component } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import type { Display } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Block` element.
 */
type IBlock = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Block` props.
 */
interface IBlockProps {
  /**
   * A subset of the `Display` tailwindcss classes.  Defaults to `block`.
   * @see https://tailwindcss.com/docs/display
   */
  display?: Extract<Display, "block" | "inline-block" | "inline" | "hidden">;
}

/**
 * Type to define `Block` props with html attributes.
 */
interface IBlockHtmlProps
  extends IBlockProps,
    React.ComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Block` - A fundamental layout building block.
 * @param props `IBlockHtmlProps` used to render this `Block`.
 * @returns `Block` component.
 */
const Block = React.forwardRef<IBlock, IBlockHtmlProps>(
  ({ className, display = "block", ...props }, forwardedRef) => {
    return (
      <Component.div
        className={cn(display, className)}
        ref={forwardedRef}
        {...props}
      />
    );
  },
);

Block.displayName = "Block";

export { Block };
export type { IBlock, IBlockHtmlProps, IBlockProps };
