import { composeClassNames as cn } from "@clutchd/compose-props";
import type React from "react";

export function DecorativeBlock({
  children,
  className,
  label,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-16 w-full min-w-16 items-center justify-center rounded-md border border-gray-400 bg-gray-300 bg-[url('/diagonal.svg')] bg-repeat",
        className,
      )}
      {...props}
    >
      {children}
      {label ? <DecorativeLabel>{label}</DecorativeLabel> : null}
    </div>
  );
}

export function DecorativeLabel({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-md border border-gray-400 mx-auto bg-gray-50 px-1 text-gray-500",
        className,
      )}
    >
      {children}
    </span>
  );
}
