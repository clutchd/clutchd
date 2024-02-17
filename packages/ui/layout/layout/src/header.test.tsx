import { render } from "@testing-library/react";
import * as React from "react";
import { Header } from ".";

test("render header", () => {
  const { container } = render(<Header />);

  const div = container.querySelector("header");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-row justify-between");
});
