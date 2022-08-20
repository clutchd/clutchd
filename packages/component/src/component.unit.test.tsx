import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Component } from ".";

describe("Component", () => {
  test("Render div component", () => {
    const { container } = render(<Component.div />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
  });

  test("Render p component", () => {
    const { container } = render(<Component.p />);
    const component = container.querySelector("p");

    expect(component).toBeInTheDocument();
  });
});
