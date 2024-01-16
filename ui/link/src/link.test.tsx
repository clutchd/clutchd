import { render } from "@testing-library/react";
import * as React from "react";
import { Link } from ".";

test("render link", () => {
  const { container } = render(<Link />);

  const link = container.querySelector("a");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveAttribute(
    "class",
    "cursor-pointer focus:outline-2 focus:outline-offset-4 focus:outline-blue-500",
  );
});

test("render with merged classes", () => {
  const { container } = render(<Link className="text-red-500" />);

  const link = container.querySelector("a");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveAttribute(
    "class",
    "cursor-pointer focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 text-red-500",
  );
});

test("render with custom link and custom cursor", () => {
  const { container } = render(
    <Link href="/next-page" className="cursor-default text-red-500" />,
  );

  const link = container.querySelector("a");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/next-page");
  expect(link).toHaveAttribute(
    "class",
    "focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 cursor-default text-red-500",
  );
});

test("render with children", () => {
  const { container } = render(
    <Link href="/next-page" className="cursor-default text-red-500">
      <div>This is my custom div wrapped in a link!</div>
    </Link>,
  );

  const link = container.querySelector("a");
  const div = link.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/next-page");
  expect(link).toHaveAttribute(
    "class",
    "focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 cursor-default text-red-500",
  );
  expect(div).toBeInTheDocument();
  expect(div).toHaveTextContent("This is my custom div wrapped in a link!");
});

test("render with onClick", () => {
  const logSpy = jest.spyOn(console, "log");
  const { container } = render(
    <Link
      href="/next-page"
      className="cursor-default text-red-500"
      onClick={() => {
        console.log("click!");
      }}
    >
      <div>This is my custom div wrapped in a link!</div>
    </Link>,
  );

  const link = container.querySelector("a");
  const div = link.querySelector("div");

  link?.click();

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/next-page");
  expect(link).toHaveAttribute(
    "class",
    "focus:outline-2 focus:outline-offset-4 focus:outline-blue-500 cursor-default text-red-500",
  );
  expect(logSpy).toHaveBeenCalledWith("click!");
  expect(logSpy).toHaveBeenCalledTimes(1);
  expect(div).toBeInTheDocument();
  expect(div).toHaveTextContent("This is my custom div wrapped in a link!");
});
