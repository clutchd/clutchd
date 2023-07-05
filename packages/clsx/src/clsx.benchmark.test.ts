let data;

try {
  data = require("../clsx.benchmark.json");
} catch (e) {
  console.warn(
    "clsx.benchmark.json not found. Please run `pnpm run benchmark` first."
  );
}

test("strings", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(parseFloat(data?.["strings"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["strings"]?.["clsx"])
  );
});

test("objects", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(parseFloat(data?.["objects"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["objects"]?.["clsx"])
  );
});

test("arrays", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(parseFloat(data?.["arrays"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["arrays"]?.["clsx"])
  );
});

test("nested_arrays", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(
    parseFloat(data?.["nested_arrays"]?.["clutchd"])
  ).toBeGreaterThanOrEqual(parseFloat(data?.["nested_arrays"]?.["clsx"]));
});

test("nested_objects", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(
    parseFloat(data?.["nested_objects"]?.["clutchd"])
  ).toBeGreaterThanOrEqual(parseFloat(data?.["nested_objects"]?.["clsx"]));
});

test("mixed", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(parseFloat(data?.["mixed"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["mixed"]?.["clsx"])
  );
});

test("mixed_bad", () => {
  if (!data) {
    console.warn("skipping benchmark tests.");
    return;
  }

  expect(parseFloat(data?.["mixed_bad"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["mixed_bad"]?.["clsx"])
  );
});
