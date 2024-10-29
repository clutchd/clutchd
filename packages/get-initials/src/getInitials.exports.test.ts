import { getInitials } from ".";
import { test, expect } from "bun:test";

test("exports", () => {
  expect(typeof getInitials).toEqual("function");
  expect(typeof getInitials()).toEqual("string");
});
