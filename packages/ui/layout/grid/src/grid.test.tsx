import { render } from "@testing-library/react";
import * as React from "react";
import { Grid } from ".";

test("render grid", () => {
  const { container } = render(<Grid />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("grid");
});

test("render grid with custom cols", () => {
  const { container } = render(<Grid cols="grid-cols-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("grid");
  expect(div).toHaveClass("grid-cols-2");
});

test("render grid with custom rows", () => {
  const { container } = render(<Grid rows="grid-rows-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("grid");
  expect(div).toHaveClass("grid-rows-2");
});
