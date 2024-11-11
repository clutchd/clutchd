import { expect, test } from "bun:test";
import { getInitials } from ".";

test("exports", () => {
  expect(typeof getInitials).toEqual("function");
  expect(typeof getInitials()).toEqual("string");
});
