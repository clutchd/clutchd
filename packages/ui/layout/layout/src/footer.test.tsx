import { render } from "@testing-library/react";
import * as React from "react";
import { Footer } from ".";

test("render footer", () => {
  const { container } = render(<Footer />);

  const div = container.querySelector("footer");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-row justify-between");
});
