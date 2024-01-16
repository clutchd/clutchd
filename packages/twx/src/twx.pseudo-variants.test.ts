// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/tests/pseudo-variants.test.ts v1.14.0

import { twx } from ".";

test("handles pseudo variants conflicts properly", () => {
  expect(twx("empty:p-2 empty:p-3")).toBe("empty:p-3");
  expect(twx("hover:empty:p-2 hover:empty:p-3")).toBe("hover:empty:p-3");
  expect(twx("read-only:p-2 read-only:p-3")).toBe("read-only:p-3");
});

test("handles pseudo variant group conflicts properly", () => {
  expect(twx("group-empty:p-2 group-empty:p-3")).toBe("group-empty:p-3");
  expect(twx("peer-empty:p-2 peer-empty:p-3")).toBe("peer-empty:p-3");
  expect(twx("group-empty:p-2 peer-empty:p-3")).toBe(
    "group-empty:p-2 peer-empty:p-3",
  );
  expect(twx("hover:group-empty:p-2 hover:group-empty:p-3")).toBe(
    "hover:group-empty:p-3",
  );
  expect(twx("group-read-only:p-2 group-read-only:p-3")).toBe(
    "group-read-only:p-3",
  );
});
