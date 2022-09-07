import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Layout({ ...props }: ReactPropsWithoutRef<typeof Component.section>) {
  const className = clsx("flex flex-col flex-1", props.className);
  return <div {...props} className={className} />;
}

export { Layout };
