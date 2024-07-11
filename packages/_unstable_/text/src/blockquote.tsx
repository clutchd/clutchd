import { Component } from "@clutchd/component";
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
  IBlockquoteProps & React.ComponentPropsWithoutRef<typeof Component.blockquote>
>(({ className, ...props }, forwardedRef) => {
  // TODO: Bring back theming
  return (
    <blockquote
      className={[
        "my-6 border-l-4 pl-6 text-sm font-medium italic leading-normal sm:text-base lg:text-lg",
        "border-gray-200 text-gray-900 dark:border-gray-700 dark:text-gray-100",
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
