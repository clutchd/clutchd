import { isEmpty } from ".";
import { test, expect } from "bun:test";

test("exports", () => {
  expect(typeof isEmpty).toEqual("function");
  expect(typeof isEmpty()).toEqual("boolean");
});
