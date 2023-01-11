import fs from "fs";
import fetch from "node-fetch";
import { minify } from "terser";
import zlib from "zlib";
import { clsx } from ".";
import pkg from "../package.json";

describe("clsx", () => {
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
    // expect(clsx("", "a ", {}, "b")).toEqual("a b");
    expect(clsx("", "a", {}, "b")).toEqual("a b");
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
    const size = zlib.gzipSync(
      (
        await minify(fs.readFileSync("dist/index.js", "utf8"), {
          module: true,
          compress: true,
        })
      ).code || ""
    ).byteLength;

    expect(size).toEqual(pkgSize);
    expect(size).toBeLessThanOrEqual(ogSize);
  });
});
