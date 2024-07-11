import { render } from "@testing-library/react";
import { Component } from ".";

test("render `a` node", () => {
  const { container } = render(<Component.a />);
  const node = container.querySelector("a");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `blockquote` node", () => {
  const { container } = render(<Component.blockquote />);
  const node = container.querySelector("blockquote");
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

test("render `em` node", () => {
  const { container } = render(<Component.em />);
  const node = container.querySelector("em");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `fieldset` node", () => {
  const { container } = render(<Component.fieldset />);
  const node = container.querySelector("fieldset");
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

test("render `h1` node", () => {
  const { container } = render(<Component.h1 />);
  const node = container.querySelector("h1");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h2` node", () => {
  const { container } = render(<Component.h2 />);
  const node = container.querySelector("h2");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h3` node", () => {
  const { container } = render(<Component.h3 />);
  const node = container.querySelector("h3");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h4` node", () => {
  const { container } = render(<Component.h4 />);
  const node = container.querySelector("h4");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h5` node", () => {
  const { container } = render(<Component.h5 />);
  const node = container.querySelector("h5");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `h6` node", () => {
  const { container } = render(<Component.h6 />);
  const node = container.querySelector("h6");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `header` node", () => {
  const { container } = render(<Component.header />);
  const node = container.querySelector("header");
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
  const { container } = render(<Component.label />);
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

test("render `small` node", () => {
  const { container } = render(<Component.small />);
  const node = container.querySelector("small");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `strong` node", () => {
  const { container } = render(<Component.strong />);
  const node = container.querySelector("strong");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `optgroup` node", () => {
  const { container } = render(<Component.optgroup />);
  const node = container.querySelector("optgroup");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `option` node", () => {
  const { container } = render(<Component.option />);
  const node = container.querySelector("option");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `output` node", () => {
  const { container } = render(<Component.output />);
  const node = container.querySelector("output");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `p` node", () => {
  const { container } = render(<Component.p />);
  const node = container.querySelector("p");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `select` node", () => {
  const { container } = render(<Component.select />);
  const node = container.querySelector("select");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `span` node", () => {
  const { container } = render(<Component.span />);
  const node = container.querySelector("span");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});

test("render `textarea` node", () => {
  const { container } = render(<Component.textarea />);
  const node = container.querySelector("textarea");
  expect(container.hasChildNodes()).toEqual(true);
  expect(node).toBeInTheDocument();
});
