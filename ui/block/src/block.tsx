import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeClassNames as cn } from "@clutchd/compose-props";
import * as React from "react";

/**
 * Type to define `Block` element
 */
type IBlock = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Block` props
 */
interface IBlockProps {}

/**
 * Type to define `Block` props with html attributes
 */
interface IBlockHtmlProps
  extends IBlockProps,
    IComponentPropsWithoutRef<typeof Component.div> {}

/**
 * `Block` - A block container for a vertical layout
 * @param props `IBlockHtmlProps` used to render this `Block`
 * @returns `Block` component
 */
const Block = React.forwardRef<IBlock, IBlockHtmlProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div className={cn("block", className)} ref={forwardedRef} {...props} />
    );
  }
);

Block.displayName = "Block";

export { Block };
export type { IBlock, IBlockProps, IBlockHtmlProps };
