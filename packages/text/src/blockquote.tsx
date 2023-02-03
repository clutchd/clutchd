import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getTheme, WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import * as React from "react";

/**
 * Type to define `Blockquote` element
 */
type IBlockquote = React.ElementRef<typeof Component.blockquote>;

/**
 * Type to define `Blockquote` props
 */
interface IBlockquoteProps
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.blockquote> {}

/**
 * `Blockquote` - A text component used to render a blockquote tag
 * @param props `IBlockquoteProps` used to render this `Blockquote`
 * @returns `Blockquote` component
 */
const Blockquote = React.forwardRef<IBlockquote, IBlockquoteProps>(
  ({ className, theme = "gray", ...props }, forwardedRef) => {
    return (
      <blockquote
        className={twx(
          "font-medium text-sm sm:text-base lg:text-lg [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6 leading-normal pl-6 italic border-l-4",
          getTheme(theme, {
            slate:
              "text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700",
            gray: "text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700",
            zinc: "text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700",
            neutral:
              "text-neutral-900 dark:text-neutral-100 border-neutral-200 dark:border-neutral-700",
            stone:
              "text-stone-900 dark:text-stone-100 border-stone-200 dark:border-stone-700",
            red: "text-red-900 dark:text-red-100 border-red-200 dark:border-red-700",
            orange:
              "text-orange-900 dark:text-orange-100 border-orange-200 dark:border-orange-700",
            amber:
              "text-amber-900 dark:text-amber-100 border-amber-200 dark:border-amber-700",
            yellow:
              "text-yellow-900 dark:text-yellow-100 border-yellow-200 dark:border-yellow-700",
            lime: "text-lime-900 dark:text-lime-100 border-lime-200 dark:border-lime-700",
            green:
              "text-green-900 dark:text-green-100 border-green-200 dark:border-green-700",
            emerald:
              "text-emerald-900 dark:text-emerald-100 border-emerald-200 dark:border-emerald-700",
            teal: "text-teal-900 dark:text-teal-100 border-teal-200 dark:border-teal-700",
            cyan: "text-cyan-900 dark:text-cyan-100 border-cyan-200 dark:border-cyan-700",
            sky: "text-sky-900 dark:text-sky-100 border-sky-200 dark:border-sky-700",
            blue: "text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-700",
            indigo:
              "text-indigo-900 dark:text-indigo-100 border-indigo-200 dark:border-indigo-700",
            violet:
              "text-violet-900 dark:text-violet-100 border-violet-200 dark:border-violet-700",
            purple:
              "text-purple-900 dark:text-purple-100 border-purple-200 dark:border-purple-700",
            fuchsia:
              "text-fuchsia-900 dark:text-fuchsia-100 border-fuchsia-200 dark:border-fuchsia-700",
            pink: "text-pink-900 dark:text-pink-100 border-pink-200 dark:border-pink-700",
            rose: "text-rose-900 dark:text-rose-100 border-rose-200 dark:border-rose-700",
          }),
          className
        )}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Blockquote.displayName = "TextBlockquote";

export { Blockquote };
export type { IBlockquote, IBlockquoteProps };
