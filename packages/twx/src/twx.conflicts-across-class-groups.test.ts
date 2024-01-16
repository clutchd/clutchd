// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/conflicts-across-class-groups.test.ts v1.14.0

import { twx } from ".";

test("handles conflicts across class groups correctly", () => {
  expect(twx("inset-1 inset-x-1")).toBe("inset-1 inset-x-1");
  expect(twx("inset-x-1 inset-1")).toBe("inset-1");
  expect(twx("inset-x-1 left-1 inset-1")).toBe("inset-1");
  expect(twx("inset-x-1 inset-1 left-1")).toBe("inset-1 left-1");
  expect(twx("inset-x-1 right-1 inset-1")).toBe("inset-1");
  expect(twx("inset-x-1 right-1 inset-x-1")).toBe("inset-x-1");
  expect(twx("inset-x-1 right-1 inset-y-1")).toBe(
    "inset-x-1 right-1 inset-y-1",
  );
  expect(twx("right-1 inset-x-1 inset-y-1")).toBe("inset-x-1 inset-y-1");
  expect(twx("inset-x-1 hover:left-1 inset-1")).toBe("hover:left-1 inset-1");
});

test("ring and shadow classes do not create conflict", () => {
  expect(twx("ring shadow")).toBe("ring shadow");
  expect(twx("ring-2 shadow-md")).toBe("ring-2 shadow-md");
  expect(twx("shadow ring")).toBe("shadow ring");
  expect(twx("shadow-md ring-2")).toBe("shadow-md ring-2");
});
