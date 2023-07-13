import { render } from "@testing-library/react";
import * as React from "react";
import { Block } from ".";

test("render block", () => {
  const { container } = render(<Block />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("block");
  expect(div).toHaveClass("h-full");
  expect(div).toHaveClass("w-full");
});
