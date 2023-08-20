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
    "cursor-pointer focus:outline-2 focus:outline-blue-500 focus:outline-offset-4"
  );
});
