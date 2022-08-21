import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Page({ ...props }: ReactPropsWithoutRef<typeof Component.div>) {
  const className = clsx(
    "flex flex-col flex-1 min-h-screen min-w-screen",
    props.className
  );
  return <div {...props} className={className} />;
}

export { Page };
