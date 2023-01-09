import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import { Component } from ".";

describe("Component", () => {
  test("Render component", () => {
    const { container } = render(<Component.div />);

    const div = container.querySelector("div");

    expect(container.hasChildNodes()).toEqual(true);
    expect(div).toBeInTheDocument();
  });

  test("Render with valid child", () => {
    const { container } = render(
      // @ts-ignore
      <Component.div asChild asdf={"1234"}>
        {/* @ts-ignore */}
        <p>Rendering a component as a valid paragraph!</p>
      </Component.div>
    );

    const p = container.querySelector("p");

    expect(container.hasChildNodes()).toEqual(true);
    expect(p).toBeInTheDocument();
    expect(p).toHaveAttribute("asdf", "1234");
    expect(p?.textContent).toEqual(
      "Rendering a component as a valid paragraph!"
    );
  });

  test("Render with valid child and props", () => {
    const { container } = render(
      // @ts-ignore
      <Component.div asChild asdf={"1234"}>
        {/* @ts-ignore */}
        <p asdf="asdf">Rendering a component as a valid paragraph!</p>
      </Component.div>
    );

    const p = container.querySelector("p");

    expect(container.hasChildNodes()).toEqual(true);
    expect(p).toBeInTheDocument();
    expect(p).toHaveAttribute("asdf", "asdf");
    expect(p?.textContent).toEqual(
      "Rendering a component as a valid paragraph!"
    );
  });

  test("Render with invalid and undefined child", () => {
    const logSpy = jest.spyOn(console, "warn");
    const { container } = render(<Component.div asChild>{null}</Component.div>);

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith(
      "Slot was unable to render children, no children provided."
    );
    expect(container.hasChildNodes()).toEqual(false);
  });

  test("Render with invalid child", () => {
    const { container } = render(
      <Component.div asChild>
        Rendering a div as an invalid string!
      </Component.div>
    );

    expect(container.hasChildNodes()).toEqual(true);
    expect(container.textContent).toEqual(
      "Rendering a div as an invalid string!"
    );
  });

  test("Render with invalid child and props", () => {
    const logSpy = jest.spyOn(console, "warn");
    const { container } = render(
      // @ts-ignore
      <Component.div asChild asdf={"1234"}>
        Rendering a div as an invalid string!
      </Component.div>
    );

    const div = container.querySelector("div");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith(
      "Slot forcefully rendered invalid children as div."
    );
    expect(container.hasChildNodes()).toEqual(true);
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute("asdf", "1234");
    expect(div?.textContent).toEqual("Rendering a div as an invalid string!");
  });

  test("Render with multiple children", () => {
    const { container } = render(
      // @ts-ignore
      <Component.div asChild>
        {/* @ts-ignore */}
        <p asdf="asdf">Rendering a div as a paragraph!</p>
        {/* @ts-ignore */}
        <div asdf="qwerty">Rendering a div as another div!</div>
      </Component.div>
    );

    const p = container.querySelector("p");
    const div = container.querySelector("div");

    expect(p).toBeInTheDocument();
    expect(p).toHaveAttribute("asdf", "asdf");
    expect(p?.textContent).toEqual("Rendering a div as a paragraph!");
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute("asdf", "qwerty");
    expect(div?.textContent).toEqual("Rendering a div as another div!");
  });

  test("Render with multiple children and props", () => {
    const logSpy = jest.spyOn(console, "warn");
    const { container } = render(
      // @ts-ignore
      <Component.div asChild asdf="1234">
        {/* @ts-ignore */}
        <p asdf="asdf">Rendering a div as a paragraph!</p>
        {/* @ts-ignore */}
        <div asdf="qwerty">Rendering a div as another div!</div>
      </Component.div>
    );

    const root = container.querySelector("div");
    const p = root?.querySelector("p");
    const div = root?.querySelector("div");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith(
      "Slot forcefully rendered invalid children as div."
    );
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute("asdf", "1234");
    expect(p).toBeInTheDocument();
    expect(p).toHaveAttribute("asdf", "asdf");
    expect(p?.textContent).toEqual("Rendering a div as a paragraph!");
    expect(div).toBeInTheDocument();
    expect(div).toHaveAttribute("asdf", "qwerty");
    expect(div?.textContent).toEqual("Rendering a div as another div!");
  });
});
