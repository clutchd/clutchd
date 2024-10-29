import { Suite, type Target } from "benchmark";
import clsx from "clsx";
import clsxlite from "clsx/lite";
import { clsx as clutchd } from "../dist/index";
import { clsx as clutchdlite } from "../dist/lite";

// biome-ignore lint: we need any here
function bench(name: string, ...args: any[]) {
  type tests = "clsx" | "clsxlite" | "clutchd" | "clutchdlite";
  const results: Record<tests, number> = {
    clsx: 0,
    clsxlite: 0,
    clutchd: 0,
    clutchdlite: 0,
  };
  console.log(`benchmarking - ${name}`);
  new Suite()
    .add("clsx", () => clsx.apply(clsx, args))
    .add("clsxlite", () => clsxlite.apply(clsxlite, args))
    .add("clutchd", () => clutchd.apply(clutchd, args))
    .add("clutchdlite", () => clutchdlite.apply(clutchdlite, args))
    .on("cycle", (result: { target: Target }) => {
      results[result.target.name as tests] = result.target.hz ?? 0;
      console.log(` ${result.target}`);
    })
    .run();
  return results;
}

if (process.env.benchmark) {
  test("strings benchmark faster than og", async () => {
    const strings = bench("strings", "foo", "", "bar", "baz", "bax", "bux");
    expect(strings.clutchd).toBeGreaterThanOrEqual(strings.clsx);
    expect(strings.clutchdlite).toBeGreaterThanOrEqual(strings.clsxlite);
  });

  test("objects benchmark faster than og", async () => {
    const objects = bench(
      "objects",
      { foo: true, bar: true, bax: true, bux: false },
      { baz: true, bax: false, bux: true },
    );
    expect(objects.clutchd).toBeGreaterThanOrEqual(objects.clsx);
    expect(objects.clutchdlite).toBeGreaterThanOrEqual(objects.clsxlite);
  });

  test("arrays benchmark faster than og", async () => {
    const arrays = bench("arrays", ["foo", "bar"], ["baz", "bax", "bux"]);
    expect(arrays.clutchd).toBeGreaterThanOrEqual(arrays.clsx);
    expect(arrays.clutchdlite).toBeGreaterThanOrEqual(arrays.clsxlite);
  });

  test("nested_arrays benchmark faster than og", async () => {
    const nested_arrays = bench(
      "nested_arrays",
      ["foo", ["bar"]],
      ["baz", ["bax", ["bux"]]],
    );
    expect(nested_arrays.clutchd).toBeGreaterThanOrEqual(nested_arrays.clsx);
    expect(nested_arrays.clutchdlite).toBeGreaterThanOrEqual(
      nested_arrays.clsxlite,
    );
  });

  test("nested_objects benchmark faster than og", async () => {
    const nested_objects = bench(
      "nested_objects",
      ["foo", { bar: true, bax: true, bux: false }],
      ["bax", { bax: false, bux: true }],
    );
    expect(nested_objects.clutchd).toBeGreaterThanOrEqual(nested_objects.clsx);
    expect(nested_objects.clutchdlite).toBeGreaterThanOrEqual(
      nested_objects.clsxlite,
    );
  });

  test("mixed benchmark faster than og", async () => {
    const mixed = bench("mixed", "foo", "bar", { bax: true, bux: false }, [
      "baz",
      { bax: false, bux: true },
    ]);
    expect(mixed.clutchd).toBeGreaterThanOrEqual(mixed.clsx);
    expect(mixed.clutchdlite).toBeGreaterThanOrEqual(mixed.clsxlite);
  });

  test("mixed_bad benchmark faster than og", async () => {
    const mixed_bad = bench(
      "mixed_bad",
      "foo",
      "bar",
      undefined,
      null,
      Number.NaN,
      () => { },
      { bax: true, bux: false, 123: true },
      ["baz", { bax: false, bux: true, abc: null }, {}],
    );
    expect(mixed_bad.clutchd).toBeGreaterThanOrEqual(mixed_bad.clsx);
    expect(mixed_bad.clutchdlite).toBeGreaterThanOrEqual(mixed_bad.clsxlite);
  });
} else {
  console.log("skipping benchmark tests")
}