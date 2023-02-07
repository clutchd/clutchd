import { validators, getDefaultConfig, fromTheme } from "../src";

test("has correct export types", () => {
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
    isArbitraryNumber: expect.any(Function),
    isArbitraryShadow: expect.any(Function),
    isAny: expect.any(Function),
  });
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
