import { Block } from "@clutchd/block";
import React from "react";
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
    <Block>
      <h2 className="mt-10 inline-flex items-center text-3xl font-bold text-gray-900">
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
      <div className="mb-2 mt-2 flex items-center font-mono italic">
        <p className="text-gray-500">{pkg}</p>
        {pkgType && (
          <>
            <p className="mx-3 text-gray-800">•</p>
            <p className="text-gray-500">{pkgType}</p>
          </>
        )}
      </div>
      {description && (
        <p className="border-b border-gray-950 pb-4 text-gray-800">
          {description}
        </p>
      )}
      <div className="space-y-6 py-6">{children}</div>
    </Block>
  );
}

export { Showcase };
