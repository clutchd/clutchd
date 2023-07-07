// https://github.com/dcastil/tailwind-merge/blob/main/tests/tw-join.test.ts

import { join } from "./join";

test("arrays", () => {
  expect(join([])).toEqual("");
  expect(join(["foo"])).toEqual("");
  expect(join(["foo", "bar"])).toEqual("");
  expect(join(["foo", 0 && "bar", 1 && "baz"])).toEqual("");
});

test("arrays (nested)", () => {
  expect(join([[[]]])).toEqual("");
  expect(join([[["foo"]]])).toEqual("");
  expect(join([true, [["foo"]]])).toEqual("");
  expect(join(["foo", ["bar", ["", [["baz"]]]]])).toEqual("");
});

test("arrays (variadic)", () => {
  expect(join([], [])).toEqual("");
  expect(join(["foo"], ["bar"])).toEqual("");
  expect(join(["foo"], null, ["baz", ""], true, "", [])).toEqual("");
});

test("arrays (no `push` escape)", () => {
  expect(join({ push: 1 })).toEqual("");
  expect(join({ pop: true })).toEqual("");
  expect(join({ push: true })).toEqual("");
  expect(join("hello", { world: 1, push: true })).toEqual("hello");
});

test("functions", () => {
  const foo = () => {};
  expect(join(foo, "hello")).toEqual("hello");
  expect(join(foo, "hello", join)).toEqual("hello");
  expect(join(foo, "hello", [[join], "world"])).toEqual("hello");
});

test("objects", () => {
  expect(join({})).toEqual("");
  expect(join({ foo: true })).toEqual("");
  expect(join({ foo: true, bar: false })).toEqual("");
  expect(join({ foo: "hiya", bar: 1 })).toEqual("");
  expect(join({ foo: 1, bar: 0, baz: 1 })).toEqual("");
  expect(join({ "-foo": 1, "--bar": 1 })).toEqual("");
});

test("objects (variadic)", () => {
  expect(join({}, {})).toEqual("");
  expect(join({ foo: 1 }, { bar: 2 })).toEqual("");
  expect(join({ foo: 1 }, null, { baz: 1, bat: 0 })).toEqual("");
  expect(
    join({ foo: 1 }, {}, {}, { bar: "a" }, { baz: null, bat: Infinity })
  ).toEqual("");
});

test("strings", () => {
  expect(join("")).toEqual("");
  expect(join("foo")).toEqual("foo");
  expect(join(true && "foo")).toEqual("foo");
  expect(join(false && "foo")).toEqual("");
});

test("strings (variadic)", () => {
  expect(join("")).toEqual("");
  expect(join("foo", "bar")).toEqual("foo bar");
  expect(join(true && "foo", false && "bar", "baz")).toEqual("foo baz");
  expect(join(false && "foo", "bar", "baz", "")).toEqual("bar baz");
});

test("keeps object keys with truthy values", () => {
  expect(
    join({
      a: true,
      b: false,
      c: 0,
      d: null,
      e: undefined,
      f: 1,
    })
  ).toEqual("");
});

test("joins arrays of class names and ignore falsy values", () => {
  expect(join("a", 0, null, undefined, true, 1, "b")).toEqual("a 1 b");
});

test("supports heterogenous arguments", () => {
  expect(join({ a: true }, "b", 0)).toEqual("b");
});

test("should be trimmed", () => {
  // TODO: possible to do this without killing perf? => expect(join(" ", "a ", {}, "b", "c\td")).toEqual("a b c d");
  expect(join("", "b", {}, "")).toEqual("b");
});

test("returns an empty string for an empty configuration", () => {
  expect(join({})).toEqual("");
});

test("supports an array of class names", () => {
  expect(join(["a", "b"])).toEqual("");
});

test("joins array arguments with string arguments", () => {
  expect(join(["a", "b"], "c")).toEqual("c");
  expect(join("c", ["a", "b"])).toEqual("c");
});

test("handles multiple array arguments", () => {
  expect(join(["a", "b"], ["c", "d"])).toEqual("");
});

test("handles arrays that include falsy and true values", () => {
  expect(join(["a", 0, null, undefined, false, true, "b"])).toEqual("");
});

test("handles arrays that include arrays", () => {
  expect(join(["a", ["b", "c"]])).toEqual("");
});

test("handles arrays that include objects", () => {
  expect(join(["a", { b: true, c: false }])).toEqual("");
});

test("handles deep array recursion", () => {
  expect(join(["a", ["b", ["c", { d: true }]]])).toEqual("");
});

test("handles arrays that are empty", () => {
  expect(join("a", [])).toEqual("a");
});

test("handles nested arrays that have empty nested arrays", () => {
  expect(join("a", [[]])).toEqual("a");
});

test("handles all types of truthy and falsy property values as expected", () => {
  expect(
    join({
      // falsy:
      null: null,
      emptyString: "",
      noNumber: NaN,
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
    })
  ).toEqual("");
});
