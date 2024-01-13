import { expect, test } from "bun:test";
import { mergeEventHandlers } from ".";

test("exports", () => {
  expect(typeof mergeEventHandlers).toEqual("function");
  expect(typeof mergeEventHandlers(null)).toEqual("undefined");
});
