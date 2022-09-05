import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Skeleton } from ".";

describe("Skeleton", () => {
  test("Render default skeleton", () => {
    const { container } = render(<Skeleton />);
    const wrapper = container.querySelector("div");
    const component = wrapper?.querySelector("span");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("max-w-full", "max-h-full");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass(
      "bg-black",
      "opacity-50",
      "rounded",
      "w-full",
      "h-full",
      "m-auto"
    );
  });

  test("Render dark skeleton", () => {
    const { container } = render(<Skeleton dark />);
    const wrapper = container.querySelector("div");
    const component = wrapper?.querySelector("span");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("max-w-full", "max-h-full");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass(
      "bg-white",
      "opacity-50",
      "rounded",
      "w-full",
      "h-full",
      "m-auto"
    );
  });
});
