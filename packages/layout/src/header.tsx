import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Header({
  ...props
}: ReactPropsWithoutRef<typeof Component.header>) {
  const className = clsx("flex grow-1 shrink-0 p-6 sm:p-8", props.className);
  return <header {...props} className={className} />;
}

export { Header };
