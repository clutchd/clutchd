// TODO: fix these tests so they actually run (update types to be accurate as well)
interface BenchmarkData {
  strings: { clutchd: string; clsx: string };
  objects: { clutchd: string; clsx: string };
  arrays: { clutchd: string; clsx: string };
  nested_arrays: { clutchd: string; clsx: string };
  nested_objects: { clutchd: string; clsx: string };
  mixed: { clutchd: string; clsx: string };
  mixed_bad: { clutchd: string; clsx: string };
}

let data: BenchmarkData | undefined;

// ... existing code ...
try {
  data = require("../clsx.benchmark.json");
} catch (e) {
  console.warn(
    "clsx.benchmark.json not found. Please run `pnpm run benchmark` first.",
  );
}

test("strings", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(Number.parseFloat(data?.strings?.clutchd)).toBeGreaterThanOrEqual(
    Number.parseFloat(data?.strings?.clsx),
  );
});

test("objects", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(Number.parseFloat(data?.objects?.clutchd)).toBeGreaterThanOrEqual(
    Number.parseFloat(data?.objects?.clsx),
  );
});

test("arrays", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(Number.parseFloat(data?.arrays?.clutchd)).toBeGreaterThanOrEqual(
    Number.parseFloat(data?.arrays?.clsx),
  );
});

test("nested_arrays", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(
    Number.parseFloat(data?.nested_arrays?.clutchd),
  ).toBeGreaterThanOrEqual(Number.parseFloat(data?.nested_arrays?.clsx));
});

test("nested_objects", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(
    Number.parseFloat(data?.nested_objects?.clutchd),
  ).toBeGreaterThanOrEqual(Number.parseFloat(data?.nested_objects?.clsx));
});

test("mixed", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(Number.parseFloat(data?.mixed?.clutchd)).toBeGreaterThanOrEqual(
    Number.parseFloat(data?.mixed?.clsx),
  );
});

test("mixed_bad", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(Number.parseFloat(data?.mixed_bad?.clutchd)).toBeGreaterThanOrEqual(
    Number.parseFloat(data?.mixed_bad?.clsx),
  );
});
