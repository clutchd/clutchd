import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import NavButton from "./navButton";
import { MockRouter } from "../../tests/mockRouter";

describe("NavButton", () => {
  test("Render <NavButton />", () => {
    const { container } = render(<NavButton />);
    const component = container.querySelector("button");

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute("type", "button");
  });

  test('Render <NavButton href="www.google.com" />', () => {
    const { container } = render(<NavButton href="www.google.com" />);
    const component = container.querySelector("a");

    expect(component).toBeInTheDocument();
  });

  test('Render <NavButton href="/" /> on Page "/"', async () => {
    const { container } = render(
      <RouterContext.Provider value={MockRouter()}>
        <NavButton
          href="/"
          active={{
            className: "active-class",
            "!className": "inactive-class",
          }}
        />
      </RouterContext.Provider>
    );
    const component = container.querySelector("a");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("active-class");
    expect(component).not.toHaveClass("inactive-class");
  });

  test('Render <NavButton href="/dashboard" /> on Page "/"', async () => {
    const { container } = render(
      <RouterContext.Provider value={MockRouter()}>
        <NavButton
          href="/dashboard"
          active={{
            className: "active-class",
            "!className": "inactive-class",
          }}
        />
      </RouterContext.Provider>
    );
    const component = container.querySelector("a");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("inactive-class");
    expect(component).not.toHaveClass("active-class");
  });
});
