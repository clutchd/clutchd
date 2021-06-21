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

  test('Render <Component tag="p" />', () => {
    const { container } = render(<Component tag="p" />);
    const component = container.querySelector("p");

    expect(component).toBeInTheDocument();
  });

  test('Render <Component tag="button" />', () => {
    const { container } = render(<Component tag="button" />);
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("type", "button");
  });

  test('Render <Component tag="button" type="submit" />', () => {
    const { container, debug } = render(
      <Component tag="button" type="submit" />
    );
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("type", "submit");
  });
});
