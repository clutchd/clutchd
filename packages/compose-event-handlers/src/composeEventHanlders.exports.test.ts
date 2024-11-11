import { expect, test } from "bun:test";
import { composeEventHandlers } from ".";

test("exports", () => {
  expect(typeof composeEventHandlers).toEqual("function");
  expect(typeof composeEventHandlers(() => {})).toEqual("function");
});
