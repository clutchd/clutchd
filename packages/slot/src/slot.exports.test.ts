import { expect, test } from "bun:test";
import { Slot } from ".";

test("exports", () => {
  expect(typeof Slot).toEqual("object");
});
