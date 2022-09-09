import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

interface IHeaderProps
  extends ILayoutProps,
    ReactPropsWithoutRef<typeof Component.header> {}

function Header({
  col = false,
  padding = true,
  row = false,
  ...props
}: IHeaderProps) {
  const className = clsx(
    "flex grow-1 shrink-0",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <header {...props} className={className} />;
}

export { Header };
