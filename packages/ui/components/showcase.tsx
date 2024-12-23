import { Separator } from "@radix-ui/react-separator";
import type * as React from "react";
import { Badge } from "./badge";

function Showcase({
  title,
  pkg,
  pkgType,
  description,
  rsc = true,
  stable = false,
  children,
}: {
  title: string;
  pkg: string;
  description?: string;
  pkgType?: "primitive" | "utility" | "ui" | "core" | "layout";
  rsc?: boolean;
  stable?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="block my-6">
      <h2 className="inline-flex items-center text-3xl font-bold text-gray-900">
        {title}{" "}
        {stable ? (
          <Badge className="ml-3 mr-0 bg-green-50 text-green-600 ring-green-100">
            Stable
          </Badge>
        ) : (
          <Badge className="ml-3 mr-0 bg-red-50 text-red-600 ring-red-100">
            Unstable
          </Badge>
        )}
        {rsc ? (
          <Badge className="bg-blue-50 text-blue-600 ring-blue-100">
            Server
          </Badge>
        ) : (
          <Badge className="bg-purple-50 text-purple-600 ring-purple-100">
            Client
          </Badge>
        )}
      </h2>
      <div className="my-2 flex items-center font-mono italic text-gray-500">
        <p>{pkg}</p>
        {pkgType && (
          <>
            <p className="mx-3">•</p>
            <p>{pkgType}</p>
          </>
        )}
      </div>
      {description && <p className="pb-4 text-gray-700 ">{description}</p>}
      <Separator className="bg-gray-950 data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px" />
      {children ? (
        <div className="py-6">{children}</div>
      ) : (
        <div className="py-2" />
      )}
    </div>
  );
}

export { Showcase };
