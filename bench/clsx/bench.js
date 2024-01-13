import { baseline, bench, group, run } from "mitata";
const fsp = require("fs").promises;
const clsx = require("clsx");
const classcat = require("classcat");
const classnames = require("classnames");
const prev = require("@clutchd/clsx-prev");
const clutchd = require("@clutchd/clsx");

function benchmark(name, ...args) {
  group(name, () => {
    baseline("@clutchd", () => clutchd.clsx(...args));
    bench("prev", () => prev.clsx(...args));
    bench("clsx", () => clsx(...args));
    bench("classcat", () => classcat(...args));
    bench("classnames", () => classnames(...args));
  });
}

benchmark("strings", "foo", "", "bar", "baz", "bax", "bux");
benchmark(
  "objects",
  { foo: true, bar: true, bax: true, bux: false },
  { baz: true, bax: false, bux: true }
);
benchmark("arrays", ["foo", "bar"], ["baz", "bax", "bux"]);
benchmark("nested_arrays", ["foo", ["bar"]], ["baz", ["bax", ["bux"]]]);
benchmark(
  "nested_objects",
  ["foo", { bar: true, bax: true, bux: false }],
  ["bax", { bax: false, bux: true }]
);
benchmark("mixed", "foo", "bar", { bax: true, bux: false }, [
  "baz",
  { bax: false, bux: true },
]);
benchmark(
  "mixed_bad",
  "foo",
  "bar",
  undefined,
  null,
  NaN,
  () => {},
  { bax: true, bux: false, 123: true },
  ["baz", { bax: false, bux: true, abc: null }, {}]
);

const results = await run();

await fsp
  .writeFile("./clsx.json", JSON.stringify(results))
  .catch((e) => console.error(e));
