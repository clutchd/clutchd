import { expect, test } from "bun:test";
import { clsx } from ".";

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
