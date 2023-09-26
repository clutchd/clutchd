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
      <h2 className="inline-flex items-center mt-10 text-3xl font-bold text-gray-900">
        {title}{" "}
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
      <p className="mb-6 font-mono italic text-gray-700">{pkg}</p>
      {description && <p className="text-gray-500">{description}</p>}
      <div className="py-6 space-y-6">{children}</div>
    </Block>
  );
}

export { Showcase };
