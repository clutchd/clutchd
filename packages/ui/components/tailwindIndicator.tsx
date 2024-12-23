import * as React from "react";

function TailwindIndicator() {
  return (
    <div className="fixed bottom-12 left-4 z-50 flex items-center justify-center rounded-full bg-gray-950 py-1 px-2 font-mono text-xs text-white">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">xx</div>
    </div>
  );
}

export { TailwindIndicator };
