import { Block } from "@clutchd/block";
import { H2 } from "@clutchd/text";
import React from "react";

function Showcase({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Block>
      <H2>{title}</H2>
      {description && <p className="text-gray-500">{description}</p>}
      <div className="relative my-6 border border-gray-200 rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="absolute h-full w-full bg-[url('/grid.svg')] opacity-10 [background-position:calc(100%+5px)_calc(100%+29px)]"></div>
        <div className="relative p-6 space-y-6">{children}</div>
      </div>
    </Block>
  );
}

export { Showcase };
