import { expect, test } from "bun:test";
import { twx } from "@clutchd/twx";
import { render } from "@testing-library/react";
import { Component } from ".";

test("render component", () => {
  const { container } = render(<Component.div />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
});

test("render with tailwindcss className", () => {
  const { container } = render(
    <Component.div className="bg-red-500">With tailwindcss!</Component.div>,
  );

  const root = container.querySelector("div");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAttribute("class", "bg-red-500");
  expect(root?.textContent).toEqual("With tailwindcss!");
});

test("render with merged tailwindcss className", () => {
  const { container } = render(
    <Component.div className="bg-blue-500 bg-red-500">
      With tailwindcss!
    </Component.div>,
  );

  const root = container.querySelector("div");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAttribute("class", "bg-blue-500 bg-red-500");
  expect(root?.textContent).toEqual("With tailwindcss!");
});

test("Render asChild with merged tailwindcss className", () => {
  const { container } = render(
    <Component.div asChild className="bg-red-500">
      <Component.div className="bg-blue-500">With tailwindcss!</Component.div>
    </Component.div>,
  );

  const root = container.querySelector("div");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAttribute("class", "bg-red-500 bg-blue-500");
  expect(root?.textContent).toEqual("With tailwindcss!");
});

test("Render asChild with tw-merged tailwindcss className", () => {
  const { container } = render(
    <Component.div asChild className="bg-red-500">
      <Component.div cx={twx} className="bg-blue-500">
        With tailwindcss!
      </Component.div>
    </Component.div>,
  );

  const root = container.querySelector("div");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAttribute("class", "bg-blue-500");
  expect(root?.textContent).toEqual("With tailwindcss!");
});

test("render with merged tailwindcss className and inconsistent spaces", () => {
  const { container } = render(
    // biome-ignore format: We want this to have inconsistent spacing for tests
    <Component.div className="bg-red-500    bg-blue-500  shadow     rounded-xl">
      With tailwindcss!
    </Component.div>,
  );

  const root = container.querySelector("div");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAttribute(
    "class",
    "bg-red-500    bg-blue-500  shadow     rounded-xl",
  );
  expect(root?.textContent).toEqual("With tailwindcss!");
});

test("render with tw-merged tailwindcss className and inconsistent spaces", () => {
  const { container } = render(
    // biome-ignore format: We want this to have inconsistent spacing for tests
    <Component.div cx={twx} className="bg-red-500    bg-blue-500  shadow     rounded-xl">
      With tailwindcss!
    </Component.div>,
  );

  const root = container.querySelector("div");

  expect(root).toBeInTheDocument();
  expect(root).toHaveAttribute("class", "bg-blue-500 shadow rounded-xl");
  expect(root?.textContent).toEqual("With tailwindcss!");
});
