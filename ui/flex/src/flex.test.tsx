import { render } from "@testing-library/react";
import * as React from "react";
import { Flex } from ".";

test("render flex", () => {
  const { container } = render(<Flex />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
});

test("render flex with custom alignItems", () => {
  const { container } = render(<Flex alignItems="items-start" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
  expect(div).toHaveClass("items-start");
});

test("render flex with custom flex", () => {
  const { container } = render(<Flex flex="flex-none" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-none");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
});

test("render flex with custom flexBasis", () => {
  const { container } = render(<Flex flexBasis="basis-1/2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("basis-1/2");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
});

test("render flex with custom flexDirection", () => {
  const { container } = render(<Flex flexDirection="flex-col-reverse" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-col-reverse");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
});

test("render flex with custom flexGrow", () => {
  const { container } = render(<Flex flexGrow="grow-0" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("grow-0");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
});

test("render flex with custom flexShrink", () => {
  const { container } = render(<Flex flexShrink="shrink-0" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("shrink-0");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-normal");
});

test("render flex with custom justifyContent", () => {
  const { container } = render(<Flex justifyContent="justify-evenly" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex");
  expect(div).toHaveClass("flex-col");
  expect(div).toHaveClass("flex-wrap");
  expect(div).toHaveClass("justify-evenly");
});
