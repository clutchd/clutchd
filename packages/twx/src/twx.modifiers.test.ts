// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/modifiers.test.ts v1.14.0

import { createTwx, twx } from ".";

test("conflicts across prefix modifiers", () => {
  expect(twx("hover:block hover:inline")).toBe("hover:inline");
  expect(twx("hover:block hover:focus:inline")).toBe(
    "hover:block hover:focus:inline",
  );
  expect(twx("hover:block hover:focus:inline focus:hover:inline")).toBe(
    "hover:block focus:hover:inline",
  );
  expect(twx("focus-within:inline focus-within:block")).toBe(
    "focus-within:block",
  );
});

test("conflicts across postfix modifiers", () => {
  expect(twx("text-lg/7 text-lg/8")).toBe("text-lg/8");
  expect(twx("text-lg/none leading-9")).toBe("text-lg/none leading-9");
  expect(twx("leading-9 text-lg/none")).toBe("text-lg/none");
  expect(twx("w-full w-1/2")).toBe("w-1/2");

  const customtwx = createTwx(() => ({
    cacheSize: 10,
    theme: {},
    classGroups: {
      foo: ["foo-1/2", "foo-2/3"],
      bar: ["bar-1", "bar-2"],
      baz: ["baz-1", "baz-2"],
    },
    conflictingClassGroups: {},
    conflictingClassGroupModifiers: {
      baz: ["bar"],
    },
  }));

  expect(customtwx("foo-1/2 foo-2/3")).toBe("foo-2/3");
  expect(customtwx("bar-1 bar-2")).toBe("bar-2");
  expect(customtwx("bar-1 baz-1")).toBe("bar-1 baz-1");
  expect(customtwx("bar-1/2 bar-2")).toBe("bar-2");
  expect(customtwx("bar-2 bar-1/2")).toBe("bar-1/2");
  expect(customtwx("bar-1 baz-1/2")).toBe("baz-1/2");
});
