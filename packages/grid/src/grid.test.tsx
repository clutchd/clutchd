import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Grid } from ".";

test("render grid", () => {
  const { container } = render(<Grid />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("grid");
});

test("render grid with custom cols", () => {
  const { container } = render(<Grid cols="grid-cols-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("grid");
  // TODO: FIX TEST => expect(div).toHaveClass("grid-cols-2");
});

test("render grid with custom rows", () => {
  const { container } = render(<Grid rows="grid-rows-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("grid");
  // TODO: FIX TEST => expect(div).toHaveClass("grid-rows-2");
});
