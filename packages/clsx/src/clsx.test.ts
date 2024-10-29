import { expect, test } from "bun:test";
import { clsx } from ".";

test("keeps object keys with truthy values", () => {
  expect(
    clsx({
      a: true,
      b: false,
      c: 0,
      d: null,
      e: undefined,
      f: 1,
    }),
  ).toEqual("a f");
});

test("joins arrays of class names and ignore falsy values", () => {
  expect(clsx("a", 0, null, undefined, true, 1, "b")).toEqual("a 1 b");
});

test("supports heterogenous arguments", () => {
  expect(clsx({ a: true }, "b", 0)).toEqual("a b");
});

test("should be trimmed", () => {
  // TODO: possible to do this without killing perf? => expect(clsx(" ", "a ", {}, "b", "c\td")).toEqual("a b c d");
  expect(clsx("", "b", {}, "")).toEqual("b");
});

test("returns an empty string for an empty configuration", () => {
  expect(clsx({})).toEqual("");
});

test("supports an array of class names", () => {
  expect(clsx(["a", "b"])).toEqual("a b");
});

test("joins array arguments with string arguments", () => {
  expect(clsx(["a", "b"], "c")).toEqual("a b c");
  expect(clsx("c", ["a", "b"])).toEqual("c a b");
});

test("handles multiple array arguments", () => {
  expect(clsx(["a", "b"], ["c", "d"])).toEqual("a b c d");
});

test("handles arrays that include falsy and true values", () => {
  expect(clsx(["a", 0, null, undefined, false, true, "b"])).toEqual("a b");
});

test("handles arrays that include arrays", () => {
  expect(clsx(["a", ["b", "c"]])).toEqual("a b c");
});

test("handles arrays that include objects", () => {
  expect(clsx(["a", { b: true, c: false }])).toEqual("a b");
});

test("handles deep array recursion", () => {
  expect(clsx(["a", ["b", ["c", { d: true }]]])).toEqual("a b c d");
});

test("handles arrays that are empty", () => {
  expect(clsx("a", [])).toEqual("a");
});

test("handles nested arrays that have empty nested arrays", () => {
  expect(clsx("a", [[]])).toEqual("a");
});

test("handles all types of truthy and falsy property values as expected", () => {
  expect(
    clsx({
      // falsy:
      null: null,
      emptyString: "",
      noNumber: Number.NaN,
      zero: 0,
      negativeZero: -0,
      false: false,
      undefined: undefined,

      // truthy (literally anything else):
      nonEmptyString: "foobar",
      whitespace: " ",
      function: Object.prototype.toString,
      emptyObject: {},
      nonEmptyObject: { a: 1, b: 2 },
      emptyList: [],
      nonEmptyList: [1, 2, 3],
      greaterZero: 1,
    }),
  ).toEqual(
    "nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero",
  );
});
