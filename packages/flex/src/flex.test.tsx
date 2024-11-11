import { render } from "@testing-library/react";
import { expect, test } from "bun:test";
import { Flex } from ".";

test("render flex", () => {
  const { container } = render(<Flex />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("flex");
});

test("render flex with custom align", () => {
  const { container } = render(<Flex align="items-start" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("flex items-start");
});

test("render flex with custom direction", () => {
  const { container } = render(<Flex direction="flex-col-reverse" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("flex flex-col-reverse");
});

test("render flex with custom justify", () => {
  const { container } = render(<Flex justify="justify-evenly" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass("flex justify-evenly");
});

test("render flex with custom props and className", () => {
  const { container } = render(
    <Flex
      align="items-start"
      justify="justify-evenly"
      direction="flex-col-reverse"
      className={["bg-gray-200 p-4", "rounded-lg"].join(" ")}
    />,
  );

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  // TODO: FIX TEST => expect(div).toHaveClass(
  // TODO: FIX TEST =>   "flex items-start flex-col-reverse justify-evenly p-4 bg-gray-200 rounded-lg",
  // TODO: FIX TEST =>  );
});
