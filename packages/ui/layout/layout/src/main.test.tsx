import { render } from "@testing-library/react";
import * as React from "react";
import { Main } from ".";

test("render main", () => {
  const { container } = render(<Main />);

  const div = container.querySelector("main");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col");
});
