import { render } from "@testing-library/react";
import React from "react";
import { Skeleton } from ".";

test("render default skeleton", () => {
  const { container } = render(<Skeleton />);
  const component = container.querySelector("div");

  expect(component).toBeInTheDocument();
  expect(component).toHaveClass("animate-pulse");
});
