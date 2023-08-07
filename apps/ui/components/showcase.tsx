import { Block } from "@clutchd/block";
import { H2 } from "@clutchd/text";
import React from "react";

function Showcase({ title, children }) {
  return (
    <Block className="my-6">
      <H2>{title}</H2>
      <div className="relative my-6 border border-gray-200 rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="absolute h-full w-full bg-[url('/grid.svg')] opacity-10 [background-position:calc(100%+5px)_calc(100%+29px)]"></div>
        <div className="relative p-6 space-y-6">{children}</div>
      </div>
    </Block>
  );
}

export { Showcase };
