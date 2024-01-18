import { render } from "@testing-library/react";
import * as React from "react";
import { Flex } from ".";

test("render flex", () => {
  const { container } = render(<Flex />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col flex-wrap");
});

test("render flex with custom alignItems", () => {
  const { container } = render(<Flex alignItems="items-start" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col flex-wrap items-start");
});

test("render flex with custom flex", () => {
  const { container } = render(<Flex flex="flex-none" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-none flex-col flex-wrap");
});

test("render flex with custom flexBasis", () => {
  const { container } = render(<Flex flexBasis="basis-1/2" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex basis-1/2 flex-col flex-wrap");
});

test("render flex with custom flexDirection", () => {
  const { container } = render(<Flex flexDirection="flex-col-reverse" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col-reverse flex-wrap");
});

test("render flex with custom flexGrow", () => {
  const { container } = render(<Flex flexGrow="grow-0" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col grow-0 flex-wrap");
});

test("render flex with custom flexShrink", () => {
  const { container } = render(<Flex flexShrink="shrink-0" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col shrink-0 flex-wrap");
});

test("render flex with custom justifyContent", () => {
  const { container } = render(<Flex justifyContent="justify-evenly" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col flex-wrap justify-evenly");
});

test("render flex with custom props and className", () => {
  const { container } = render(
    <Flex
      alignItems="items-start"
      flex="flex-1"
      flexBasis="basis-1/2"
      justifyContent="justify-evenly"
      flexDirection="flex-col-reverse"
      className={["bg-gray-200 p-4", "rounded-lg"].join(" ")}
    />,
  );

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass(
    "flex items-start flex-1 basis-1/2 flex-col-reverse flex-wrap justify-evenly p-4 bg-gray-200 rounded-lg",
  );
});
