import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

interface IPageProps
  extends ILayoutProps,
    ReactPropsWithoutRef<typeof Component.header> {}

function Page({
  col = false,
  padding = false,
  row = false,
  ...props
}: IPageProps) {
  const className = clsx(
    "flex flex-1 min-h-screen min-w-screen",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <div {...props} className={className} />;
}

export { Page };
