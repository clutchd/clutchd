import clsx from "clsx";
import { Component, ComponentPropsWithoutRef } from "@clutchd/component";

function Layout({
  ...props
}: ComponentPropsWithoutRef<typeof Component.section>) {
  const defaultClassName =
    "flex flex-col flex-1 min-h-0 bg-gray-100 text-gray-900";
  return (
    <section {...props} className={clsx(defaultClassName, props.className)} />
  );
}

export { Layout };
