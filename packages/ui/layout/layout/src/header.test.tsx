import { render } from "@testing-library/react";
import * as React from "react";
import { Header } from ".";

test("render header", () => {
  const { container } = render(<Header />);

  const header = container.querySelector("header");

  expect(container.hasChildNodes()).toEqual(true);
  expect(header).toBeInTheDocument();
  expect(header).toHaveClass("flex flex-row justify-between");
});
