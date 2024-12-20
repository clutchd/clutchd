import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Page } from ".";

test("render page", () => {
  const { container } = render(<Page />);

  const div = container.querySelector("div");

  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveClass("flex flex-col min-w-screen min-h-screen");
});
