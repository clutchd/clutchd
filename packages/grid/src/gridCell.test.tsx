import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { GridCell } from ".";

test("render col", () => {
  const { container } = render(<GridCell />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
});

test("render col with custom col start", () => {
  const { container } = render(<GridCell colStart="col-start-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("col-start-2");
});

test("render col with custom col span", () => {
  const { container } = render(<GridCell colSpan="col-span-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("col-span-2");
});

test("render col with custom col end", () => {
  const { container } = render(<GridCell colEnd="col-end-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("col-end-2");
});

test("render col with custom row start", () => {
  const { container } = render(<GridCell rowStart="row-start-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("row-start-2");
});

test("render col with custom row span", () => {
  const { container } = render(<GridCell rowSpan="row-span-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("row-span-2");
});

test("render col with custom row end", () => {
  const { container } = render(<GridCell rowEnd="row-end-2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("row-end-2");
});
