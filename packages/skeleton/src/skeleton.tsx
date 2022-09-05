import { Component, ReactPropsWithoutRef } from "@clutchd/component";
import clsx from "clsx";

interface ISkeleton extends ReactPropsWithoutRef<typeof Component.div> {
  dark?: boolean;
}

function Skeleton({ dark = false, ...props }: ISkeleton) {
  const internalClassNames = clsx(
    dark ? "bg-white" : "bg-black",
    "opacity-50 rounded w-full h-full m-auto inline-block"
  );

  return (
    <Component.div
      {...props}
      className={clsx("max-w-full max-h-full", props.className)}
    >
      <span className={internalClassNames}>{"\u200b"}</span>
    </Component.div>
  );
}

export { Skeleton };
