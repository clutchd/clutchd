import { Component, ComponentPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Content({
  ...props
}: ComponentPropsWithoutRef<typeof Component.main>) {
  const className = clsx("flex flex-col flex-1 flex p-6 sm:p-8", props.className);
  return <main {...props} className={className} />;
}

export { Content };
