import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";
import { BuildStyle, ILayoutProps } from "./layout";

interface IContainerProps
  extends ILayoutProps,
    ReactPropsWithoutRef<typeof Component.div> {}

function Container({
  col = false,
  padding = false,
  row = false,
  ...props
}: IContainerProps) {
  const className = clsx(
    "flex flex-1",
    BuildStyle({ col, padding, row }),
    props.className
  );
  return <div {...props} className={className} />;
}

export { Container };
