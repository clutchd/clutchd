import { twx } from ".";

test("keeps object keys with truthy values", () => {
  expect(
    twx({
      a: true,
      b: false,
      c: 0,
      d: null,
      e: undefined,
      f: 1,
    })
  ).toEqual("a f");
});

test("joins arrays of class names and ignore falsy values", () => {
  expect(twx("a", 0, null, undefined, true, 1, "b")).toEqual("a 1 b");
});

test("supports heterogenous arguments", () => {
  expect(twx({ a: true }, "b", 0)).toEqual("a b");
});

test("should be trimmed", () => {
  // TODO: possible to do this without killing perf? => expect(twx("", "a ", {}, "b", "c\td")).toEqual("a b c d");
  expect(twx("", "b", {}, "")).toEqual("b");
});

test("returns an empty string for an empty configuration", () => {
  expect(twx({})).toEqual("");
});

test("supports an array of class names", () => {
  expect(twx(["a", "b"])).toEqual("a b");
});

test("joins array arguments with string arguments", () => {
  expect(twx(["a", "b"], "c")).toEqual("a b c");
  expect(twx("c", ["a", "b"])).toEqual("c a b");
});

test("handles multiple array arguments", () => {
  expect(twx(["a", "b"], ["c", "d"])).toEqual("a b c d");
});

test("handles arrays that include falsy and true values", () => {
  expect(twx(["a", 0, null, undefined, false, true, "b"])).toEqual("a b");
});

test("handles arrays that include arrays", () => {
  expect(twx(["a", ["b", "c"]])).toEqual("a b c");
});

test("handles arrays that include objects", () => {
  expect(twx(["a", { b: true, c: false }])).toEqual("a b");
});

test("handles deep array recursion", () => {
  expect(twx(["a", ["b", ["c", { d: true }]]])).toEqual("a b c d");
});

test("handles arrays that are empty", () => {
  expect(twx("a", [])).toEqual("a");
});

test("handles nested arrays that have empty nested arrays", () => {
  expect(twx("a", [[]])).toEqual("a");
});

test("handles all types of truthy and falsy property values as expected", () => {
  expect(
    twx({
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
  ).toEqual(
    "nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero"
  );
});
