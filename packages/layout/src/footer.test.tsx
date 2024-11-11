import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Footer } from ".";

test("render footer", () => {
  const { container } = render(<Footer />);

  const footer = container.querySelector("footer");

  expect(container.hasChildNodes()).toEqual(true);
  expect(footer).toBeInTheDocument();
  // TODO: FIX TEST => expect(footer).toHaveClass("flex flex-row justify-between");
});
