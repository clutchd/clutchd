import { twx } from "@clutchd/twx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { WithColor, getTheme } from "@clutchd/tailwind";
import * as React from "react";

/**
 * Type to define `Card` element
 */
type ICard = React.ElementRef<typeof Component.div>;

/**
 * Type to define `Card` props
 */
interface ICardProps
  extends WithColor,
    IComponentPropsWithoutRef<typeof Component.div> {
  decoration?: "top" | "right" | "bottom" | "left";
  hover?: boolean;
}

/**
 * `Card` - A building block component used to render contained elements such as forms
 * @param props `ICardProps` used to render this `Card`
 * @returns `Card` component
 */
const Card = React.forwardRef<ICard, ICardProps>(
  (
    {
      children,
      className,
      decoration,
      hover = false,
      theme = "gray",
      ...props
    },
    forwardedRef
  ) => {
    const classNames = twx(
      "relative p-6 rounded-lg shadow ring-1 bg-white dark:bg-gray-900",
      getTheme(theme, {
        slate:
          "border-slate-400 dark:border-slate-500 ring-slate-200 dark:ring-slate-700",
        gray: "border-gray-400 dark:border-gray-500 ring-gray-200 dark:ring-gray-700",
        zinc: "border-zinc-400 dark:border-zinc-500 ring-zinc-200 dark:ring-zinc-700",
        neutral:
          "border-neutral-400 dark:border-neutral-500 ring-neutral-200 dark:ring-neutral-700",
        stone:
          "border-stone-400 dark:border-stone-500 ring-stone-200 dark:ring-stone-700",
        red: "border-red-400 dark:border-red-500 ring-red-200 dark:ring-red-700",
        orange:
          "border-orange-400 dark:border-orange-500 ring-orange-200 dark:ring-orange-700",
        amber:
          "border-amber-400 dark:border-amber-500 ring-amber-200 dark:ring-amber-700",
        yellow:
          "border-yellow-400 dark:border-yellow-500 ring-yellow-200 dark:ring-yellow-700",
        lime: "border-lime-400 dark:border-lime-500 ring-lime-200 dark:ring-lime-700",
        green:
          "border-green-400 dark:border-green-500 ring-green-200 dark:ring-green-700",
        emerald:
          "border-emerald-400 dark:border-emerald-500 ring-emerald-200 dark:ring-emerald-700",
        teal: "border-teal-400 dark:border-teal-500 ring-teal-200 dark:ring-teal-700",
        cyan: "border-cyan-400 dark:border-cyan-500 ring-cyan-200 dark:ring-cyan-700",
        sky: "border-sky-400 dark:border-sky-500 ring-sky-200 dark:ring-sky-700",
        blue: "border-blue-400 dark:border-blue-500 ring-blue-200 dark:ring-blue-700",
        indigo:
          "border-indigo-400 dark:border-indigo-500 ring-indigo-200 dark:ring-indigo-700",
        violet:
          "border-violet-400 dark:border-violet-500 ring-violet-200 dark:ring-violet-700",
        purple:
          "border-purple-400 dark:border-purple-500 ring-purple-200 dark:ring-purple-700",
        fuchsia:
          "border-fuchsia-400 dark:border-fuchsia-500 ring-fuchsia-200 dark:ring-fuchsia-700",
        pink: "border-pink-400 dark:border-pink-500 ring-pink-200 dark:ring-pink-700",
        rose: "border-rose-400 dark:border-rose-500 ring-rose-200 dark:ring-rose-700",
      }),
      getDecoration(decoration),
      hover && "hover:shadow-lg",
      className
    );

    return (
      <Component.div className={classNames} ref={forwardedRef} {...props}>
        {children}
      </Component.div>
    );
  }
);

Card.displayName = "Card";

/**
 * Gets the appropriate tailwind class based on the decoration prop
 * @param decoration Prop used to determine the decoration of this Card
 * @returns The appropriate tailwind class
 */
function getDecoration(decoration: ICardProps["decoration"]) {
  switch (decoration) {
    case "top":
      return "border-t-4";
    case "right":
      return "border-r-4";
    case "bottom":
      return "border-b-4";
    case "left":
      return "border-l-4";
    default:
      return "";
  }
}

export { Card };
export type { ICardProps, ICard };
