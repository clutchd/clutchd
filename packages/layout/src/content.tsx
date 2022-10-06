import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

interface IContentProps
  extends ILayoutProps,
    ReactPropsWithoutRef<typeof Component.main> {}

function Content({
  col = true,
  padding = true,
  row = false,
  ...props
}: IContentProps) {
  const className = clsx(
    "flex flex-1",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <main {...props} className={className} />;
}

export { Content };
