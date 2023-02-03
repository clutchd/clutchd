import { twx } from ".";

test("conflicts across modifiers", () => {
  expect(twx("hover:block hover:inline")).toBe("hover:inline");
  expect(twx("hover:block hover:focus:inline")).toBe(
    "hover:block hover:focus:inline"
  );
  expect(twx("hover:block hover:focus:inline focus:hover:inline")).toBe(
    "hover:block focus:hover:inline"
  );
  expect(twx("focus-within:inline focus-within:block")).toBe(
    "focus-within:block"
  );
});
