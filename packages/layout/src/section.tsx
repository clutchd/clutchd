import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Section({
  ...props
}: ReactPropsWithoutRef<typeof Component.section>) {
  const className = clsx("flex flex-col flex-1", props.className);
  return <section {...props} className={className} />;
}

export { Section };
