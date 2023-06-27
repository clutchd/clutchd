// https://github.com/dcastil/tailwind-merge/blob/main/tests/non-conflicting-classes.test.ts

import { twx } from ".";

test("merges non-conflicting classes correctly", () => {
  expect(twx("border-t border-white/10")).toBe("border-t border-white/10");
  expect(twx("border-t border-white")).toBe("border-t border-white");
  expect(twx("text-3.5xl text-black")).toBe("text-3.5xl text-black");
});
