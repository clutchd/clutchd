import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { getTheme, WithColor } from "@clutchd/tailwind";
import { twx } from "@clutchd/twx";
import NextLink from "next/link";
import * as React from "react";

/**
 * Type to define `Link` element
 */
type ILink = React.ElementRef<typeof Component.a>;

/**
 * Type to define `Link` props
 */
interface ILinkProps
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.a> {}

/**
 * `Link` - A simple link component, leverages next/link
 * @param props `ILinkProps` used to render this `Link`
 * @returns `Link` component
 */
const Link = React.forwardRef<ILink, ILinkProps>(
  ({ className, href = "/", theme = "gray", ...props }, forwardedRef) => {
    const classNames = twx(
      "cursor-pointer font-medium underline underline-offset-4",
      getTheme(theme, {
        slate: "text-slate-600 dark:text-slate-500",
        gray: "text-gray-600 dark:text-gray-500",
        zinc: "text-zinc-600 dark:text-zinc-500",
        neutral: "text-neutral-600 dark:text-neutral-500",
        stone: "text-stone-600 dark:text-stone-500",
        red: "text-red-600 dark:text-red-500",
        orange: "text-orange-600 dark:text-orange-500",
        amber: "text-amber-600 dark:text-amber-500",
        yellow: "text-yellow-600 dark:text-yellow-500",
        lime: "text-lime-600 dark:text-lime-500",
        green: "text-green-600 dark:text-green-500",
        emerald: "text-emerald-600 dark:text-emerald-500",
        teal: "text-teal-600 dark:text-teal-500",
        cyan: "text-cyan-600 dark:text-cyan-500",
        sky: "text-sky-600 dark:text-sky-500",
        blue: "text-blue-600 dark:text-blue-500",
        indigo: "text-indigo-600 dark:text-indigo-500",
        violet: "text-violet-600 dark:text-violet-500",
        purple: "text-purple-600 dark:text-purple-500",
        fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
        pink: "text-pink-600 dark:text-pink-500",
        rose: "text-rose-600 dark:text-rose-500",
      }),
      className
    );

    return (
      <NextLink
        className={classNames}
        href={href}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";

export { Link };
export type { ILinkProps, ILink };
