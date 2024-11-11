import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Header } from ".";

test("render header", () => {
  const { container } = render(<Header />);

  const header = container.querySelector("header");

  expect(container.hasChildNodes()).toEqual(true);
  expect(header).toBeInTheDocument();
  // TODO: FIX TEST => expect(header).toHaveClass("flex flex-row justify-between");
});
