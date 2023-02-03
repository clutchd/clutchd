import { twx } from ".";

test("merges content utilities correctly", () => {
  expect(twx("content-['hello'] content-[attr(data-content)]")).toBe(
    "content-[attr(data-content)]"
  );
});
