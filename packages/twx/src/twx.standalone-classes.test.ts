import { twx } from ".";

test("merges standalone classes from same group correctly", () => {
  expect(twx("inline block")).toBe("block");
  expect(twx("hover:block hover:inline")).toBe("hover:inline");
  expect(twx("hover:block hover:block")).toBe("hover:block");
  expect(
    twx("inline hover:inline focus:inline hover:block hover:focus:block")
  ).toBe("inline focus:inline hover:block hover:focus:block");
  expect(twx("underline line-through")).toBe("line-through");
  expect(twx("line-through no-underline")).toBe("no-underline");
});
