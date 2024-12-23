import { Separator } from "@radix-ui/react-separator";
import type * as React from "react";

function Section({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <h1 className="pb-4 text-4xl font-extrabold">{title}</h1>
      <Separator className="bg-gray-950 data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px" />
      {children}
    </div>
  );
}

export { Section };
