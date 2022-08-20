import { Component, ComponentPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Page({
  ...props
}: ComponentPropsWithoutRef<typeof Component.div>) {
  const defaultClassName = "min-h-screen min-w-screen";
  return (
    <div {...props} className={clsx(defaultClassName, props.className)} />
  );
}

export { Page };
