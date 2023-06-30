let data = {};

try {
  data = require("./clsx.benchmark.json");
} catch (e) {
  console.error(
    "clsx.benchmark.json not found. Please run `pnpm run benchmark` first."
  );
}

test("strings", () => {
  expect(parseFloat(data?.["strings"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["strings"]?.["clsx"])
  );
});

test("objects", () => {
  expect(parseFloat(data?.["objects"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["objects"]?.["clsx"])
  );
});

// test("arrays", () => {
//   expect(parseFloat(data?.["arrays"]?.["clutchd"])).toBeGreaterThanOrEqual(
//     parseFloat(data?.["arrays"]?.["clsx"])
//   );
// });

// test("nested_arrays", () => {
//   expect(
//     parseFloat(data?.["nested_arrays"]?.["clutchd"])
//   ).toBeGreaterThanOrEqual(parseFloat(data?.["nested_arrays"]?.["clsx"]));
// });

// test("nested_objects", () => {
//   expect(
//     parseFloat(data?.["nested_objects"]?.["clutchd"])
//   ).toBeGreaterThanOrEqual(parseFloat(data?.["nested_objects"]?.["clsx"]));
// });

// test("mixed", () => {
//   expect(parseFloat(data?.["mixed"]?.["clutchd"])).toBeGreaterThanOrEqual(
//     parseFloat(data?.["mixed"]?.["clsx"])
//   );
// });

test("mixed_bad", () => {
  expect(parseFloat(data?.["mixed_bad"]?.["clutchd"])).toBeGreaterThanOrEqual(
    parseFloat(data?.["mixed_bad"]?.["clsx"])
  );
});
