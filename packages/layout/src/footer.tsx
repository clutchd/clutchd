import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Footer({
  ...props
}: ReactPropsWithoutRef<typeof Component.footer>) {
  const className = clsx(
    "flex flex-col grow-1 shrink-0 p-6 sm:p-8",
    props.className
  );
  return <footer {...props} className={className} />;
}

export { Footer };
