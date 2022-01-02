import clsx from "clsx";
import React from "react";
import { Component, IComponent } from "..";

export interface IPlaceholder extends IComponent {
  dark?: boolean;
}

export default function Placeholder({
  dark = false,
  ...props
}: IPlaceholder) {
  const classNames = clsx(
    dark ? "bg-white" : "bg-black",
    "opacity-50 rounded w-full h-full m-auto inline-block"
  )

  return (
    <Component {...props} className={clsx("max-w-full max-h-full", props.className)} >
      <span
        className={classNames}
      >
        {"\u200b"}
      </span>
    </Component>
  );
}
