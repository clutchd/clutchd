import fs from "fs";
import { minify } from "terser";
import zlib from "zlib";
import { isEmpty } from "./isEmpty";

describe("isEmpty", () => {
  test("exports", () => {
    expect(typeof isEmpty).toEqual("function");
    expect(typeof isEmpty()).toEqual("boolean");
  });

  test("null is empty", async () => {
    expect(isEmpty(null)).toEqual(true);
  });

  test("undefined is empty", async () => {
    expect(isEmpty(undefined)).toEqual(true);
  });

  test('"" is empty', async () => {
    expect(isEmpty("")).toEqual(true);
  });

  test("[] is empty", async () => {
    expect(isEmpty([])).toEqual(true);
  });

  test("{} is empty", async () => {
    expect(isEmpty({})).toEqual(true);
  });

  test('"test" is not empty', async () => {
    expect(isEmpty("test")).toEqual(false);
  });

  test("0 is not empty", async () => {
    expect(isEmpty(0)).toEqual(false);
  });

  test("1 is not empty", async () => {
    expect(isEmpty(1)).toEqual(false);
  });

  test("Date is not empty", async () => {
    expect(isEmpty(new Date())).toEqual(false);
  });

  test("Invalid date is empty", async () => {
    expect(isEmpty(new Date("invalid"))).toEqual(true);
  });

  test("Function is not empty", async () => {
    expect(
      isEmpty((e: any) => {
        console.log(e);
      })
    ).toEqual(false);
  });

  test("Ensures the bundle size is accurate", async () => {
    const input = fs.readFileSync("dist/index.js", "utf8");

    const result = await minify(input, {
      module: true,
      compress: true,
    });

    // @ts-ignore
    const size = zlib.gzipSync(result.code).byteLength;

    expect(size).toBeLessThanOrEqual(295);
  });
});
