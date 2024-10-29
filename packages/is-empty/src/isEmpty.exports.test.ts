import { expect, test } from "bun:test";
import { isEmpty } from ".";

test("exports", () => {
  expect(typeof isEmpty).toEqual("function");
  expect(typeof isEmpty()).toEqual("boolean");
});
