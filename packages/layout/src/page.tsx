import { Component, ComponentPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Page({ ...props }: ComponentPropsWithoutRef<typeof Component.div>) {
  const className = clsx(
    "flex flex-col flex-1 min-h-screen min-w-screen",
    props.className
  );
  return <div {...props} className={className} />;
}

export { Page };
