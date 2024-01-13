// import { render } from "@testing-library/react";
// import * as React from "react";
// import { Grid } from ".";

// test("render grid", () => {
//   const { container } = render(<Grid />);

//   const div = container.querySelector("div");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveClass("grid");
// });

// test("render grid with custom gap", () => {
//   const { container } = render(<Grid gap="gap-0" />);

//   const div = container.querySelector("div");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveClass("grid");
//   expect(div).toHaveClass("gap-0");
// });

// test("render grid with custom cols", () => {
//   const { container } = render(
//     <Grid
//       gridCols="grid-cols-2"
//       gridColsSm="sm:grid-cols-4"
//       gridColsMd="md:grid-cols-6"
//       gridColsLg="lg:grid-cols-8"
//       gridColsXl="xl:grid-cols-10"
//       gridCols2xl="2xl:grid-cols-12"
//     />
//   );

//   const div = container.querySelector("div");

//   expect(container.hasChildNodes()).toEqual(true);
//   expect(div).toBeInTheDocument();
//   expect(div).toHaveClass("grid");
//   expect(div).toHaveClass("grid-cols-2");
//   expect(div).toHaveClass("sm:grid-cols-4");
//   expect(div).toHaveClass("md:grid-cols-6");
//   expect(div).toHaveClass("lg:grid-cols-8");
//   expect(div).toHaveClass("xl:grid-cols-10");
//   expect(div).toHaveClass("2xl:grid-cols-12");
// });
