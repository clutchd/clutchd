import type { Component } from "@clutchd/component";
import NextLink from "next/link";
import * as React from "react";

/**
 * Type to define `A` element
 */
type IA = React.ElementRef<typeof Component.a>;

/**
 * `A` - A simple text link component, leverages next/link
 * @param props `IAProps` used to render this `A`
 * @returns `A` component
 */
const A = React.forwardRef<
  IA,
  React.ComponentPropsWithoutRef<typeof Component.a>
>(({ className, href = "/", ...props }, forwardedRef) => {
  // TODO: Bring back theming
  const classNames = [
    "cursor-pointer font-medium underline underline-offset-4",
    "text-gray-600 dark:text-gray-400",
    className,
  ].join(" ");

  return (
    <NextLink
      className={classNames}
      href={href}
      ref={forwardedRef}
      {...props}
    />
  );
});

A.displayName = "TextA";

export { A };
export type { IA };
