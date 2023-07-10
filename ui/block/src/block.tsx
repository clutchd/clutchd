import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Block` element
 */
type IBlock = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Block` props
 */
interface IBlockProps extends IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Block` - A block container for a vertical layout
 * @param props `IBlockProps` used to render this `Block`
 * @returns `Block` component
 */
const Block = React.forwardRef<IBlock, IBlockProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        className={["block h-full w-full", className].filter(Boolean).join(" ")}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Block.displayName = "Block";

export { Block };
export type { IBlock, IBlockProps };