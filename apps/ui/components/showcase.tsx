import { Block } from "@clutchd/block";
import { H2 } from "@clutchd/text";
import { Divider } from "@clutchd/divider";
import { FlexCol } from "@clutchd/flex";
// import { Lead } from "@clutchd/text";

function Showcase({ title, children }) {
  return (
    <Block className="my-10">
      <H2>{title}</H2>
      <div className="relative mt-6 mb-6 border border-gray-200 rounded-lg dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <div className="absolute h-full w-full bg-[url('/grid.svg')] opacity-10 [background-position:calc(100%+5px)_calc(100%+29px)]"></div>
        <div className="relative p-10 space-y-3">{children}</div>
      </div>
    </Block>
  );
}

export { Showcase };
