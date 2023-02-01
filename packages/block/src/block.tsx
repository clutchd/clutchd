import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithSpaceY } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Block` element
 */
type IBlock = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Block` props
 */
interface IBlockProps
  extends WithSpaceY,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Block` - A block container for a vertical layout
 * @param props `IBlockProps` used to render this `Block`
 * @returns `Block` component
 */
const Block = React.forwardRef<IBlock, IBlockProps>(
  ({ className, spaceY, ...props }, forwardedRef) => {
    return (
      <div
        className={twx("block h-full w-full", spaceY, className)}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Block.displayName = "Block";

export { Block };
export type { IBlock, IBlockProps };
