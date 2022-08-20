import clsx from "clsx";
import { Component, ComponentPropsWithoutRef } from "..";

function Header({
  ...props
}: ComponentPropsWithoutRef<typeof Component.header>) {
  const defaultClassName = "flex grow-1 shrink-0 px-8 py-2";
  return <header {...props} className={clsx(defaultClassName, props.className)} />;
}

export { Header };