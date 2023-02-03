import fs from "fs";
import fetch from "node-fetch";
import { minify } from "terser";
import zlib from "zlib";
import { clsx } from ".";
import pkg from "../package.json";

test("exports", () => {
  expect(typeof clsx).toEqual("function");
  expect(typeof clsx()).toEqual("string");
});

test("ensures the bundle size is accurate", async () => {
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
