import { Component } from "@clutchd/component";
import type * as React from "react";

export function Badge({
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Component.div
      className={[
        "mx-2 inline-flex cursor-default items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
