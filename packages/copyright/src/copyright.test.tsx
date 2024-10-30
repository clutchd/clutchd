import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import * as React from "react";
import { Copyright, getCopyright } from ".";

test("render copyright", () => {
  const { getByText, debug } = render(<Copyright />);
  expect(getByText(`${getCopyright()}`)).toBeInTheDocument();
});

test("render copyright with children", () => {
  const { getByText } = render(<Copyright>Clutchd, LLC</Copyright>);
  expect(getByText(`${getCopyright()} Clutchd, LLC`)).toBeInTheDocument();
});
