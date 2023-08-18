// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/extend-tailwind-merge.test.ts v1.14.0

import { extendTwx } from ".";

test("extendTwx works correctly with single config", () => {
  const tailwindMerge = extendTwx({
    cacheSize: 20,
    classGroups: {
      fooKey: [{ fooKey: ["bar", "baz"] }],
      fooKey2: [{ fooKey: ["qux", "quux"] }, "other-2"],
      otherKey: ["nother", "group"],
    },
    conflictingClassGroups: {
      fooKey: ["otherKey"],
      otherKey: ["fooKey", "fooKey2"],
    },
  });

  expect(tailwindMerge("")).toBe("");
  expect(tailwindMerge("my-modifier:fooKey-bar my-modifier:fooKey-baz")).toBe(
    "my-modifier:fooKey-baz"
  );
  expect(
    tailwindMerge("other-modifier:fooKey-bar other-modifier:fooKey-baz")
  ).toBe("other-modifier:fooKey-baz");
  expect(tailwindMerge("group fooKey-bar")).toBe("fooKey-bar");
  expect(tailwindMerge("fooKey-bar group")).toBe("group");
  expect(tailwindMerge("group other-2")).toBe("group other-2");
  expect(tailwindMerge("other-2 group")).toBe("group");

  expect(tailwindMerge("p-10 p-20")).toBe("p-20");
  expect(tailwindMerge("hover:focus:p-10 focus:hover:p-20")).toBe(
    "focus:hover:p-20"
  );
});

test("extendTwx works corectly with multiple configs", () => {
  const tailwindMerge = extendTwx(
    {
      cacheSize: 20,
      classGroups: {
        fooKey: [{ fooKey: ["bar", "baz"] }],
        fooKey2: [{ fooKey: ["qux", "quux"] }, "other-2"],
        otherKey: ["nother", "group"],
      },
      conflictingClassGroups: {
        fooKey: ["otherKey"],
        otherKey: ["fooKey", "fooKey2"],
      },
    },
    (config) => ({
      ...config,
      classGroups: {
        ...config.classGroups,
        secondConfigKey: ["hi-there", "hello"],
      },
    })
  );

  expect(tailwindMerge("")).toBe("");
  expect(tailwindMerge("my-modifier:fooKey-bar my-modifier:fooKey-baz")).toBe(
    "my-modifier:fooKey-baz"
  );
  expect(tailwindMerge("other-modifier:hi-there other-modifier:hello")).toBe(
    "other-modifier:hello"
  );
  expect(tailwindMerge("group fooKey-bar")).toBe("fooKey-bar");
  expect(tailwindMerge("fooKey-bar group")).toBe("group");
  expect(tailwindMerge("group other-2")).toBe("group other-2");
  expect(tailwindMerge("other-2 group")).toBe("group");

  expect(tailwindMerge("p-10 p-20")).toBe("p-20");
  expect(tailwindMerge("hover:focus:p-10 focus:hover:p-20")).toBe(
    "focus:hover:p-20"
  );
});

test("extendTwx works correctly with function config", () => {
  const tailwindMerge = extendTwx((config) => ({
    ...config,
    cacheSize: 20,
    classGroups: {
      ...config.classGroups,
      fooKey: [{ fooKey: ["bar", "baz"] }],
      fooKey2: [{ fooKey: ["qux", "quux"] }, "other-2"],
      otherKey: ["nother", "group"],
    },
    conflictingClassGroups: {
      ...config.conflictingClassGroups,
      fooKey: ["otherKey"],
      otherKey: ["fooKey", "fooKey2"],
    },
  }));

  expect(tailwindMerge("")).toBe("");
  expect(tailwindMerge("my-modifier:fooKey-bar my-modifier:fooKey-baz")).toBe(
    "my-modifier:fooKey-baz"
  );
  expect(
    tailwindMerge("other-modifier:fooKey-bar other-modifier:fooKey-baz")
  ).toBe("other-modifier:fooKey-baz");
  expect(tailwindMerge("group fooKey-bar")).toBe("fooKey-bar");
  expect(tailwindMerge("fooKey-bar group")).toBe("group");
  expect(tailwindMerge("group other-2")).toBe("group other-2");
  expect(tailwindMerge("other-2 group")).toBe("group");

  expect(tailwindMerge("p-10 p-20")).toBe("p-20");
  expect(tailwindMerge("hover:focus:p-10 focus:hover:p-20")).toBe(
    "focus:hover:p-20"
  );
});
