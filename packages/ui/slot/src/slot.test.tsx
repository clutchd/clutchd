import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import { Slot } from ".";

test("render empty slot", () => {
  const logSpy = jest.spyOn(console, "warn");
  const { container } = render(<Slot />);

  const div = container.querySelector("div");

  expect(logSpy).toBeCalledTimes(1);
  expect(logSpy).toBeCalledWith(
    "Invalid children, Slot forcefully rendered as a fragment."
  );
  expect(container.hasChildNodes()).toEqual(false);
  expect(div).not.toBeInTheDocument();
});

test("render with valid child", () => {
  const { container } = render(
    // @ts-ignore
    <Slot asdf={"1234"}>
      <p>Rendering a component as a valid paragraph!</p>
    </Slot>
  );

  const p = container.querySelector("p");

  expect(container.hasChildNodes()).toEqual(true);
  expect(p).toBeInTheDocument();
  expect(p).toHaveAttribute("asdf", "1234");
  expect(p?.textContent).toEqual("Rendering a component as a valid paragraph!");
});

test("render with valid child and props", () => {
  const { container } = render(
    // @ts-ignore
    <Slot asdf={"1234"}>
      {/* @ts-ignore */}
      <p asdf="asdf">Rendering a component as a valid paragraph!</p>
    </Slot>
  );

  const p = container.querySelector("p");

  expect(container.hasChildNodes()).toEqual(true);
  expect(p).toBeInTheDocument();
  expect(p).toHaveAttribute("asdf", "asdf");
  expect(p?.textContent).toEqual("Rendering a component as a valid paragraph!");
});

test("render with invalid and undefined child", () => {
  const logSpy = jest.spyOn(console, "warn");
  const { container } = render(
    // @ts-ignore
    <Slot asdf="asdf">
      {null}
    </Slot>
  );

  const div = container.querySelector("div");

  expect(logSpy).toBeCalledTimes(1);
  expect(logSpy).toBeCalledWith(
    "Invalid children with props, Slot forcefully rendered as a div."
  );
  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveAttribute("asdf", "asdf");
  expect(div?.hasChildNodes()).toEqual(false);
});

test("render with invalid child", () => {
  const logSpy = jest.spyOn(console, "warn");
  const { container } = render(
    <Slot>Rendering a div as an invalid string!</Slot>
  );

  expect(logSpy).toBeCalledTimes(1);
  expect(logSpy).toBeCalledWith(
    "Invalid children, Slot forcefully rendered as a fragment."
  );
  expect(container.hasChildNodes()).toEqual(true);
  expect(container.textContent).toEqual(
    "Rendering a div as an invalid string!"
  );
});

test("render with invalid child and props", () => {
  const logSpy = jest.spyOn(console, "warn");
  const { container } = render(
    // @ts-ignore
    <Slot asdf={"1234"}>
      Rendering a div as an invalid string!
    </Slot>
  );

  const div = container.querySelector("div");

  expect(logSpy).toBeCalledTimes(1);
  expect(logSpy).toBeCalledWith(
    "Invalid children with props, Slot forcefully rendered as a div."
  );
  expect(container.hasChildNodes()).toEqual(true);
  expect(div).toBeInTheDocument();
  expect(div).toHaveAttribute("asdf", "1234");
  expect(div?.textContent).toEqual("Rendering a div as an invalid string!");
});

test("render with multiple children", () => {
  const logSpy = jest.spyOn(console, "warn");
  const { container } = render(
    <Slot>
      {/* @ts-ignore */}
      <p asdf="asdf">Rendering a div as a paragraph!</p>
      {/* @ts-ignore */}
      <div asdf="qwerty">Rendering a div as another div!</div>
    </Slot>
  );

  const p = container.querySelector("p");
  const div = container.querySelector("div");

  expect(logSpy).toBeCalledTimes(1);
  expect(logSpy).toBeCalledWith(
    "Invalid children, Slot forcefully rendered as a fragment."
  );
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
    <Slot asdf="1234">
      {/* @ts-ignore */}
      <p asdf="asdf">Rendering a div as a paragraph!</p>
      {/* @ts-ignore */}
      <div asdf="qwerty">Rendering a div as another div!</div>
    </Slot>
  );

  const root = container.querySelector("div");
  const p = root?.querySelector("p");
  const div = root?.querySelector("div");

  expect(logSpy).toBeCalledTimes(1);
  expect(logSpy).toBeCalledWith(
    "Invalid children with props, Slot forcefully rendered as a div."
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
