import { expect, test } from "bun:test";
import * as mod from "./lite";

const clsx = mod.default;

test("exports", () => {
  expect(typeof mod.default).toEqual("function");
  expect(typeof mod.clsx).toEqual("function");
  expect(mod.default).toEqual(mod.clsx);

  expect(typeof mod.default()).toEqual("string");
  expect(typeof mod.clsx()).toEqual("string");
});

test("strings", () => {
  expect(clsx("")).toEqual("");
  expect(clsx("foo")).toEqual("foo");
  expect(clsx(true && "foo")).toEqual("foo");
  expect(clsx(false && "foo")).toEqual("");
});

test("strings (variadic)", () => {
  expect(clsx("")).toEqual("");
  expect(clsx("foo", "bar")).toEqual("foo bar");
  expect(clsx(true && "foo", false && "bar", "baz")).toEqual("foo baz");
  expect(clsx(false && "foo", "bar", "baz", "")).toEqual("bar baz");
});

test("emptys", () => {
  expect(clsx("")).toEqual("");
  expect(clsx(undefined)).toEqual("");
  expect(clsx(null)).toEqual("");
  expect(clsx(0)).toEqual("");
});

// lite ignores all non-strings
test("non-strings", () => {
  // number
  expect(clsx(1)).toEqual("");
  expect(clsx(1, 2)).toEqual("");
  expect(clsx(Number.POSITIVE_INFINITY)).toEqual("");
  expect(clsx(Number.NaN)).toEqual("");
  expect(clsx(0)).toEqual("");

  // objects
  expect(clsx({})).toEqual("");
  expect(clsx(null)).toEqual("");
  expect(clsx({ a: 1 })).toEqual("");
  expect(clsx({ a: 1 }, { b: 2 })).toEqual("");

  // arrays
  expect(clsx([])).toEqual("");
  expect(clsx(["foo"])).toEqual("");
  expect(clsx(["foo", "bar"])).toEqual("");

  // functions
  expect(clsx(clsx)).toEqual("");
  expect(clsx(clsx, clsx)).toEqual("");
});
