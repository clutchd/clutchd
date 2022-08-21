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
    const { container } = render(
      <Component.div asChild>
        <p>Rendering a div as a paragraph!</p>
      </Component.div>
    );
    const component = container.querySelector("p");

    expect(component).toBeInTheDocument();
  });
});
