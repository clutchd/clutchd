import { render } from "@testing-library/react";
import * as React from "react";
import { Divider } from ".";

test("render divider", () => {
  const { container } = render(<Divider />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveAttribute("aria-orientation", "horizontal");
  expect(div).toHaveAttribute("role", "separator");
  expect(div).toHaveClass("rounded-lg");
  expect(div).toHaveClass("my-6");
  expect(div).toHaveClass("h-px");
});

test("render divider with custom orientation", () => {
  const { container } = render(<Divider orientation="vertical" />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveAttribute("aria-orientation", "vertical");
  expect(div).toHaveAttribute("role", "separator");
  expect(div).toHaveClass("rounded-lg");
  expect(div).toHaveClass("mx-6");
  expect(div).toHaveClass("w-px");
});

test("render divider as decoration", () => {
  const { container } = render(<Divider decorative />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveAttribute("role", "none");
  expect(div).toHaveClass("rounded-lg");
  expect(div).toHaveClass("my-6");
  expect(div).toHaveClass("h-px");
});

test("render hidden divider", () => {
  const { container } = render(<Divider hidden />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveAttribute("aria-orientation", "horizontal");
  expect(div).toHaveAttribute("role", "separator");
  expect(div).toHaveClass("bg-inherit");
  expect(div).toHaveClass("rounded-lg");
  expect(div).toHaveClass("my-6");
  expect(div).toHaveClass("h-px");
});
