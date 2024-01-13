// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/tw-merge.test.ts v1.14.0

import { expect, test } from "bun:test";
import { twx } from ".";

test("twx", () => {
  expect(twx("mix-blend-normal mix-blend-multiply")).toBe("mix-blend-multiply");
  expect(twx("h-10 h-min")).toBe("h-min");
  expect(twx("stroke-black stroke-1")).toBe("stroke-black stroke-1");
  expect(twx("stroke-2 stroke-[3]")).toBe("stroke-[3]");
  expect(twx("outline-black outline-1")).toBe("outline-black outline-1");
  expect(twx("grayscale-0 grayscale-[50%]")).toBe("grayscale-[50%]");
  expect(twx("grow grow-[2]")).toBe("grow-[2]");
  expect(twx("grow", [null, false, [["grow-[2]"]]])).toBe("grow-[2]");
});
