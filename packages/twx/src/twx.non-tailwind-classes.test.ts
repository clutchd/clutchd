import { twx } from ".";

test("does not alter non-tailwind classes", () => {
  expect(twx("non-tailwind-class inline block")).toBe(
    "non-tailwind-class block"
  );
  expect(twx("inline block inline-1")).toBe("block inline-1");
  expect(twx("inline block i-inline")).toBe("block i-inline");
  expect(twx("focus:inline focus:block focus:inline-1")).toBe(
    "focus:block focus:inline-1"
  );
});
