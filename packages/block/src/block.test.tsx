import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Block } from ".";

test("render block", () => {
  const { container } = render(<Block />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("block");
});
