import clsx from "clsx";
import { Component, ComponentPropsWithoutRef } from "@clutchd/component";

function Footer({
  ...props
}: ComponentPropsWithoutRef<typeof Component.footer>) {
  const defaultClassName =
    "flex flex-col grow-1 shrink-0 p-8 bg-gray-100 text-gray-500 text-sm";
  return (
    <footer {...props} className={clsx(defaultClassName, props.className)} />
  );
}

export { Footer };
