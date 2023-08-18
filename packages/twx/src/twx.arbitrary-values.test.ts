// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/arbitrary-values.test.ts v1.14.0

import { twx } from ".";

test("handles simple conflicts with arbitrary values correctly", () => {
  expect(twx("m-[2px] m-[10px]")).toBe("m-[10px]");
  expect(
    twx(
      "m-[2px] m-[11svmin] m-[12in] m-[13lvi] m-[14vb] m-[15vmax] m-[16mm] m-[17%] m-[18em] m-[19px] m-[10dvh]"
    )
  ).toBe("m-[10dvh]");
  expect(
    twx(
      "h-[10px] h-[11cqw] h-[12cqh] h-[13cqi] h-[14cqb] h-[15cqmin] h-[16cqmax]"
    )
  ).toBe("h-[16cqmax]");
  expect(twx("z-20 z-[99]")).toBe("z-[99]");
  expect(twx("my-[2px] m-[10rem]")).toBe("m-[10rem]");
  expect(twx("cursor-pointer cursor-[grab]")).toBe("cursor-[grab]");
  expect(twx("m-[2px] m-[calc(100%-var(--arbitrary))]")).toBe(
    "m-[calc(100%-var(--arbitrary))]"
  );
  expect(twx("m-[2px] m-[length:var(--mystery-var)]")).toBe(
    "m-[length:var(--mystery-var)]"
  );
  expect(twx("opacity-10 opacity-[0.025]")).toBe("opacity-[0.025]");
  expect(twx("scale-75 scale-[1.7]")).toBe("scale-[1.7]");
  expect(twx("brightness-90 brightness-[1.75]")).toBe("brightness-[1.75]");

  // Handling of value `0`
  expect(twx("min-h-[0.5px] min-h-[0]")).toBe("min-h-[0]");
  expect(twx("text-[0.5px] text-[color:0]")).toBe(
    "text-[0.5px] text-[color:0]"
  );
  expect(twx("text-[0.5px] text-[--my-0]")).toBe("text-[0.5px] text-[--my-0]");
});

test("handles arbitrary length conflicts with labels and modifiers correctly", () => {
  expect(twx("hover:m-[2px] hover:m-[length:var(--c)]")).toBe(
    "hover:m-[length:var(--c)]"
  );
  expect(twx("hover:focus:m-[2px] focus:hover:m-[length:var(--c)]")).toBe(
    "focus:hover:m-[length:var(--c)]"
  );
  expect(
    twx("border-b border-[color:rgb(var(--color-gray-500-rgb)/50%))]")
  ).toBe("border-b border-[color:rgb(var(--color-gray-500-rgb)/50%))]");
  expect(
    twx("border-[color:rgb(var(--color-gray-500-rgb)/50%))] border-b")
  ).toBe("border-[color:rgb(var(--color-gray-500-rgb)/50%))] border-b");
  expect(
    twx(
      "border-b border-[color:rgb(var(--color-gray-500-rgb)/50%))] border-some-coloooor"
    )
  ).toBe("border-b border-some-coloooor");
});

test("handles complex arbitrary value conflicts correctly", () => {
  expect(twx("grid-rows-[1fr,auto] grid-rows-2")).toBe("grid-rows-2");
  expect(twx("grid-rows-[repeat(20,minmax(0,1fr))] grid-rows-3")).toBe(
    "grid-rows-3"
  );
});

test("handles ambiguous arbitrary values correctly", () => {
  expect(twx("mt-2 mt-[calc(theme(fontSize.4xl)/1.125)]")).toBe(
    "mt-[calc(theme(fontSize.4xl)/1.125)]"
  );
  expect(twx("p-2 p-[calc(theme(fontSize.4xl)/1.125)_10px]")).toBe(
    "p-[calc(theme(fontSize.4xl)/1.125)_10px]"
  );
  expect(twx("mt-2 mt-[length:theme(someScale.someValue)]")).toBe(
    "mt-[length:theme(someScale.someValue)]"
  );
  expect(twx("mt-2 mt-[theme(someScale.someValue)]")).toBe(
    "mt-[theme(someScale.someValue)]"
  );
  expect(twx("text-2xl text-[length:theme(someScale.someValue)]")).toBe(
    "text-[length:theme(someScale.someValue)]"
  );
  expect(twx("text-2xl text-[calc(theme(fontSize.4xl)/1.125)]")).toBe(
    "text-[calc(theme(fontSize.4xl)/1.125)]"
  );
});
