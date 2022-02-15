import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from "react";
import { Navigator } from ".";
import { MockRouter } from "../../tests/mockRouter";

describe("Navigator", () => {
  test("Render default navigator", () => {
    const { container } = render(<Navigator />);
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
  });

  test("Render navigator with href", () => {
    const { container } = render(<Navigator href="www.google.com" />);
    const component = container.querySelector("a");

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("href", "www.google.com");
  });

  test("Render active navigator", () => {
    const { container } = render(
      <RouterContext.Provider value={MockRouter()}>
        <Navigator href="/" activeClassName="bg-red" />
      </RouterContext.Provider>
    );
    const component = container.querySelector("a");

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("href", "/");
    expect(component).toHaveClass("bg-red");
  });
});
