import fs from "fs";
import { minify } from "terser";
import zlib from "zlib";
import { isEmpty } from "./isEmpty";

test("exports", () => {
  expect(typeof isEmpty).toEqual("function");
  expect(typeof isEmpty()).toEqual("boolean");
});

test("Ensures the bundle size is accurate", async () => {
  const input = fs.readFileSync("dist/index.js", "utf8");

  const result = await minify(input, {
    module: true,
    compress: true,
  });

  // @ts-ignore
  const size = zlib.gzipSync(result.code).byteLength;

  expect(size).toBeLessThanOrEqual(370);
});
