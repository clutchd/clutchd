import { Block } from "@clutchd/block";
import React from "react";
import { Badge } from ".";

function Showcase({
  title,
  pkg,
  description,
  rsc = true,
  children,
}: {
  title: string;
  pkg: string;
  description?: string;
  rsc?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Block>
      <h2 className="mt-10 inline-flex items-center text-3xl font-bold text-gray-900">
        {title}{" "}
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
      <p className="mb-6 font-mono italic text-gray-700">{pkg}</p>
      {description && <p className="text-gray-500">{description}</p>}
      <div className="space-y-6 py-6">{children}</div>
    </Block>
  );
}

export { Showcase };
