import { render } from "@testing-library/react";
import * as React from "react";
import { Main } from ".";

test("render main", () => {
  const { container } = render(<Main />);

  const main = container.querySelector("main");

  expect(container.hasChildNodes()).toEqual(true);
  expect(main).toBeInTheDocument();
  expect(main).toHaveClass("flex flex-col");
});
