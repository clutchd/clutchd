import { expect, test } from "bun:test";
import { composePreventableEventHandlers } from ".";

test("exports", () => {
  expect(typeof composePreventableEventHandlers).toEqual("function");
  expect(typeof composePreventableEventHandlers(() => {})).toEqual("function");
});
