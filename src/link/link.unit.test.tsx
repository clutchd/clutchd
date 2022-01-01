import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import Link from "./link";

describe("Link", () => {
  test("Render default link", () => {
    const { container } = render(<Link />);
    const component = container.querySelector("a");
    expect(component).toBeInTheDocument();
  });

  test("Render link to www.google.com", () => {
    const { container } = render(<Link href="www.google.com" />);
    const component = container.querySelector("a");
    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("href", "www.google.com");
  });
});
