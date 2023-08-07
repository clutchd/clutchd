import { render } from "@testing-library/react";
import * as React from "react";
import { GridCol } from ".";

test("render col", () => {
  const { container } = render(<GridCol />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("col-auto");
});

test("render col with custom col span", () => {
  const { container } = render(
    <GridCol
      colSpan="col-span-2"
      colSpanSm="sm:col-span-4"
      colSpanMd="md:col-span-6"
      colSpanLg="lg:col-span-8"
      colSpanXl="xl:col-span-10"
      colSpan2xl="2xl:col-span-12"
    />
  );

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("col-span-2");
  expect(div).toHaveClass("sm:col-span-4");
  expect(div).toHaveClass("md:col-span-6");
  expect(div).toHaveClass("lg:col-span-8");
  expect(div).toHaveClass("xl:col-span-10");
  expect(div).toHaveClass("2xl:col-span-12");
});

test("render col with custom row span", () => {
  const { container } = render(
    <GridCol
      rowSpan="row-span-1"
      rowSpanSm="sm:row-span-2"
      rowSpanMd="md:row-span-3"
      rowSpanLg="lg:row-span-4"
      rowSpanXl="xl:row-span-5"
      rowSpan2xl="2xl:row-span-6"
    />
  );

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("col-auto");
  expect(div).toHaveClass("row-span-1");
  expect(div).toHaveClass("sm:row-span-2");
  expect(div).toHaveClass("md:row-span-3");
  expect(div).toHaveClass("lg:row-span-4");
  expect(div).toHaveClass("xl:row-span-5");
  expect(div).toHaveClass("2xl:row-span-6");
});
