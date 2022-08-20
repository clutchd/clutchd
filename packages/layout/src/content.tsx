import clsx from "clsx";
import { Component, ComponentPropsWithoutRef } from "..";

function Content({
  ...props
}: ComponentPropsWithoutRef<typeof Component.main>) {
  const defaultClassName = "flex flex-col flex-1";
  return (
    <main {...props} className={clsx(defaultClassName, props.className)} />
  );
}

export { Content };
