import { expect, test } from "bun:test";
import { composeRefs } from ".";

test("exports", () => {
  expect(typeof composeRefs).toEqual("function");
  expect(typeof composeRefs(() => { })).toEqual("function");
});
