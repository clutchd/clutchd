import "@clutchd/bun-jest-dom";
import { render } from "@testing-library/react";
import { expect, test } from "bun:test";
import * as React from "react";
import { Block } from ".";

test("render block", () => {
  const { container } = render(<Block />);
  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("block");
});
