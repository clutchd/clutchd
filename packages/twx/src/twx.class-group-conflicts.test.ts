import { twx } from ".";

test("merges classes from same group correctly", () => {
  expect(twx("overflow-x-auto overflow-x-hidden")).toBe("overflow-x-hidden");
  expect(twx("w-full w-fit")).toBe("w-fit");
  expect(twx("overflow-x-auto overflow-x-hidden overflow-x-scroll")).toBe(
    "overflow-x-scroll"
  );
  expect(twx("overflow-x-auto hover:overflow-x-hidden overflow-x-scroll")).toBe(
    "hover:overflow-x-hidden overflow-x-scroll"
  );
  expect(
    twx(
      "overflow-x-auto hover:overflow-x-hidden hover:overflow-x-auto overflow-x-scroll"
    )
  ).toBe("hover:overflow-x-auto overflow-x-scroll");
});

test("merges classes from Font Variant Numeric section correctly", () => {
  expect(twx("lining-nums tabular-nums diagonal-fractions")).toBe(
    "lining-nums tabular-nums diagonal-fractions"
  );
  expect(twx("normal-nums tabular-nums diagonal-fractions")).toBe(
    "tabular-nums diagonal-fractions"
  );
  expect(twx("tabular-nums diagonal-fractions normal-nums")).toBe(
    "normal-nums"
  );
  expect(twx("tabular-nums proportional-nums")).toBe("proportional-nums");
});
