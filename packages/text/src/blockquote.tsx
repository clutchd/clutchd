import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Blockquote` element
 */
type IBlockquote = React.ElementRef<typeof Component.blockquote>;

/**
 * Type to define `Blockquote` props
 */
interface IBlockquoteProps {}

/**
 * `Blockquote` - A text component used to render a blockquote tag
 * @param props `IBlockquoteProps` used to render this `Blockquote`
 * @returns `Blockquote` component
 */
const Blockquote = React.forwardRef<
  IBlockquote,
  IBlockquoteProps & IComponentPropsWithoutRef<typeof Component.blockquote>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <blockquote
      className={[
        "font-medium text-sm sm:text-base lg:text-lg my-6 leading-normal pl-6 italic border-l-4",
        "text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700",
        className,
      ].join(" ")}
      ref={forwardedRef}
      {...props}
    />
  );
});

Blockquote.displayName = "TextBlockquote";

export { Blockquote };
export type { IBlockquote, IBlockquoteProps };
