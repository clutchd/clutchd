// https://github.com/dcastil/tailwind-merge/blob/main/tests/public-api.test.ts

import { fromTheme, getDefaultConfig, twx, validators } from ".";

test("has correct export types", () => {
  expect(twx).toStrictEqual(expect.any(Function));
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
    isInteger: expect.any(Function),
    isLength: expect.any(Function),
    isPercent: expect.any(Function),
    isNumber: expect.any(Function),
    isTshirtSize: expect.any(Function),
  });
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
  expect(validators.isArbitraryNumber("")).toEqual(expect.any(Boolean));
  expect(validators.isArbitraryShadow("")).toEqual(expect.any(Boolean));
});

test("fromTheme has correct inputs and outputs", () => {
  expect(fromTheme("foo")).toStrictEqual(expect.any(Function));
  expect(fromTheme("foo").isThemeGetter).toBe(true);
  expect(fromTheme("foo")({ foo: ["hello"] })).toStrictEqual(["hello"]);
});
