import { clsx } from ".";

test("arrays", () => {
  expect(clsx([])).toEqual("");
  expect(clsx(["foo"])).toEqual("foo");
  expect(clsx(["foo", "bar"])).toEqual("foo bar");
  expect(clsx(["foo", 0 && "bar", 1 && "baz"])).toEqual("foo baz");
});

test("arrays (nested)", () => {
  expect(clsx([[[]]])).toEqual("");
  expect(clsx([[["foo"]]])).toEqual("foo");
  expect(clsx([true, [["foo"]]])).toEqual("foo");
  expect(clsx(["foo", ["bar", ["", [["baz"]]]]])).toEqual("foo bar baz");
});

test("arrays (variadic)", () => {
  expect(clsx([], [])).toEqual("");
  expect(clsx(["foo"], ["bar"])).toEqual("foo bar");
  expect(clsx(["foo"], null, ["baz", ""], true, "", [])).toEqual("foo baz");
});

test("arrays (no `push` escape)", () => {
  expect(clsx({ push: 1 })).toEqual("push");
  expect(clsx({ pop: true })).toEqual("pop");
  expect(clsx({ push: true })).toEqual("push");
  expect(clsx("hello", { world: 1, push: true })).toEqual("hello world push");
});
