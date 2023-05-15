// https://github.com/dcastil/tailwind-merge/blob/main/tests/per-side-border-colors.test.ts

import { twx } from ".";

test("merges classes with per-side border colors correctly", () => {
  expect(twx("border-t-some-blue border-t-other-blue")).toBe(
    "border-t-other-blue"
  );
  expect(twx("border-t-some-blue border-some-blue")).toBe("border-some-blue");
});
