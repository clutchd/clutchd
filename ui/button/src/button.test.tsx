import { render } from "@testing-library/react";
import * as React from "react";
import { Button } from ".";

test("render button", () => {
  const { container } = render(<Button />);

  const button = container.querySelector("button");

  expect(container.hasChildNodes()).toEqual(true);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute(
    "class",
    "px-2 py-1 rounded-md font-medium transition-colors duration-150 border border-gray-950/10 hover:bg-gray-100 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500/50 focus-visible:outline-offset-2"
  );
});
