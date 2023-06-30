import { render } from "@testing-library/react";
import * as React from "react";
import { Link } from ".";

test("render link", () => {
  const { container } = render(<Link />);

  const link = container.querySelector("a");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveAttribute("class", "cursor-pointer");
});

test("render with merged classes", () => {
  const { container } = render(<Link className="text-red-500" />);

  const link = container.querySelector("a");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveAttribute("class", "cursor-pointer text-red-500");
});

test("render with custom link and custom cursor", () => {
  const { container } = render(
    <Link href="/next-page" className="text-red-500 cursor-default" />
  );

  const link = container.querySelector("a");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/next-page");
  expect(link).toHaveAttribute("class", "text-red-500 cursor-default");
});

test("render with children", () => {
  const { container } = render(
    <Link href="/next-page" className="text-red-500 cursor-default">
      <div>This is my custom div wrapped in a link!</div>
    </Link>
  );

  const link = container.querySelector("a");
  const div = link.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/next-page");
  expect(link).toHaveAttribute("class", "text-red-500 cursor-default");
  expect(div).toBeInTheDocument();
  expect(div).toHaveTextContent("This is my custom div wrapped in a link!");
});
