import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Component from "./component";

describe("Component", () => {
  test("Render default component", () => {
    const { container } = render(<Component />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
  });

  test("Render component with w-full class", () => {
    const { container } = render(<Component className="w-full" />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("w-full");
  });

  test("Render component as p tag", () => {
    const { container } = render(<Component as="p" />);
    const component = container.querySelector("p");

    expect(component).toBeInTheDocument();
  });

  test("Render component as button tag", () => {
    const { container } = render(<Component as="button" />);
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
  });
});
