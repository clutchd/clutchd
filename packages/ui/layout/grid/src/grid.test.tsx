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
  const { container } = render(
    <Grid
      gridCols="grid-cols-2"
      gridColsSm="sm:grid-cols-4"
      gridColsMd="md:grid-cols-6"
      gridColsLg="lg:grid-cols-8"
      gridColsXl="xl:grid-cols-10"
      gridCols2xl="2xl:grid-cols-12"
    />,
  );

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("grid");
  expect(div).toHaveClass("grid-cols-2");
  expect(div).toHaveClass("sm:grid-cols-4");
  expect(div).toHaveClass("md:grid-cols-6");
  expect(div).toHaveClass("lg:grid-cols-8");
  expect(div).toHaveClass("xl:grid-cols-10");
  expect(div).toHaveClass("2xl:grid-cols-12");
});

test("render grid with custom rows", () => {
  const { container } = render(
    <Grid
      gridRows="grid-rows-2"
      gridRowsSm="sm:grid-rows-4"
      gridRowsMd="md:grid-rows-6"
      gridRowsLg="lg:grid-rows-8"
      gridRowsXl="xl:grid-rows-10"
      gridRows2xl="2xl:grid-rows-12"
    />,
  );

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("grid");
  expect(div).toHaveClass("grid-rows-2");
  expect(div).toHaveClass("sm:grid-rows-4");
  expect(div).toHaveClass("md:grid-rows-6");
  expect(div).toHaveClass("lg:grid-rows-8");
  expect(div).toHaveClass("xl:grid-rows-10");
  expect(div).toHaveClass("2xl:grid-rows-12");
});
