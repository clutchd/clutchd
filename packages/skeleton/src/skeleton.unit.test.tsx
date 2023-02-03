import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Skeleton } from ".";

describe("Skeleton", () => {
  test("Render default skeleton", () => {
    const { container } = render(<Skeleton />);
    const component = container.querySelector("div");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("animate-pulse");
  });
});
