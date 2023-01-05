import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";

describe("Example", () => {
  test("Example Test", () => {
    const { container } = render(<div />);
    const component = container.querySelector("div");
    expect(component).toBeInTheDocument();
  });
});
