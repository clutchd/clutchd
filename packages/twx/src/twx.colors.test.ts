// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/colors.test.ts v1.14.0

import { expect, test } from "bun:test";
import { twx } from ".";

test("handles color conflicts properly", () => {
  expect(twx("bg-grey-5 bg-hotpink")).toBe("bg-hotpink");
  expect(twx("hover:bg-grey-5 hover:bg-hotpink")).toBe("hover:bg-hotpink");
});
