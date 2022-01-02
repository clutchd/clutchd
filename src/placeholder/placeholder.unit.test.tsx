import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Placeholder } from ".";

describe("Placeholder", () => {
  test("Render default placeholder", () => {
    const { container } = render(<Placeholder />);
    const wrapper = container.querySelector("div");
    const component = wrapper.querySelector("span");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("max-w-full", "max-h-full");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-black", "opacity-50", "rounded", "w-full", "h-full", "m-auto");
  });

  test("Render dark placeholder", () => {
    const { container } = render(<Placeholder dark />);
    const wrapper = container.querySelector("div");
    const component = wrapper.querySelector("span");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("max-w-full", "max-h-full");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-white", "opacity-50", "rounded", "w-full", "h-full", "m-auto");
  });

  test("Render placeholder as p", () => {
    const { container } = render(<Placeholder as="p" />);
    const wrapper = container.querySelector("p");
    const component = wrapper.querySelector("span");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("max-w-full", "max-h-full");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("bg-black", "opacity-50", "rounded", "w-full", "h-full", "m-auto");
  });
});
