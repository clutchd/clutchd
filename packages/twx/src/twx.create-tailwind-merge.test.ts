// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/create-tailwind-merge.test.ts v1.14.0

import { createTwx } from ".";

test("createTwx works with single config function", () => {
  const tailwindMerge = createTwx(() => ({
    cacheSize: 20,
    theme: {},
    classGroups: {
      fooKey: [{ fooKey: ["bar", "baz"] }],
      fooKey2: [{ fooKey: ["qux", "quux"] }, "other-2"],
      otherKey: ["nother", "group"],
    },
    conflictingClassGroups: {
      fooKey: ["otherKey"],
      otherKey: ["fooKey", "fooKey2"],
    },
  }));

  expect(tailwindMerge("")).toBe("");
  expect(tailwindMerge("my-modifier:fooKey-bar my-modifier:fooKey-baz")).toBe(
    "my-modifier:fooKey-baz",
  );
  expect(
    tailwindMerge("other-modifier:fooKey-bar other-modifier:fooKey-baz"),
  ).toBe("other-modifier:fooKey-baz");
  expect(tailwindMerge("group fooKey-bar")).toBe("fooKey-bar");
  expect(tailwindMerge("fooKey-bar group")).toBe("group");
  expect(tailwindMerge("group other-2")).toBe("group other-2");
  expect(tailwindMerge("other-2 group")).toBe("group");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noRun = () => {
    createTwx(
      // @ts-expect-error
      (config: any) => {
        return config;
      },
    );
  };
});

test("createTwx works with multiple config functions", () => {
  const tailwindMerge = createTwx(
    () => ({
      cacheSize: 20,
      theme: {},
      classGroups: {
        fooKey: [{ fooKey: ["bar", "baz"] }],
        fooKey2: [{ fooKey: ["qux", "quux"] }, "other-2"],
        otherKey: ["nother", "group"],
      },
      conflictingClassGroups: {
        fooKey: ["otherKey"],
        otherKey: ["fooKey", "fooKey2"],
      },
    }),
    (config) => ({
      ...config,
      classGroups: {
        ...config.classGroups,
        helloFromSecondConfig: ["hello-there"],
      },
      conflictingClassGroups: {
        ...config.conflictingClassGroups,
        fooKey: [
          ...(config.conflictingClassGroups.fooKey ?? []),
          "helloFromSecondConfig",
        ],
      },
    }),
  );

  expect(tailwindMerge("")).toBe("");
  expect(tailwindMerge("my-modifier:fooKey-bar my-modifier:fooKey-baz")).toBe(
    "my-modifier:fooKey-baz",
  );
  expect(
    tailwindMerge("other-modifier:fooKey-bar other-modifier:fooKey-baz"),
  ).toBe("other-modifier:fooKey-baz");
  expect(tailwindMerge("group fooKey-bar")).toBe("fooKey-bar");
  expect(tailwindMerge("fooKey-bar group")).toBe("group");
  expect(tailwindMerge("group other-2")).toBe("group other-2");
  expect(tailwindMerge("other-2 group")).toBe("group");

  expect(tailwindMerge("second:group second:nother")).toBe("second:nother");
  expect(tailwindMerge("fooKey-bar hello-there")).toBe(
    "fooKey-bar hello-there",
  );
  expect(tailwindMerge("hello-there fooKey-bar")).toBe("fooKey-bar");
});
