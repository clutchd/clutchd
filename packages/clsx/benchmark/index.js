const { Suite } = require("benchmark");
const { clsx: og } = require("clsx");
const { clsx: prev } = require("@clutchd/clsx");
const { clsx } = require("../dist/index");

function bench(name, ...args) {
  console.log(`\n# ${name}`);
  new Suite()
    .add("og      ", () => og.apply(og, args))
    .add("prev    ", () => prev.apply(prev, args))
    .add("clsx    ", () => clsx.apply(clsx, args))
    .on("cycle", (e) => console.log("  " + e.target))
    .run();
}

bench("Strings", "foo", "", "bar", "baz", "bax", "bux");

bench(
  "Objects",
  { foo: true, bar: true, bax: true, bux: false },
  { baz: true, bax: false, bux: true }
);

bench("Arrays", ["foo", "bar"], ["baz", "bax", "bux"]);

bench("Nested Arrays", ["foo", ["bar"]], ["baz", ["bax", ["bux"]]]);

bench(
  "Nested Arrays w/ Objects",
  ["foo", { bar: true, bax: true, bux: false }],
  ["bax", { bax: false, bux: true }]
);

bench("Mixed", "foo", "bar", { bax: true, bux: false }, [
  "baz",
  { bax: false, bux: true },
]);

bench(
  "Mixed (Bad Data)",
  "foo",
  "bar",
  undefined,
  null,
  NaN,
  () => {},
  { bax: true, bux: false, 123: true },
  ["baz", { bax: false, bux: true, abc: null }, {}]
);
