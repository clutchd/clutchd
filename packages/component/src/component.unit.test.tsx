import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Component } from ".";

describe("Component", () => {
  test("Render default component", () => {
    const { container } = render(<Component />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
  });

  test("Render component as p", () => {
    const { container } = render(<Component as="p" />);
    const component = container.querySelector("p");

    expect(component).toBeInTheDocument();
  });
});
