import { Component } from "@clutchd/component";
import * as React from "react";

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
        "cursor-default mx-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-100",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
