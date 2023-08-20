import { Block } from "@clutchd/block";
import { H2 } from "@clutchd/text";
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
      <div className="relative my-6 border border-gray-200 rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="absolute h-full w-full bg-[url('/grid.svg')] opacity-10 [background-position:calc(100%+5px)_calc(100%+29px)]"></div>
        <div className="relative p-6 space-y-6">{children}</div>
      </div>
    </Block>
  );
}

export { Showcase };
