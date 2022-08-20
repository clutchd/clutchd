import { Component, ComponentPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

function Section({
  ...props
}: ComponentPropsWithoutRef<typeof Component.section>) {
  const className = clsx("flex flex-col flex-1", props.className);
  return <section {...props} className={className} />;
}

export { Section };
