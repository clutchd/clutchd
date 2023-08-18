// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/content-utilities.test.ts v1.14.0

import { twx } from ".";

test("merges content utilities correctly", () => {
  expect(twx("content-['hello'] content-[attr(data-content)]")).toBe(
    "content-[attr(data-content)]"
  );
});
