const fsp = require("fs").promises;
const { Suite } = require("benchmark");
const og = require("clsx");
const clsx = require("../dist").clsx;

let results = {};

async function bench(name, ...args) {
  new Suite()
    .add("clsx", () => og.apply(og, args))
    .add("clutchd", () => clsx.apply(clsx, args))
    .on("cycle", async (e) => {
      results[name] == null
        ? (results[name] = { [e.target.name]: e.target.hz })
        : (results[name][e.target.name] = e.target.hz);
      console.log(name + ": " + e.target);
    })
    .on("complete", async () => {
      // write results
      await fsp
        .writeFile("src/clsx.benchmark.json", JSON.stringify(results))
        .catch((e) => console.error(e));
    })
    .run();
}

bench("strings", "foo", "", "bar", "baz", "bax", "bux");

bench(
  "objects",
  { foo: true, bar: true, bax: true, bux: false },
  { baz: true, bax: false, bux: true }
);

bench("arrays", ["foo", "bar"], ["baz", "bax", "bux"]);

bench("nested_arrays", ["foo", ["bar"]], ["baz", ["bax", ["bux"]]]);

bench(
  "nested_objects",
  ["foo", { bar: true, bax: true, bux: false }],
  ["bax", { bax: false, bux: true }]
);

bench("mixed", "foo", "bar", { bax: true, bux: false }, [
  "baz",
  { bax: false, bux: true },
]);

bench(
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
