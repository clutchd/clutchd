import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Component from "./component";

describe("Component", () => {
  test("Render <Component />", () => {
    const { container } = render(<Component />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
  });

  test('Render <Component className="w-full" />', () => {
    const { container } = render(<Component className="w-full" />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("w-full");
  });

  test('Render <Component as="p" />', () => {
    const { container } = render(<Component as="p" />);
    const component = container.querySelector("p");

    expect(component).toBeInTheDocument();
  });

  test('Render <Component as="button" />', () => {
    const { container } = render(<Component as="button" />);
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
  });
});
