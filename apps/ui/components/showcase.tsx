import { Block } from "@clutchd/block";
import { Divider } from "@clutchd/divider";
import * as React from "react";
import { Badge } from ".";

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
  pkgType?: "primitive" | "utility" | "ui";
  rsc?: boolean;
  stable?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Block className="my-6">
      <h2 className="inline-flex items-center text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}{" "}
        {stable ? (
          <Badge className="ml-3 mr-0 text-green-600 bg-green-50 ring-green-100">
            Stable
          </Badge>
        ) : (
          <Badge className="ml-3 mr-0 text-red-600 bg-red-50 ring-red-100">
            Unstable
          </Badge>
        )}
        {rsc ? (
          <Badge className="text-blue-600 bg-blue-50 ring-blue-100">
            Server
          </Badge>
        ) : (
          <Badge className="text-purple-600 bg-purple-50 ring-purple-100">
            Client
          </Badge>
        )}
      </h2>
      <div className="flex items-center my-2 font-mono italic text-gray-500">
        <p>{pkg}</p>
        {pkgType && (
          <>
            <p className="mx-3">•</p>
            <p>{pkgType}</p>
          </>
        )}
      </div>
      {description && (
        <p className="pb-4 text-gray-700 border-b border-gray-950">
          {description}
        </p>
      )}
      <Divider className="bg-gray-950" />
      <div className="py-6 space-y-4">{children}</div>
    </Block>
  );
}

export { Showcase };
