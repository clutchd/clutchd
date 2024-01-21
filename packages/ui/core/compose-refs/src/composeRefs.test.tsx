import { render } from "@testing-library/react";
import React from "react";
import { composeRefs, useComposedRefs } from ".";

test("composeRefs", () => {
  const ref1: React.RefObject<HTMLDivElement> = React.createRef();
  const ref2: React.RefObject<HTMLDivElement> = React.createRef();
  expect(ref1.current).toBeNull();
  expect(ref2.current).toBeNull();

  const composed = composeRefs(ref1, ref2);

  const Component = () => {
    return <div ref={composed}></div>;
  };

  render(<Component />);

  expect(ref1.current).not.toBeNull();
  expect(ref2.current).not.toBeNull();
  expect(ref1.current).toEqual(ref2.current);
});

test("useComposedRefs", () => {
  const ref1: React.RefObject<HTMLDivElement> = React.createRef();
  const ref2: React.RefObject<HTMLDivElement> = React.createRef();
  expect(ref1.current).toBeNull();
  expect(ref2.current).toBeNull();

  const Component = () => {
    const composed = useComposedRefs(ref1, ref2);
    return <div ref={composed}></div>;
  };

  render(<Component />);

  expect(ref1.current).not.toBeNull();
  expect(ref2.current).not.toBeNull();
  expect(ref1.current).toEqual(ref2.current);
});
