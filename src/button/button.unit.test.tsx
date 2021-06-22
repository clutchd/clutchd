import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  test("Render <Button />", () => {
    const { container } = render(<Button />);
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("type", "button");
  });
});
