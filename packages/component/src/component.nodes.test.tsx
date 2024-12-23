import { expect, test } from "bun:test";
import { render } from "@testing-library/react";
import { Component } from ".";

test("render `a` node", () => {
  const { container } = render(<Component.a href="/">Link</Component.a>);
  const node = container.querySelector("a");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `button` node", () => {
  const { container } = render(<Component.button />);
  const node = container.querySelector("button");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `div` node", () => {
  const { container } = render(<Component.div />);
  const node = container.querySelector("div");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `footer` node", () => {
  const { container } = render(<Component.footer />);
  const node = container.querySelector("footer");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `form` node", () => {
  const { container } = render(<Component.form />);
  const node = container.querySelector("form");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `header` node", () => {
  const { container } = render(<Component.header />);
  const node = container.querySelector("header");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h2` node", () => {
  const { container } = render(<Component.h2>h2</Component.h2>);
  const node = container.querySelector("h2");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h3` node", () => {
  const { container } = render(<Component.h3>h3</Component.h3>);
  const node = container.querySelector("h3");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `input` node", () => {
  const { container } = render(<Component.input />);
  const node = container.querySelector("input");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `label` node", () => {
  const { container } = render(
    <Component.label htmlFor="test">
      <input id="test" />
    </Component.label>,
  );
  const node = container.querySelector("label");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `main` node", () => {
  const { container } = render(<Component.main />);
  const node = container.querySelector("main");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `p` node", () => {
  const { container } = render(<Component.p />);
  const node = container.querySelector("p");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `span` node", () => {
  const { container } = render(<Component.span />);
  const node = container.querySelector("span");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});
