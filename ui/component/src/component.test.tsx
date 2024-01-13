// import { render } from "@testing-library/react";
// import * as React from "react";
// import { Component } from ".";

// test("render component", () => {
//   const { container } = render(<Component.div />);

//   const div = container.querySelector("div");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(div).toBeInTheDocument();
// });

// test("render with valid child", () => {
//   const { container } = render(
//     // @ts-ignore
//     <Component.div asChild asdf={"1234"}>
//       <p>Rendering a component as a valid paragraph!</p>
//     </Component.div>
//   );

//   const p = container.querySelector("p");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(p).toBeInTheDocument();
//   expect(p).toHaveAttribute("asdf", "1234");
//   expect(p?.textContent).toEqual("Rendering a component as a valid paragraph!");
// });

// test("render with valid child and props", () => {
//   const { container } = render(
//     // @ts-ignore
//     <Component.div asChild asdf={"1234"}>
//       {/* @ts-ignore */}
//       <p asdf="asdf">Rendering a component as a valid paragraph!</p>
//     </Component.div>
//   );

//   const p = container.querySelector("p");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(p).toBeInTheDocument();
//   expect(p).toHaveAttribute("asdf", "asdf");
//   expect(p?.textContent).toEqual("Rendering a component as a valid paragraph!");
// });

// test("render with invalid and undefined child", () => {
//   const { container } = render(
//     // @ts-ignore
//     <Component.div asChild asdf="asdf">
//       {null}
//     </Component.div>
//   );

//   const div = container.querySelector("div");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveAttribute("asdf", "asdf");
//   expect(div?.hasChildNodes()).toEqual(false);
// });

// test("render with invalid child", () => {
//   const { container } = render(
//     <Component.div asChild>Rendering a div as an invalid string!</Component.div>
//   );

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(container.textContent).toEqual(
//     "Rendering a div as an invalid string!"
//   );
// });

// test("render with invalid child and props", () => {
//   const { container } = render(
//     // @ts-ignore
//     <Component.div asChild asdf={"1234"}>
//       Rendering a div as an invalid string!
//     </Component.div>
//   );

//   const div = container.querySelector("div");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveAttribute("asdf", "1234");
//   expect(div?.textContent).toEqual("Rendering a div as an invalid string!");
// });

// test("render with multiple children", () => {
//   const { container } = render(
//     <Component.div asChild>
//       {/* @ts-ignore */}
//       <p asdf="asdf">Rendering a div as a paragraph!</p>
//       {/* @ts-ignore */}
//       <div asdf="qwerty">Rendering a div as another div!</div>
//     </Component.div>
//   );

//   const p = container.querySelector("p");
//   const div = container.querySelector("div");

//   expect(p).toBeInTheDocument();
//   expect(p).toHaveAttribute("asdf", "asdf");
//   expect(p?.textContent).toEqual("Rendering a div as a paragraph!");
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveAttribute("asdf", "qwerty");
//   expect(div?.textContent).toEqual("Rendering a div as another div!");
// });

// test("Render with multiple children and props", () => {
//   const { container } = render(
//     // @ts-ignore
//     <Component.div asChild asdf="1234">
//       {/* @ts-ignore */}
//       <p asdf="asdf">Rendering a div as a paragraph!</p>
//       {/* @ts-ignore */}
//       <div asdf="qwerty">Rendering a div as another div!</div>
//     </Component.div>
//   );

//   const root = container.querySelector("div");
//   const p = root?.querySelector("p");
//   const div = root?.querySelector("div");

//   expect(root).toBeInTheDocument();
//   expect(root).toHaveAttribute("asdf", "1234");
//   expect(p).toBeInTheDocument();
//   expect(p).toHaveAttribute("asdf", "asdf");
//   expect(p?.textContent).toEqual("Rendering a div as a paragraph!");
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveAttribute("asdf", "qwerty");
//   expect(div?.textContent).toEqual("Rendering a div as another div!");
// });

// test("Render with tailwindcss className", () => {
//   const { container } = render(
//     <Component.div className="bg-red-500">With tailwindcss!</Component.div>
//   );

//   const root = container.querySelector("div");

//   expect(root).toBeInTheDocument();
//   expect(root).toHaveAttribute("class", "bg-red-500");
//   expect(root?.textContent).toEqual("With tailwindcss!");
// });

// test("Render with merged tailwindcss className", () => {
//   const { container } = render(
//     <Component.div className="bg-red-500 bg-blue-500">
//       With tailwindcss!
//     </Component.div>
//   );

//   const root = container.querySelector("div");

//   expect(root).toBeInTheDocument();
//   expect(root).toHaveAttribute("class", "bg-blue-500");
//   expect(root?.textContent).toEqual("With tailwindcss!");
// });

// test("Render asChild with merged tailwindcss className", () => {
//   const { container } = render(
//     <Component.div asChild className="bg-red-500">
//       <Component.div className="bg-blue-500">With tailwindcss!</Component.div>
//     </Component.div>
//   );

//   const root = container.querySelector("div");

//   expect(root).toBeInTheDocument();
//   expect(root).toHaveAttribute("class", "bg-blue-500");
//   expect(root?.textContent).toEqual("With tailwindcss!");
// });

// test("Render with merged tailwindcss className and inconsistent spaces", () => {
//   const { container } = render(
//     // prettier-ignore
//     <Component.div className="bg-red-500 bg-blue-500 shadow rounded-xl">
//       With tailwindcss!
//     </Component.div>
//   );

//   const root = container.querySelector("div");

//   expect(root).toBeInTheDocument();
//   expect(root).toHaveAttribute("class", "bg-blue-500 shadow rounded-xl");
//   expect(root?.textContent).toEqual("With tailwindcss!");
// });
