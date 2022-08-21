import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Content({
  ...props
}: ReactPropsWithoutRef<typeof Component.main>) {
  const className = clsx(
    "flex flex-col flex-1 flex p-6 sm:p-8",
    props.className
  );
  return <main {...props} className={className} />;
}

export { Content };
