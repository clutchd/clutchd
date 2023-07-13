import { render } from "@testing-library/react";
import * as React from "react";
import { Flex } from ".";

test("render flex", () => {
  const { container } = render(<Flex />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("h-full");
  expect(div).toHaveClass("w-full");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("justify-normal");
  expect(div).toHaveClass("items-center");
});

test("render flex with custom alignItems", () => {
  const { container } = render(<Flex alignItems="items-start" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("h-full");
  expect(div).toHaveClass("w-full");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("justify-normal");
  expect(div).toHaveClass("items-start");
});

test("render flex with custom direction", () => {
  const { container } = render(<Flex flexDirection="flex-col-reverse" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("h-full");
  expect(div).toHaveClass("w-full");
  expect(div).toHaveClass("flex-col-reverse");
  expect(div).toHaveClass("justify-normal");
  expect(div).toHaveClass("items-center");
});

test("render flex with custom justifyContent", () => {
  const { container } = render(<Flex justifyContent="justify-evenly" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("h-full");
  expect(div).toHaveClass("w-full");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("justify-evenly");
  expect(div).toHaveClass("items-center");
});
