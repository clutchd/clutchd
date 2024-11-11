import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Main } from ".";

test("render main", () => {
  const { container } = render(<Main />);

  const main = container.querySelector("main");

  expect(container.hasChildNodes()).toEqual(true);
  expect(main).toBeInTheDocument();
  // TODO: FIX TEST => expect(main).toHaveClass("flex flex-col");
});
