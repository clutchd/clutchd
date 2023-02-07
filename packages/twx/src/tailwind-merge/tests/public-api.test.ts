import {
  twMerge,
  createTailwindMerge,
  validators,
  getDefaultConfig,
  Config,
  fromTheme,
} from "../src";

test("has correct export types", () => {
  expect(twMerge).toStrictEqual(expect.any(Function));
  expect(createTailwindMerge).toStrictEqual(expect.any(Function));
  expect(getDefaultConfig).toStrictEqual(expect.any(Function));
  expect(validators).toEqual({
    isLength: expect.any(Function),
    isArbitraryLength: expect.any(Function),
    isInteger: expect.any(Function),
    isArbitraryValue: expect.any(Function),
    isTshirtSize: expect.any(Function),
    isArbitrarySize: expect.any(Function),
    isArbitraryPosition: expect.any(Function),
    isArbitraryUrl: expect.any(Function),
    isArbitraryWeight: expect.any(Function),
    isArbitraryNumber: expect.any(Function),
    isArbitraryShadow: expect.any(Function),
    isAny: expect.any(Function),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noRun = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const config: Config = getDefaultConfig();
  };
});

test("twMerge() has correct inputs and outputs", () => {
  expect(twMerge("")).toStrictEqual(expect.any(String));
  expect(twMerge("hello world")).toStrictEqual(expect.any(String));
  expect(twMerge("-:-:-:::---h-")).toStrictEqual(expect.any(String));
  expect(twMerge("hello world", "-:-:-:::---h-")).toStrictEqual(
    expect.any(String)
  );
  expect(
    twMerge("hello world", "-:-:-:::---h-", "", "something")
  ).toStrictEqual(expect.any(String));
  expect(twMerge("hello world", undefined)).toStrictEqual(expect.any(String));
  expect(twMerge("hello world", undefined, null)).toStrictEqual(
    expect.any(String)
  );
  expect(twMerge("hello world", undefined, null, false)).toStrictEqual(
    expect.any(String)
  );
  expect(twMerge("hello world", [undefined], [null, false])).toStrictEqual(
    expect.any(String)
  );
  expect(
    twMerge("hello world", [undefined], [null, [false, "some-class"], []])
  ).toStrictEqual(expect.any(String));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noRun = () => {
    twMerge(123);
    twMerge(true);
    twMerge({});
    twMerge(new Date());
    twMerge(() => {});
  };
});

test("createTailwindMerge() has correct inputs and outputs", () => {
  expect(createTailwindMerge()).toStrictEqual(expect.any(Function));
  expect(
    createTailwindMerge(() => ({
      cacheSize: 0,
      theme: {},
      classGroups: {},
      conflictingClassGroups: {},
    }))
  ).toStrictEqual(expect.any(Function));

  const tailwindMerge = createTailwindMerge(() => ({
    cacheSize: 20,
    theme: {},
    classGroups: {
      fooKey: [{ fooKey: ["bar", "baz"] }],
      fooKey2: [{ fooKey: ["qux", "quux"] }],
      otherKey: ["nother", "group"],
    },
    conflictingClassGroups: {
      fooKey: ["otherKey"],
      otherKey: ["fooKey", "fooKey2"],
    },
  }));

  expect(tailwindMerge).toStrictEqual(expect.any(Function));
  expect(tailwindMerge("")).toStrictEqual(expect.any(String));
  expect(tailwindMerge("hello world")).toStrictEqual(expect.any(String));
  expect(tailwindMerge("-:-:-:::---h-")).toStrictEqual(expect.any(String));
  expect(tailwindMerge("hello world", "-:-:-:::---h-")).toStrictEqual(
    expect.any(String)
  );
  expect(
    tailwindMerge("hello world", "-:-:-:::---h-", "", "something")
  ).toStrictEqual(expect.any(String));
  expect(tailwindMerge("hello world", undefined)).toStrictEqual(
    expect.any(String)
  );
  expect(tailwindMerge("hello world", undefined, null)).toStrictEqual(
    expect.any(String)
  );
  expect(tailwindMerge("hello world", undefined, null, false)).toStrictEqual(
    expect.any(String)
  );
  expect(
    tailwindMerge("hello world", [undefined], [null, false])
  ).toStrictEqual(expect.any(String));
  expect(
    tailwindMerge("hello world", [undefined], [null, [false, "some-class"], []])
  ).toStrictEqual(expect.any(String));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noRun = () => {
    tailwindMerge(123);
    tailwindMerge(true);
    tailwindMerge({});
    tailwindMerge(new Date());
    tailwindMerge(() => {});
  };
});

test("validators have correct inputs and outputs", () => {
  expect(validators.isLength("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryLength("")).toEqual(expect.any(Boolean));
  expect(validators.isInteger("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryValue("")).toEqual(expect.any(Boolean));
  expect(validators.isAny()).toEqual(expect.any(Boolean));
  expect(validators.isTshirtSize("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitrarySize("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryPosition("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryUrl("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryWeight("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryNumber("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryShadow("")).toEqual(expect.any(Boolean));
});

test("fromTheme has correct inputs and outputs", () => {
  expect(fromTheme("foo")).toStrictEqual(expect.any(Function));
  expect(fromTheme("foo").isThemeGetter).toBe(true);
  expect(fromTheme("foo")({ foo: ["hello"] })).toStrictEqual(["hello"]);
});
