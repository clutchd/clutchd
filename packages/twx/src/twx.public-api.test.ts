// modified from https://github.com/dcastil/tailwind-merge/blob/main/tests/public-api.test.ts v1.14.0
// replaces twJoin with clsx

import {
  Config,
  createTwx,
  extendTwx,
  fromTheme,
  getDefaultConfig,
  mergeConfigs,
  clsx,
  twx,
  validators,
} from ".";

test("has correct export types", () => {
  expect(twx).toStrictEqual(expect.any(Function));
  expect(createTwx).toStrictEqual(expect.any(Function));
  expect(getDefaultConfig).toStrictEqual(expect.any(Function));
  expect(validators).toEqual({
    isAny: expect.any(Function),
    isArbitraryLength: expect.any(Function),
    isArbitraryNumber: expect.any(Function),
    isArbitraryPosition: expect.any(Function),
    isArbitraryShadow: expect.any(Function),
    isArbitrarySize: expect.any(Function),
    isArbitraryUrl: expect.any(Function),
    isArbitraryValue: expect.any(Function),
    isArbitraryWeight: expect.any(Function),
    isInteger: expect.any(Function),
    isLength: expect.any(Function),
    isPercent: expect.any(Function),
    isNumber: expect.any(Function),
    isTshirtSize: expect.any(Function),
  });
  expect(mergeConfigs).toStrictEqual(expect.any(Function));
  expect(extendTwx).toStrictEqual(expect.any(Function));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noRun = () => {
    const config: Config = getDefaultConfig();
    const classNameValue: any = "some-class";

    twx(classNameValue, classNameValue, classNameValue);
    clsx(classNameValue, classNameValue, classNameValue);

    return {
      config,
    };
  };
});

test("twx() has correct inputs and outputs", () => {
  expect(twx("")).toStrictEqual(expect.any(String));
  expect(twx("hello world")).toStrictEqual(expect.any(String));
  expect(twx("-:-:-:::---h-")).toStrictEqual(expect.any(String));
  expect(twx("hello world", "-:-:-:::---h-")).toStrictEqual(expect.any(String));
  expect(twx("hello world", "-:-:-:::---h-", "", "something")).toStrictEqual(
    expect.any(String)
  );
  expect(twx("hello world", undefined)).toStrictEqual(expect.any(String));
  expect(twx("hello world", undefined, null)).toStrictEqual(expect.any(String));
  expect(twx("hello world", undefined, null, false)).toStrictEqual(
    expect.any(String)
  );
  expect(twx("hello world", [undefined], [null, false])).toStrictEqual(
    expect.any(String)
  );
  expect(
    twx("hello world", [undefined], [null, [false, "some-class"], []])
  ).toStrictEqual(expect.any(String));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const noRun = () => {
    // @ts-expect-error
    twx(123);
    // @ts-expect-error
    twx(true);
    // @ts-expect-error
    twx({});
    // @ts-expect-error
    twx(new Date());
    // @ts-expect-error
    twx(() => {});
  };
});

test("createTwx() has correct inputs and outputs", () => {
  expect(createTwx(getDefaultConfig)).toStrictEqual(expect.any(Function));
  expect(
    createTwx(() => ({
      cacheSize: 0,
      theme: {},
      classGroups: {},
      conflictingClassGroups: {},
    }))
  ).toStrictEqual(expect.any(Function));

  const tailwindMerge = createTwx(() => ({
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
    // @ts-expect-error
    tailwindMerge(123);
    // @ts-expect-error
    tailwindMerge(true);
    // @ts-expect-error
    tailwindMerge({});
    // @ts-expect-error
    tailwindMerge(new Date());
    // @ts-expect-error
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

test("mergeConfigs has correct inputs and outputs", () => {
  expect(
    mergeConfigs(
      {
        cacheSize: 50,
        theme: {},
        classGroups: {
          fooKey: [{ fooKey: ["one", "two"] }],
          bla: [{ bli: ["blub", "blublub"] }],
        },
        conflictingClassGroups: {},
      },
      {}
    )
  ).toStrictEqual(expect.any(Object));
});

test("extendTwx has correct inputs and outputs", () => {
  expect(extendTwx({})).toStrictEqual(expect.any(Function));
});

test("fromTheme has correct inputs and outputs", () => {
  expect(fromTheme("foo")).toStrictEqual(expect.any(Function));
  expect(fromTheme("foo").isThemeGetter).toBe(true);
  expect(fromTheme("foo")({ foo: ["hello"] })).toStrictEqual(["hello"]);
});

test("clsx has correct inputs and outputs", () => {
  expect(clsx()).toStrictEqual(expect.any(String));
  expect(clsx("")).toStrictEqual(expect.any(String));
  expect(
    clsx("", [false, null, undefined, 0, [], [false, [""], ""]])
  ).toStrictEqual(expect.any(String));
});
