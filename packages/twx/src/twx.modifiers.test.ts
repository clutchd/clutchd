// https://github.com/dcastil/tailwind-merge/blob/main/tests/modifiers.test.ts

import { twx } from ".";

test("conflicts across prefix modifiers", () => {
  expect(twx("hover:block hover:inline")).toBe("hover:inline");
  expect(twx("hover:block hover:focus:inline")).toBe(
    "hover:block hover:focus:inline"
  );
  expect(twx("hover:block hover:focus:inline focus:hover:inline")).toBe(
    "hover:block focus:hover:inline"
  );
  expect(twx("focus-within:inline focus-within:block")).toBe(
    "focus-within:block"
  );
});

test("conflicts across postfix modifiers", () => {
  expect(twx("text-lg/7 text-lg/8")).toBe("text-lg/8");
  expect(twx("text-lg/none leading-9")).toBe("text-lg/none leading-9");
  expect(twx("leading-9 text-lg/none")).toBe("text-lg/none");
  expect(twx("w-full w-1/2")).toBe("w-1/2");
});
