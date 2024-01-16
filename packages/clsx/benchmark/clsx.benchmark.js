const fsp = require("fs").promises;
const { Suite } = require("benchmark");
const classnames = require("classnames");
const classcat = require("classcat");
const clsx = require("clsx");
const prev = require("@clutchd/clsx").clsx;
const clutchd = require("../dist").clsx;

let results = {};

function bench(name, ...args) {
  console.log(`\n# ${name}`);
  new Suite()
    .add("classcat", () => classcat.apply(classcat, [args]))
    .add("classnames", () => classnames.apply(classnames, args))
    .add("clsx", () => clsx.apply(clsx, args))
    .add("prev", () => prev.apply(prev, args))
    .add("clutchd", () => clutchd.apply(clutchd, args))
    .on("cycle", (e) => {
      results[name] == null
        ? (results[name] = { [e.target.name]: e.target.hz })
        : (results[name][e.target.name] = e.target.hz);
      console.log(" " + e.target);
    })
    .run();
}

async function main() {
  bench("strings", "foo", "", "bar", "baz", "bax", "bux");
  bench(
    "objects",
    { foo: true, bar: true, bax: true, bux: false },
    { baz: true, bax: false, bux: true },
  );
  bench("arrays", ["foo", "bar"], ["baz", "bax", "bux"]);
  bench("nested_arrays", ["foo", ["bar"]], ["baz", ["bax", ["bux"]]]);
  bench(
    "nested_objects",
    ["foo", { bar: true, bax: true, bux: false }],
    ["bax", { bax: false, bux: true }],
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
    ["baz", { bax: false, bux: true, abc: null }, {}],
  );
  await fsp
    .writeFile("./clsx.benchmark.json", JSON.stringify(results))
    .catch((e) => console.error(e));
}

main();
