import { render } from "@testing-library/react";
import * as React from "react";
import { Button } from ".";

test("render button", () => {
  const { container } = render(<Button />);

  const button = container.querySelector("button");

  expect(container.hasChildNodes()).toEqual(true);
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("class", "cursor-pointer");
});
