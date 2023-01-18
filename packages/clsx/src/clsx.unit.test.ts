import fs from "fs";
import fetch from "node-fetch";
import { minify } from "terser";
import zlib from "zlib";
import { clsx } from ".";
import pkg from "../package.json";

describe("clsx", () => {
  test("exports", () => {
    expect(typeof clsx).toEqual("function");
    expect(typeof clsx()).toEqual("string");
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

  test("objects", () => {
    expect(clsx({})).toEqual("");
    expect(clsx({ foo: true })).toEqual("foo");
    expect(clsx({ foo: true, bar: false })).toEqual("foo");
    expect(clsx({ foo: "hiya", bar: 1 })).toEqual("foo bar");
    expect(clsx({ foo: 1, bar: 0, baz: 1 })).toEqual("foo baz");
    expect(clsx({ "-foo": 1, "--bar": 1 })).toEqual("-foo --bar");
  });

  test("objects (variadic)", () => {
    expect(clsx({}, {})).toEqual("");
    expect(clsx({ foo: 1 }, { bar: 2 })).toEqual("foo bar");
    expect(clsx({ foo: 1 }, null, { baz: 1, bat: 0 })).toEqual("foo baz");
    expect(
      clsx({ foo: 1 }, {}, {}, { bar: "a" }, { baz: null, bat: Infinity })
    ).toEqual("foo bar bat");
  });

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

  test("functions", () => {
    const foo = () => {};
    expect(clsx(foo, "hello")).toEqual("hello");
    expect(clsx(foo, "hello", clsx)).toEqual("hello");
    expect(clsx(foo, "hello", [[clsx], "world"])).toEqual("hello world");
  });

  test("Keeps object keys with truthy values", () => {
    expect(
      clsx({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1,
      })
    ).toEqual("a f");
  });

  test("Joins arrays of class names and ignore falsy values", () => {
    expect(clsx("a", 0, null, undefined, true, 1, "b")).toEqual("a 1 b");
  });

  test("Supports heterogenous arguments", () => {
    expect(clsx({ a: true }, "b", 0)).toEqual("a b");
  });

  test("Should be trimmed", () => {
    // TODO: possible to do this without killing perf? => expect(clsx("", "a ", {}, "b", "c\td")).toEqual("a b c d");
    expect(clsx("", "b", {}, "")).toEqual("b");
  });

  test("Returns an empty string for an empty configuration", () => {
    expect(clsx({})).toEqual("");
  });

  test("Supports an array of class names", () => {
    expect(clsx(["a", "b"])).toEqual("a b");
  });

  test("Joins array arguments with string arguments", () => {
    expect(clsx(["a", "b"], "c")).toEqual("a b c");
    expect(clsx("c", ["a", "b"])).toEqual("c a b");
  });

  test("Handles multiple array arguments", () => {
    expect(clsx(["a", "b"], ["c", "d"])).toEqual("a b c d");
  });

  test("Handles arrays that include falsy and true values", () => {
    expect(clsx(["a", 0, null, undefined, false, true, "b"])).toEqual("a b");
  });

  test("Handles arrays that include arrays", () => {
    expect(clsx(["a", ["b", "c"]])).toEqual("a b c");
  });

  test("Handles arrays that include objects", () => {
    expect(clsx(["a", { b: true, c: false }])).toEqual("a b");
  });

  test("Handles deep array recursion", () => {
    expect(clsx(["a", ["b", ["c", { d: true }]]])).toEqual("a b c d");
  });

  test("Handles arrays that are empty", () => {
    expect(clsx("a", [])).toEqual("a");
  });

  test("Handles nested arrays that have empty nested arrays", () => {
    expect(clsx("a", [[]])).toEqual("a");
  });

  test("Handles all types of truthy and falsy property values as expected", () => {
    expect(
      clsx({
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

  test("Ensures the bundle size is accurate", async () => {
    function getClaimedSize(text) {
      const match = text.match(/\((\d+)B\)/);
      if (match == null) return "";
      return parseInt(match[1]);
    }

    // @ts-ignore
    const data = await fetch("https://bundlephobia.com/api/size?package=clsx");
    const { size: ogSize } = await data.json();

    const pkgSize = getClaimedSize(pkg.description);

    const input = fs.readFileSync("dist/index.js", "utf8");

    const result = await minify(input, {
      module: true,
      compress: true,
    });

    // @ts-ignore
    const size = zlib.gzipSync(result.code).byteLength;

    expect(size).toEqual(pkgSize);
    expect(size).toBeLessThanOrEqual(ogSize);
  });
});
